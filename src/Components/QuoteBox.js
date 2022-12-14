import './QuoteBox.css';
import React, {useState, useEffect} from 'react';

const QuoteBox = () => {
    const url = `https://quotes15.p.rapidapi.com/quotes/random/`;

    const [quote, setQuote] = useState('Loading...');
    const [author, setAuthor] = useState('Loading...');
    useEffect(() => {
        const intervalID = setInterval( () => {
        fetch(url, {
            headers: {
                'X-RapidAPI-Key': '07b1181a2amsh5f132f1751e7593p1b6762jsn9ca048dee079',
                'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
            }
        }).then(Response => Response.json())
        .then(data => {
            setQuote(data.content)
            setAuthor(data.originator.name)
        })}, 5000);

        return () => {
            clearInterval(intervalID);
        }
    }, [quote, url])
    return(
        <div className='quote-box'>
            <h3>{quote}</h3>
            <h5>{author}</h5>
        </div>
    );
}

export default QuoteBox;