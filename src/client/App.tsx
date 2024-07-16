import React from "react";
import Memoization from "./components/useMemo/Memoization";
import CounterMeMoiCallback from "./components/useCallback/MemoizationCallback";

const App: React.FC = () => {
  return <CounterMeMoiCallback></CounterMeMoiCallback>;
};

export default App;
