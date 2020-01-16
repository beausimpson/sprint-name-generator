    // All of the Node.js APIs are available in the preload process.
    // It has the same sandbox as a Chrome extension.
    window.addEventListener('DOMContentLoaded', () => {
    
    let $ = require("jquery")
    // window.Bootstrap = require('bootstrap')

    
    
    
    
    $("#name_generator_button").on("click", function (event) {
        event.preventDefault();
        
        var sprintNumber = $("#sprint_number").val().trim();
        var searchTerm = $("#search_term").val().trim();

        
        $("#generated_sprint_names").html(`<h5>${sprintNumber}</h5><p>${searchTerm}</p>`);

        // console.log(sprintNumber + searchTerm);

        $("#sprint_number").val("");
        $("#search_term").val("");
    
    });


});
    