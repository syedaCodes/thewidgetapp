import React, { useState } from 'react';
// import Accordian from './Components/Accordion';
// import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a front end javascript framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is a favorite JS library among engineers'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'You use React by creating components'
//     }
// ];

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];


const App = () => {

    const [ selected, setSelected ] = useState(options[0]);

    return (
        <div className="container">
            {/* <Accordian items={items} /> */}
            {/* <Search /> */}
            <Dropdown selected={selected}
            onSelectedChange={setSelected}
            options={options}/>
        </div>
    )
};

export default App;