import React from "react";

/**
 * 默认的布局
 * @param props
 */
const DefaulLayout: React.SFC = props => (
  <>
    <div className="default-layout">{props.children}</div>
    <style jsx>
      {`
        div {
          color: red;
        }
      `}
    </style>
  </>
);

export default DefaulLayout;
