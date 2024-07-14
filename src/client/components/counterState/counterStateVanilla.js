let count = 0;

const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

const updateCountDisplay = () => {
  countDisplay.textContent = `Count: ${count}`;
};

incrementButton.addEventListener("click", () => {
  count++;
  updateCountDisplay();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateCountDisplay();
});

resetButton.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
});

updateCountDisplay();
