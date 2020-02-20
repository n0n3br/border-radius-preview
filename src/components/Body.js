import React, { useState } from "react";

import ValueInput from "./ValueInput";
import Preview from "./Preview";
import Code from "./Code";

const Body = () => {
  const [state, setState] = useState({
    one: 0,
    two: 0,
    four: 0,
    three: 0
  });

  const handleChange = event =>
    setState({ ...state, [event.target.name]: event.target.value || 0 });

  return (
    <div className="columns has-text-light">
      <div className="column is-three-fifths-desktop is-offset-one-fifth-desktop">
        <div className="columns">
          <div className="column is-one-quarter ">
            <ValueInput
              value={state.one}
              name="one"
              handleChange={handleChange}
            />
          </div>
          <div className="column" />
          <div className="column is-one-quarter ">
            <ValueInput
              value={state.two}
              name="two"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-quarter" />
          <div className="column">
            <Preview state={state} />
          </div>
          <div className="column is-one-quarter" />
        </div>
        <div className="columns">
          <div className="column is-one-quarter ">
            <ValueInput
              value={state.three}
              name="three"
              handleChange={handleChange}
            />
          </div>

          <div className="column" />
          <div className="column is-one-quarter ">
            <ValueInput
              value={state.four}
              name="four"
              handleChange={handleChange}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-fifth" />
          <div className="column">
            <Code state={state} />
          </div>
          <div className="column is-one-fifth" />
        </div>
      </div>
    </div>
  );
};

export default Body;
