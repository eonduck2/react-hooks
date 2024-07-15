const createFocusInput = () => {
  const input = document.createElement("input");
  input.type = "text";

  const button = document.createElement("button");
  button.innerText = "Focus the input";

  button.addEventListener("click", () => {
    input.focus();
    console.log(input);
  });

  const container = document.createElement("div");
  container.append(input, button);

  return container;
};

const app = document.getElementById("app");
app.appendChild(createFocusInput());
