import React from "react";

type GreetProps = {
  name?: string;
};

export default function Greet() {
  return <div>hello</div>;
}

export const GreetTest = (props: GreetProps) => {
  return <div>Hello {props.name} </div>;
};
