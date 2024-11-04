// Define an HTML Class in JSX //

/* class is a reserved word in javascript Instead JSX uses className */

/* The naming convention for all HTML attributtes and event references in JSX become camelCase */

/* for example in JSX is onClick instead of onclick
    likewise onchange becomes onChange
*/

/* Free code camp challenge */

const JSX = (
    <div>
      <h1>Add a class to this div</h1>
    </div>
  );

// My solution //

const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );