const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

let state = initialState;

const render = () => {
  console.clear(); // 콘솔을 지우고 상태 출력
  console.log(`Count: ${state.count}`);
  console.log("Commands:");
  console.log("1: Increment");
  console.log("2: Decrement");
  console.log("3: Reset");
  console.log("4: Exit");
};

const dispatch = (action) => {
  state = reducer(state, action);
  render();
};

// 초기 렌더링
render();

// 사용자 입력 처리
const input = require("readline-sync");

while (true) {
  const choice = input.question("Select an option (1-4): ");
  switch (choice) {
    case "1":
      dispatch({ type: "increment" });
      break;
    case "2":
      dispatch({ type: "decrement" });
      break;
    case "3":
      dispatch({ type: "reset" });
      break;
    case "4":
      console.log("Exiting...");
      process.exit();
    default:
      console.log("Invalid option. Please try again.");
  }
}
