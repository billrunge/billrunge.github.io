var gitHubUserName = "billrunge";

function displayHtml(displayString) {
    document.getElementById("repo-list").innerHTML = displayString;
}

function buildString(url, displayName) {
    return "<a class=\"dropdown-item\" href=\"" + url + "\">" + displayName + "</a>";
}

function nameScrubber(repoName){
    return repoName.replace(/-/g," ");
}


var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/' + gitHubUserName + '/repos', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    var htmlString = "";

    data.forEach(repo => {
        htmlString += buildString(repo.html_url, nameScrubber(repo.name));
    });

    displayHtml(htmlString);
}

request.send();



