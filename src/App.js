import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #3298dc;
  padding-top: 50px;
`;

import Title from "./components/Title";
import Body from "./components/Body";

export default function App() {
  return (
    <Container>
      <div className="container has-text-centered">
        <Title />
        <Body />
      </div>
    </Container>
  );
}
