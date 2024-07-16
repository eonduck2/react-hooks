document.addEventListener("DOMContentLoaded", () => {
  let state = {
    count: 0,
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    console.log(state);
    render();
  };

  const increment = () => {
    setState({ count: state.count + 1 });
  };

  const Counter = () => {
    const counterDiv = document.createElement("div");

    const countParagraph = document.createElement("p");
    countParagraph.textContent = `Count: ${state.count}`;
    counterDiv.appendChild(countParagraph);

    const incrementButton = document.createElement("button");
    incrementButton.textContent = "Increment";
    incrementButton.addEventListener("click", increment);
    counterDiv.appendChild(incrementButton);

    return counterDiv;
  };

  const render = () => {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = "";
    appDiv.appendChild(Counter());
  };

  render();
});
