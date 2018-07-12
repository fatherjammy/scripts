var jsonData = new XMLHttpRequest();
jsonData.open('GET', 'http://api.tvmaze.com/shows/11538');
jsonData.onload = function() {
    var showData = JSON.parse(jsonData.responseText);
    var episodeLinks = showData._links;
    var nothing = 0;
    var nextEpisode = episodeLinks.nextepisode;
    console.log(nextEpisode);
};
jsonData.send();