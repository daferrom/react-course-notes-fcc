/* React is an Open Source view library

Created and maintained by Facebook

Its a great tool to render UI of modern web apps

React uses an extension of JavaScript

called JSX

Allows to write directly HTML within Javascript

It lets use programmatic power of Javascript within HTML

to write directly Javascript within JSX

*/

{'This is trated as Javascript code'}

/* However because JSX is not valid Javascript

JSX code must be compiled into Javascript

The transpiler Babel is a popular tool for this process.

*/

/* Under the hood the challenges are calling */

ReactDOM.render(JSX, document.getElementById('root'))

/* This function call is what places your JSX into
React's own lightweight representation of the DOM
to optimize updating only specific parts of the actual DOM */

/* Freecode camp challenge

The current code uses JSX to assign a div element to the constant JSX.
Replace the div with an h1 element and add the text Hello JSX! inside it.
*/

const JSX = <div></div>;

// Solution //

const JSX = <h1>Hello JSX!</h1>;



