import React from "react";
import { GreetProps } from "./greet.types";

export default function Greet() {
  return <div>hello</div>;
}

export const GreetTest = (props: GreetProps) => {
  return <div>Hello {props.name ? props.name : "ylm"} </div>;
};
