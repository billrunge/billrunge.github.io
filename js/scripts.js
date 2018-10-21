
var htmlString = "";

function displayHtml(displayString) {
    document.getElementById("betterName").innerHTML = displayString;
}

function buildString(url, displayName){
    return "<a class=\"dropdown-item\" href=\"" + url +"\">" + displayName + "</a>";
}


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.github.com/users/billrunge/repos', true);

request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    data.forEach(repo => {
        htmlString += buildString(repo.html_url, repo.name);
        console.log(repo.html_url + " " + repo.name);
    });
    displayHtml(htmlString);
}
// Send request
request.send();



