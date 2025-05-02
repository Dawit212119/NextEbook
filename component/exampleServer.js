import { Client } from "./client";
import ExampleClient from "./exampleClient";

export default function ExampleServer() {
  console.log("from  the server component");
  return (
    <>
      <p>im from the server component</p>;
      <ExampleClient />
    </>
  );
}
