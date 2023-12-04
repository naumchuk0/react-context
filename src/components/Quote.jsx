import { useContext, useState } from "react";
import { QuoteContext } from "../contexts/quote.context";
import './Quote.css';

function Quote() {
    // const quotes = [
    //     {text: "The journey of a thousand miles begins with one step.", aut: "Lao Tzu"},
    //     {text: "The only true wisdom is in knowing you know nothing.", aut: "Socrates"},
    //     {text: "Give me a lever long enough and a fulcrum on which to place it, and i shall move the world.", aut: "Archimedes"},
    //     {text: "Never interrupt your enemy when he is making a mistake.", aut: "Napoleon Bonaparte"}
    // ]
    // const [quote, setQuote] = useState(quotes);
    // const [i, setCountI] = useState(0);
    // const nextQuote = () => {
    //     if (i < 4) {
    //         setCountI(i + 1);
    //         setQuote(quotes[i]);
    //     }
    //     else {
    //         setCountI(0);
    //     }
    // }

    const {quote, removeFav, nextQuote, addFav} = useContext(QuoteContext);

    return(
        <div>
            <div class="card">
                <div class="back-btn">
                    <p>{quote.text}</p>
                    <button class="btn" onClick={nextQuote}>Next &#8594;</button>
                </div>
                <p class="author">{quote.aut}</p>
            </div>
            <button onClick={addFav} class="favorite">♡</button>
            <button onClick={removeFav} class="remove-favorite">💔</button>
        </div>
    )
}

export default Quote;