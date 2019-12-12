import React from "react";
import DefaultLayout from "components/Layout/default";
import { RouteComponentProps } from "@reach/router";
import { Helmet } from "react-helmet";
const About = (props: RouteComponentProps<{ uid: string }>) => {
  return (
    <DefaultLayout>
      <Helmet>
        <title>关于本站</title>
      </Helmet>
      <div>无情的关于页面</div>
      <div>{props.uid}</div>
    </DefaultLayout>
  );
};

export default About;
