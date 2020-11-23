import React from "react";

import image from "../public/assets/illustration-woman-online-desktop.svg";
import imageForPhone from "../public/assets/illustration-woman-online-mobile.svg";

import FAQItem from "./component/faqItem/faqItem";
import data from "./data";
import "./App.scss";

export default function App() {
  const handelClick = (id) => {
    const details = document.getElementsByTagName("details");
    for (let i = 0; i < details.length; i++) {
      let element = details[i];
      let Elementid = Number(element.getAttribute("data-id"));

      if (Elementid !== id && element.hasAttribute("open")) {
        element.removeAttribute("open");
      }
    }
  };
  return (
    <div className="App">
      <div className="card">
        <div className="image-container">
          <img className="women womenForDesktop" src={image} alt="women" />
          <img
            className="women womenForPhone"
            src={imageForPhone}
            alt="women"
          />
        </div>

        <div className="faq-Container">
          <h1>FAQ</h1>
          <div className="faq-sub-Container">
            {data.map((item, index) => (
              <FAQItem
                key={index}
                id={index}
                handelClick={handelClick}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
