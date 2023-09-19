import { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialTumbler } from "react-icons/ti";
import "./App.css";

function App() {
  const [quote, setQuote] =
    useState(`¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo que
    un lector se distraerá con el contenido del texto de un sitio mientras
    que mira su diseño.`);

  const [author, setAuthor] = useState("Maria José");

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => {
        console.log(error);
        setQuote("Error fetching quote");
        setAuthor("Error fetching author");
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    if (quote.length > 140) {
      setQuote(`${quote.slice(0, 137)}...`);
    }
  }, [quote]);

  return (
    <>
      <div style={{ width: "100%", display: "grid", placeContent: "center" }}>
        <div id="quote-box" className="container">
          <p id="text">
            <ImQuotesLeft style={{ marginRight: "0.5rem" }} />
            {quote}
            <ImQuotesRight style={{ marginLeft: "0.5rem" }} />
          </p>
          <p id="author">
            {" "}
            {"— "}
            {author}
          </p>
          <div className="button-group">
            <a
              className="button"
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>

            <a
              className="button"
              id="tumblr-quote"
              href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DBooker%2BT.%2BWashington%26content%3DFew%2Bthings%2Bcan%2Bhelp%2Ban%2Bindividual%2Bmore%2Bthan%2Bto%2Bplace%2Bresponsibility%2Bon%2Bhim%252C%2Band%2Bto%2Blet%2Bhim%2Bknow%2Bthat%2Byou%2Btrust%2Bhim.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialTumbler />
            </a>
            <button
              onClick={() => fetchQuote()}
              className="button"
              id="new-quote"
            >
              New Quote
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: "small" }}>By Maria José</p>
      </div>
    </>
  );
}

export default App;
