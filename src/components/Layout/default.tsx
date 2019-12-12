import React from "react";
import { Link } from "@reach/router";
/**
 * 默认的布局
 * @param props
 */
const DefaulLayout: React.SFC = props => (
  <>
    <div className="default-layout">
      <nav>
        <Link to="/">首页</Link>
        <Link to="/about/1">关于</Link>
      </nav>
      <div className="main-container">{props.children}</div>
    </div>
    <style jsx>
      {`
        .main-container {
          color: #333;
          margin: 20px 0;
        }
        .default-layout {
          padding: 0 10vw;
        }
      `}
    </style>
  </>
);

export default DefaulLayout;
