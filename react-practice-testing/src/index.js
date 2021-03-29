// Deleted everthing in the react-practice-testing/src and /public (except for index) 
// Don't have to delete everthing! But we did!
// Imported react from React
import React from 'react';
// Imported react-dom from ReactDOM we need that to update the page virtually
import ReactDOM from 'react-dom';

const element = <h1 id="hi">Hello World</h1>;

ReactDOM.render(element, document.getElementById("root"));