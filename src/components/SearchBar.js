import React from "react";
import { Input } from "reactstrap";

export const SearchBar = props => {
  return (
    <div>
      <Input
        style={{
          width: "50%",
          marginLeft: "25%",
          marginBottom: "2%"
        }}
        type="text"
        value={props.search}
        onChange={props.handleChange}
        placeholder="Enter Artist Name"
      ></Input>
      <Input
        style={{
          width: "50%",
          marginLeft: "25%",
          marginBottom: "2%"
        }}
        type="text"
        value={props.title}
        onChange={props.handleTitleChange}
        placeholder="Enter Song Name"
      ></Input>
    </div>
  );
};
