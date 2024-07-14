let count = 0;
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
let h1Element = null;

function updateTitle() {
  document.title = `Count: ${count}`;
}

function updateH1() {
  // h1 요소를 새로 생성하고 추가
  h1Element = document.createElement("h1");
  h1Element.textContent = "ㅎㅇ";
  document.getElementById("root").appendChild(h1Element);
}

function cleanup() {
  // 기존 h1 요소가 존재하면 제거
  if (h1Element) {
    document.getElementById("root").removeChild(h1Element);
    h1Element = null; // 참조 초기화
  }
}

// 초기 설정
updateTitle();
updateH1();

// 버튼 클릭 이벤트 처리
incrementButton.addEventListener("click", () => {
  cleanup(); // 이전 h1 요소 제거
  count += 1; // 카운트 증가
  countElement.textContent = `Count: ${count}`; // 카운트 업데이트
  updateTitle(); // 문서 제목 업데이트
  updateH1(); // 새로운 h1 요소 추가
});
