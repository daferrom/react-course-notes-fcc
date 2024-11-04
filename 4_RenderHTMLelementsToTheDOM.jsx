/* Render HTML Elements to the DOM

With React we can render React elements
to the DOM using React's rendering API known as

ReactDOM.render(componentToRender, targetNode)

where the first argument(componentToRender) is the React element or component that you want to render

The second argument is the DOM node that you want to render the component to

As you would esxpect ReactDOm.render() must be called after the JSX element declarations

just like how you must declare variables before using them

*/

// Freecode camp challenge //

// The code editor has a simple JSX component. Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant. //


const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Add your code below this line . My Solution 

  ReactDOM.render(JSX, document..getElementById('challenge-node'))
