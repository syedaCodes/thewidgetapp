import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, getTerm ] = useState('programming');
    const [ debouncedTerm, setDebouncedTerm ] = useState(term);
    const [ results, setResults ] = useState([]);

    useEffect(() => {

        const timerId = setTimeout(() => {
                setDebouncedTerm(term)
        }, 1000);

        return() => {
            clearTimeout(timerId);
        }
    },[term]);

    useEffect(() => {
        //fetch req and update term and setResults
        const findTerm = async () => {

            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });

            setResults(data.query.search);
        };

        if(debouncedTerm){
            findTerm();
        }

    }, [debouncedTerm]);


    const renderResults = results.map((result) => {
        const regex = /(<([^>]+)>)/gi; 
        const cleanSnippet = result.snippet.replace(regex, "");

            return (
                <div className="result"
                key={result.pageid}
                >
                    <h2 title="" className="result__title">{result.title}</h2>
                    <div className="result__content">
                        <p className="result__desc">{cleanSnippet}</p>
                        <a href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                    </div>
                </div>
            )
        });

    return (
        <div className="wrapper">
            <h1 className="heading" title="search">Search</h1>
            <div className="search">
                <form>
                    <input type="text" 
                    placeholder="Search" 
                    className="search__input" 
                    aria-label="search"
                    value={term}
                    onChange={e=>getTerm(e.target.value)}/>
                </form>
                <div className="search__results">
                    {renderResults}
                </div>
            </div>
        </div>
    )
}

export default Search;
