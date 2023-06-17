// require connection function
const {connect} = require('./client.js');

// require function to handle user input
const {setupInput} = require('./input.js');

console.log('Connecting ...');
;

// pass the connection obj as a parameter to the function
// that will write to the server the user's input
setupInput(connect());
