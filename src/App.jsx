import { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import "./App.css";

function App() {
  const [quote, setQuote] =
    useState(`¿Por qué lo usamos? Es un hecho establecido hace demasiado tiempo que
    un lector se distraerá con el contenido del texto de un sitio mientras
    que mira su diseño.`);

  const [author, setAuthor] = useState("Maria José");
  const [backgroundColor, setBackgroundColor] = useState("rgba(255,255,255,");

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        setBackgroundColor(generateRandomColor());
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

  const generateRandomColor = () => {
    const randomColor = `rgb(${200 + Math.floor(Math.random() * 56)}, ${
      200 + Math.floor(Math.random() * 56)
    }, ${200 + Math.floor(Math.random() * 56)})`;
    document.documentElement.style.setProperty(
      "--random-background-color",
      randomColor
    );
    return randomColor;
  };

  return (
    <>
      <div
        style={{
          backgroundColor: backgroundColor,
          width: "100%",
          display: "grid",
          placeContent: "center",
        }}
      >
        <div id="quote-box" className="container">
          <p id="text">
            <ImQuotesLeft style={{ marginRight: "0.5rem" }} />
            {quote}
            <ImQuotesRight style={{ marginLeft: "0.5rem" }} />
          </p>
          <p id="author">
            {" "}
            {" — "}
            {author}
          </p>
          <div className="button-group">
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
