import { RouteComponentProps } from "@reach/router";
import React from "react";
import DefaultLayout from "components/Layout/default";

const About = (props: RouteComponentProps<{ uid: string }>) => {
  return (
    <DefaultLayout>
      <div>无情的关于页面</div>
      <div>{props.uid}</div>
    </DefaultLayout>
  );
};

export default About;
