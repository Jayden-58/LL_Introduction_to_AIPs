var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=xXPvQwsyC76lYl8bJfuOW3NB9WL8Ybo6');

request.onload = function(){
    var response = request.response;
    var parcedData = JSON.parse(response);
    console.log(parcedData);
}

request.send();