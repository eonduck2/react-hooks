import React, { Consumer, Context, Provider } from "react";

type TContextType = {
  provider?: Provider<string>;
  consumer?: Consumer<string>;
  displayName?: string;
};

export default TContextType;
