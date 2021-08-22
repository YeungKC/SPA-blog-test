import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { encode } from "./hepler/caesar_cipher";
import printDiscussionCategories from "./api/discussion_categories";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

declare global {
  interface Window {
    encode: (text: String) => string;
    printDiscussionCategories: (count?: number) => void;
  }
}
window.encode = encode;
window.printDiscussionCategories = printDiscussionCategories;
