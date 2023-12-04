import { createContext, useState } from "react";

const quotesArr = [
    {text: "The journey of a thousand miles begins with one step.", aut: "Lao Tzu"},
    {text: "The only true wisdom is in knowing you know nothing.", aut: "Socrates"},
    {text: "Give me a lever long enough and a fulcrum on which to place it, and i shall move the world.", aut: "Archimedes"},
    {text: "Never interrupt your enemy when he is making a mistake.", aut: "Napoleon Bonaparte"}
]

export const QuoteContext = createContext({
    //properties
    quote: [],
    i: 0,
    favorite: 0,
    //methods
    addFav: () => null,
    removeFav: () => null,
    nextQuote: () => null
});

export const ContextProvider = ({children}) => {

    const [quote, setQuote] = useState(quotesArr[0]);
    const [i, setCountI] = useState(0);
    const [favorite, setFavorite] = useState(0);
    const addFav = () => {setFavorite(favorite + 1)};
    const removeFav = () => {setFavorite(favorite - 1)};
    const nextQuote = () => {
        if (i < 4) {
            setCountI(i + 1);
            setQuote(quotesArr[i]);
        }
        else {
            setCountI(0);
        }
    }
    
    const value = {quote, i, favorite, nextQuote, addFav, removeFav};
    return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
};