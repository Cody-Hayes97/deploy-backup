import React from "react";

export const Lyrics = props => {
  return (
    <div>
      <h3 style={{ marginBottom: "1%" }}>{props.heading}</h3>
      <p
        style={{
          width: "10%",
          textAlign: "center",
          marginLeft: "45%",
          fontSize: "20px"
        }}
      >
        {props.lyrics}
      </p>
    </div>
  );
};
