import React from "react";
import DefaultLayout from "components/Layout/default";
import { RouteComponentProps } from "@reach/router";
const App = (_: RouteComponentProps) => {
  return (
    <>
      <DefaultLayout>
        <div>Hei React 首页</div>
      </DefaultLayout>
    </>
  );
};

export default App;
