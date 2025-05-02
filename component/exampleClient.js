"use client";

import ExampleServer from "./exampleServer";

export default function ExampleClient() {
  console.log("from the client");
  return (
    <>
      <p>this is from the client component</p>
      {/* <ExampleServer /> */}
    </>
  );
}
