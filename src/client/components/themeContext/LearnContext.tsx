import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  Context,
} from "react";

type MyProviderProps = {
  Context: Context<any>;
  value?: unknown;
};

type MyCon = {
  context: Context<any>;
};

const MyContext = createContext("just text");

const Provider: React.FC<PropsWithChildren<MyProviderProps>> = ({
  children,
  Context,
  value,
}) => {
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const DisplayContextValue: React.FC = () => {
  const contextValue = useContext(MyContext);
  return <div>Context Value: {contextValue}</div>;
};

const TestContextValue: React.FC<MyCon> = ({ context }) => {
  const contextValue = useContext(context);
  return <div>Context Value: {contextValue}</div>;
};

export { Provider, DisplayContextValue, TestContextValue };
