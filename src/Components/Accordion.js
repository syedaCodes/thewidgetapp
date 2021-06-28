import React, { useState } from 'react';
import Icon from '../assets/sprite.svg';

const Accordion = ({ items }) => {

    const [ activeIndex, setActiveIndex ] = useState(null);

    const updateActiveIndex = (index) =>{
        setActiveIndex(index);
    }
    
    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';
        const svg = index === activeIndex ? 'down': 'right';

        return (
            <div key={item.title} className="questionBox">
                <div 
                className={`question ${active}`}
                onClick={() => updateActiveIndex(index)}>
                    <svg className="dropdown">
                        <use xlinkHref={`${Icon}#icon-caret-${svg}`}></use>
                    </svg>
                    {item.title}
                </div>
                <div className="content">
                    {item.content}
                </div>
            </div>
        )
    })

    return (
        <div class="wrapper">
            <h1 className="heading" title="accordion">Accordion</h1>
            <div className="questions">
                {renderedItems}
            </div>
        </div>
    )
}

export default Accordion; 
