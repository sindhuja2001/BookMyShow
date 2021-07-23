import React from "react";
import { Route } from "react-router-dom";

// Layout
import Playslayout from "../layouts/Plays.layout";
const PlaysHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <Playslayout>
            <Component {...props} />
          </Playslayout>
        )}
      />
    </>
  );
};


export default PlaysHOC;