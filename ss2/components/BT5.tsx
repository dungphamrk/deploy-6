import React from "react";
import "./BT5.scss";

export default function BT5() {
  return (
    <div className="container">
      <div>
        <i className="fa-solid fa-circle-exclamation icon"></i>
        <h2 className="title">Delete blog post</h2>
        <p className="message">
          Are you sure you want to delete this post? This action cannot be
          undone.
        </p>
        <div className="button-container">
          <button className="cancel">Cancel</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}
