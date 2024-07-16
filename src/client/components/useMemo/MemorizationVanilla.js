let lastA = null;
let lastB = null;
let memoizedResult = 0;

function calculate(a, b) {
  if (lastA === a && lastB === b) {
    return memoizedResult; // 메모이제이션된 결과 사용
  }
  lastA = a;
  lastB = b;
  memoizedResult = a + b; // 새로운 결과 계산
  return memoizedResult;
}

function updateResult() {
  const a = parseFloat(document.getElementById("inputA").value) || 0;
  const b = parseFloat(document.getElementById("inputB").value) || 0;
  const result = calculate(a, b);
  document.getElementById("result").innerText = `Result: ${result}`;
}

document.getElementById("inputA").addEventListener("input", updateResult);
document.getElementById("inputB").addEventListener("input", updateResult);
