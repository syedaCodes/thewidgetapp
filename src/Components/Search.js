import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [ term, getTerm ] = useState('');
    const [ results, setResults ] = useState([]) 

    useEffect(() => {

        const findTerm = async () =>{
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });

            setResults(data.query.search);
        };

        if(term){
            findTerm();
        }

    }, [term]);

    const renderResults = results.map((result) => {
            return (
                <div className="result" key={result.pageid}>
                    <h2 title="" className="result__title">{result.title}</h2>
                    <p className="result__desc">{result.snippet}</p>
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
