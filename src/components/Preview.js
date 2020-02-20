import React from "react";

import styled from "styled-components";

const Square = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  opacity: 0.4;
  border: solid 5px #3273dc;
  border-radius: ${props => props.borders};
`;

const Preview = ({ state = { one: 0, two: 0, four: 0, three: 0 } }) => {
  return (
    <Square
      borders={Object.values(state)
        .map(s => String(s || 0) + "px")
        .join(" ")}
    />
  );
};

export default Preview;
