// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

    require("dotenv").config();
    let $ = require("jquery");
    require('popper.js');
    require('bootstrap');

    var converter = require('number-to-words');
    var Spotify = require('node-spotify-api');

    // variable that imports key.js file
    var keys = require("./keys.js");

    // accesses the spotify keys
    var spotify = new Spotify(keys.spotify);

    $("#name_generator_button").on("click", function (event) {

        event.preventDefault();
        
        $("#generated_sprint_names").html("");
        
        var searchTerm = $("#search_term").val().trim();
        var sprintNumber = $("#sprint_number").val().trim();
            // console.log(typeof(sprintNumber));
        
        
        // if (sprintNumberValue = "") {
        //     sprintNumber = ""
        // } else {
        //     console.log(typeof(sprintNumber));
        //     sprintNumber = converter.toWordsOrdinal(sprintNumber)
        // }

        // const omdb = process.env.OMDB_APIKEY;
        // const queryURL = `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=${omdb}`;

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {

        //     console.log(response)

        //     $("#generated_sprint_names").html(`<h5>${converter.toWordsOrdinal(sprintNumber)} ${response.Title}</h5>`);

        //     $("#sprint_number").val("");
        //     $("#search_term").val("");

        // });

        const song = searchTerm

        spotify.search({ type: 'track', query: `${song}`, limit: '10' }, function (err, data) {

            // testing random name generator selector
            let randomWord = Math.floor(Math.random() * (data.tracks.items.length));
            console.log(data.tracks.items[randomWord].name);

            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var i;
            for (i=0; i < data.tracks.items.length; i++) {

                if (data.tracks.items[i].name.split("(")[0].endsWith("s")) {
                   let replacedString = data.tracks.items[i].name.split("(")[0].replace(/.$/,"zzz")

                   $("#generated_sprint_names").append(`<h4>${converter.toWordsOrdinal(sprintNumber)} ${replacedString}</h4>`);

                } else {
                    $("#generated_sprint_names").append(`<h4>${converter.toWordsOrdinal(sprintNumber)} ${data.tracks.items[i].name.split("(")[0].trim()}</h4>`);
                }

                
                $("#sprint_number").val("");
                $("#search_term").val("");

            };
            
        });

    });

});