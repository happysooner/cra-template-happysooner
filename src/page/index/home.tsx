import React from "react";
import DefaultLayout from "components/Layout/default";
import { RouteComponentProps } from "@reach/router";
import { Helmet } from "react-helmet";
import useRequest from "lib/useRequest";

const App = (_: RouteComponentProps) => {
  const { data } = useRequest<{
    Result: any;
  }>({
    method: "get",
    url: "/api/v1/writing/articles/1/comments?Page=1&Size=100"
  });
  if (!data) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        loading...
      </div>
    );
  }
  return (
    <>
      <DefaultLayout>
        <Helmet>
          <title>微风好天气</title>
        </Helmet>
        <div className="home-container">
          {data.Result.Comments.map((i: any) => {
            return <div key={i.Id}> {i.Content}</div>;
          })}
        </div>
      </DefaultLayout>
      <style jsx>{`
        .home-container div {
          padding: 5px 0;
        }
      `}</style>
    </>
  );
};

export default App;
