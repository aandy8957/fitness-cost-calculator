// 計算初始金額
const totalAmount = 688 * 24 + 999 - 200;

// 從 localStorage 讀取點擊次數，沒有的話預設 0
let count = parseInt(localStorage.getItem("count")) || 0;

function updateDisplay() {
  document.getElementById("count").textContent = count;
  document.getElementById("cost").textContent = count > 0 ? (totalAmount / count).toFixed(2) : 0;
}

document.getElementById("total").textContent = totalAmount;
updateDisplay();

// 點我計算（加一次）
document.getElementById("calcBtn").addEventListener("click", function() {
  count++;
  localStorage.setItem("count", count);
  updateDisplay();
});

// 加一次
document.getElementById("addBtn").addEventListener("click", function() {
  count++;
  localStorage.setItem("count", count);
  updateDisplay();
});

// 減一次
document.getElementById("minusBtn").addEventListener("click", function() {
  if (count > 0) {
    count--;
    localStorage.setItem("count", count);
    updateDisplay();
  }
});

// 重置
document.getElementById("resetBtn").addEventListener("click", function() {
  count = 0;
  localStorage.setItem("count", count);
  updateDisplay();
});
