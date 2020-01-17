    // All of the Node.js APIs are available in the preload process.
    // It has the same sandbox as a Chrome extension.
    window.addEventListener('DOMContentLoaded', () => {
    
    require("dotenv").config();
    let $ = require("jquery")
    // window.Bootstrap = require('bootstrap')

    var converter = require('number-to-words');

    
    
    
    
    $("#name_generator_button").on("click", function (event) {

        event.preventDefault();
        
        var sprintNumber = $("#sprint_number").val().trim();
        var searchTerm = $("#search_term").val().trim();

        const omdb = process.env.OMDB_APIKEY;
        const queryURL = `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=${omdb}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then( function (response) {
            
            console.log(response)
            
            $("#generated_sprint_names").html(`<h5>${converter.toWordsOrdinal(sprintNumber)} ${response.Title}</h5>`);
            
            $("#sprint_number").val("");
            $("#search_term").val("");

        });
        

        // console.log(sprintNumber + searchTerm);

    
    });


});
    