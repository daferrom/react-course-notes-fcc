/* Add Comments in JSX

JSX is a syntax that gets compiled into valid JavaScript

To put comments inside JSX you use the syntax:
*/

{/*This is a commented line code on JSX */}

/* Free Code Camp challenge 

The code editor has a JSX element similar 
to what you created in the last challenge. 
Add a comment somewhere within the provided div element, 
without modifying the existing h1 or p elements.

*/

const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );

// My Solution //

const JSX = (
    <div>
      <h1>This is a block of JSX</h1>
      {/*This is acommented line code in JSX */}
      <p>Here's a subtitle</p>
    </div>
  );