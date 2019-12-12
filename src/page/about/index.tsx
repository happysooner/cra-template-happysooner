import { RouteComponentProps } from "@reach/router";
import React from "react";
import DefaultLayout from "components/Layout/default";

interface AboutIProps {
  uid?: string;
}
const About = (props: RouteComponentProps & AboutIProps) => {
  return (
    <DefaultLayout>
      <div>无情的关于页面</div>
      <div>{props.uid}</div>
    </DefaultLayout>
  );
};

export default About;
