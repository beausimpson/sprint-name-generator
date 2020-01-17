// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {

    require("dotenv").config();
    let $ = require("jquery")
    // window.Bootstrap = require('bootstrap')

    var converter = require('number-to-words');
    var Spotify = require('node-spotify-api');

    // variable that imports key.js file
    var keys = require("./keys.js");

    // accesses the spotify keys
    var spotify = new Spotify(keys.spotify);





    $("#name_generator_button").on("click", function (event) {

        event.preventDefault();

        var sprintNumber = $("#sprint_number").val().trim();
        var searchTerm = $("#search_term").val().trim();

        const omdb = process.env.OMDB_APIKEY;
        const queryURL = `http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=${omdb}`;

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            console.log(response)

            $("#generated_sprint_names").html(`<h5>${converter.toWordsOrdinal(sprintNumber)} ${response.Title}</h5>`);

            $("#sprint_number").val("");
            $("#search_term").val("");

        });


    });


});





// function spotifySong(nodeArgs) {
//     // fixes Node Argument issue if song has more than 1 word in name
//     // var nodeArgs = process.argv;
//     var songName = "";
//     for (var i = 3; i < nodeArgs.length; i++) {

//         if (i > 3 && i < nodeArgs.length) {
//             songName = songName + "+" + nodeArgs[i];
//         }
//         else {
//             songName += nodeArgs[i];
//         }
//     }

//     // sets default song parameter if user does not enter song
//     // -- does not add "The Sign" by Ace of Base as listed in instructions
//     if (songName === "") {
//         song = "The Sign"
//     } else {
//         song = songName
//     }

//     spotify.search({ type: 'track', query: `${song}`, limit: '5' }, function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }

//         var song = {
//             "Artist": `${data.tracks.items[0].album.artists[0].name}`,
//             "Song Name": `${data.tracks.items[0].name}`,
//             "Album": `${data.tracks.items[0].album.name}`,
//             "Preview URL": `${data.tracks.items[0].preview_url}`,
//         };

//         console.log(JSON.stringify(song, null, 3));
//         logData(song);
//     });
// };