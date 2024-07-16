import React from "react";
import {
  Provider,
  TestContextValue,
} from "./components/themeContext/LearnContext";
import { DisplayContextValue } from "./components/themeContext/LearnContext";
import testContext from "./context/testContext";
import __UseContext from "./context/__useContext.module";

const App: React.FC = () => {
  return (
    <__UseContext context={testContext} value={"ㅎㅇ"} contextType="provider">
      <TestContextValue context={testContext}></TestContextValue>;
    </__UseContext>
  );
};

export default App;
