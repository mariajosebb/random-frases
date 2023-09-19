import { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./App.css";

function App() {
  const [quote, setQuote] =
    useState(`¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo que
    un lector se distraerá con el contenido del texto de un sitio mientras
    que mira su diseño.`);

  useEffect(() => {
    if (quote.length > 140) {
      setQuote(`${quote.slice(0, 137)}...`);
    }
  }, [quote]);

  return (
    <>
      <div id="quote-box" className="container">
        <p id="text">
          <ImQuotesLeft />
          {quote}
          <ImQuotesRight />
        </p>
        <p id="author">Maria Jose</p>
        <button id="new-quote"></button>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </>
  );
}

export default App;
