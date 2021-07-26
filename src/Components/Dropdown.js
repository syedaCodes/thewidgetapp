import React, { useState } from 'react';
import Icon from '../assets/sprite.svg';

const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [ open, setOpen ] = useState(false);

    const renderOptions = options.map((option) => {
        if(option.value === selected.value){
            return null;
        }
        
    return (
        <li className="option" 
            key={option.value}
            onClick={() => {onSelectedChange(option)}}>
                {option.label}
         </li>
        );
         
    })
    
    return (
        <div className="wrapper">
            <h1 className="heading">Choose a Color</h1>
            <div className="select">
                <label className="select__label" htmlFor="options">Select a Color</label>
                <div className="colors">
                    <div className={`box ${open? 'boxActive' : ''}`}>
                        <div className="box__wrapper" onClick={() => setOpen(!open)}><span>{selected.label}</span>
                            <svg className="dropdown">
                                <use xlinkHref={`${Icon}#icon-caret-down`}></use>
                            </svg>
                        </div>
                        <ul className="options">
                            {renderOptions}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dropdown;
