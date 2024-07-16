import TContext from "./Context.type";
import TContextType from "./ContextType.type";
import TSelectContextType from "./SelectContextType.type";
import TValue from "./Value.type";

type __TUseContext = TValue & TContext & TSelectContextType;

export default __TUseContext;
