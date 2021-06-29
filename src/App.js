import React from 'react';
// import Accordian from './Components/Accordion';
import Search from './Components/Search';
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];


const App = () => {
    return (
        <div className="container">
            {/* <Accordian items={items} /> */}
            <Search />
        </div>
    )
};

export default App;