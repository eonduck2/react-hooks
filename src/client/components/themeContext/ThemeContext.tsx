import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

const MyContext = createContext({
  count: 0,
  increment: () => {},
});

const MyProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <MyContext.Provider value={{ count, increment }}>
      {children}
    </MyContext.Provider>
  );
};

const Counter = () => {
  const { count, increment } = useContext(MyContext);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

const ThemeContext: React.FC = () => (
  <MyProvider>
    <Counter />
  </MyProvider>
);

export default ThemeContext;
