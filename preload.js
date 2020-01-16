// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  
  let $ = require("jquery")
  window.Bootstrap = require('bootstrap')
  
  

  

    $("#name_generator_button").on("click", function (event) {
      event.preventDefault();
    console.log("test")
    });

});
  