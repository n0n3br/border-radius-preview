import React, { Fragment, useState } from "react";

import styled from "styled-components";

const Notification = styled.div`
  margin-top: 10px;
`;

const TextArea = styled.textarea`
  min-height: 100px !important;
`;

const Code = ({ state = { one: 0, two: 0, four: 0, three: 0 } }) => {
  const [showMessage, setShowMessage] = useState(false);

  const css = `div { 
    border-radius: ${Object.values(state)
      .map(s => String(s) + "px")
      .join(" ")};
}`;

  const handleClick = event => {
    setShowMessage(false);
    event.target.select();
    document.execCommand("copy");
    setShowMessage(true);
    const timer = setTimeout(() => {
      setShowMessage(false);
      clearTimeout(timer);
    }, 3000);
  };

  return (
    <Fragment>
      <h1 className="subtitle has-text-light">
        ...and click on the code to copy it to clipboard
      </h1>

      <TextArea
        className="textarea is-family-code"
        readOnly
        value={css}
        onClick={handleClick}
      />
      {showMessage && (
        <Notification className="notification is-primary">
          Css code succesfully copied
        </Notification>
      )}
    </Fragment>
  );
};

export default Code;
