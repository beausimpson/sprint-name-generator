// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  require('jquery');
  
  const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const type of ['chrome', 'node', 'electron']) {
      replaceText(`${type}-version`, process.versions[type])
    }

    document.getElementById("name_generator_button").addEventListener("click", generateName);

    function generateName() {
      console.log("test")  
    }

    // $("#name_generator_button").on("click", function (event) 
    // {event.preventDefault();
    // console.log("test")
    // });

});
  