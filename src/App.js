import "./App.css";
import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
const App = () => {
  const url = "https://api.quotable.io/random";
  const mainUrl = window.location.href;
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
        <div>
          <FacebookShareButton
            quote={`${quote.author} Once Said "${quote.content}"`}
            url={mainUrl}
          >
            <FacebookIcon round={true}></FacebookIcon>
          </FacebookShareButton>
          <TelegramShareButton
            url={mainUrl}
            title={`${quote.author} Once Said "${quote.content}"`}
          >
            <TelegramIcon round={true}></TelegramIcon>
          </TelegramShareButton>
          <LinkedinShareButton
            url={mainUrl}
            title={`${quote.author} Once Said "${quote.content}"`}
          >
            <LinkedinIcon round={true}></LinkedinIcon>
          </LinkedinShareButton>
          <TwitterShareButton
            url={mainUrl}
            title={`${quote.author} Once Said "${quote.content}"`}
          >
            <TwitterIcon round={true}></TwitterIcon>
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default App;
