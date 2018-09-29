$(document).ready(function () {

    // Initial array of topics
    var topics = ["White Tea", "Black Tea", "Green Tea", "Oolong Tea"];

    function displayTopicInfo() {

        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=QPelEyu2TpuV6EAM7q68fpYQT0v6XDTy";

        //Get data from giphy website
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#topics-view").text(JSON.stringify(response));
        });
    };
    displayTopicInfo();
    //Display data in button
    function makeButtons() {

        $("#buttons-view").empty();
        //looping through topics
        for (var i = 0; i < topics.length; i++) {

            var gifButton = $("<button>");
            // Adding a class of topic to our button
            gifButton.addClass("topic");
            // Adding a data-attribute
            gifButton.attr("data-name", topics[i]);
            console.log(topics[i]);
            // Providing the initial button text
            gifButton.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(gifButton);
        }
        
    }
    makeButtons();
});

