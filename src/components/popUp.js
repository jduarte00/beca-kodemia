import React from "react";

export default function PopUp(props) {
  return (
    <div className="container">
      <div class="alert alert-success" role="alert">
        {props.message}
      </div>
    </div>
  );
}
