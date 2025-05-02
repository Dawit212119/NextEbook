"use client";
import ExampleClient from "@/component/exampleClient";
import ExampleServer from "@/component/exampleServer";

export default function Home() {
  console.log("from the server page");
  return (
    <>
      {" "}
      <h1>welcome</h1>
      <ExampleClient />
      {/* <ExampleServer /> */}
    </>
  );
}
