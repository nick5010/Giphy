var animals = ['dog', 'cat', 'bird', 'hedgehog', 'chinchilla', 'chicken', 'rabbit']


function displayAnimals() {
    var entry = $(this).attr('data-name');
    $('#animal').empty();
    //  GY5YeZqo1EopyOosWfh3fJocMzHpiSuy api key
    queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + entry + '&api_key=GY5YeZqo1EopyOosWfh3fJocMzHpiSuy&limit=10&rating=pg'
    console.log(entry)
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var animalDiv = $('<div class="animal-div"></div>');

        for (i = 0; i < response.data.length; i++) {
            console.log(response.data)
            animalDiv.append('<img class="gif" data-gif="' + response.data[i].images.original.url + '" data-still="' + response.data[i].images.original_still.url + '" src=' + response.data[i].images.original.url + '>');
            $('#animal').append(animalDiv);
        }
    });
}




$('#add-btn').click(function(){
    if($('#inputAddress').val().trim() === ""){
        return;
    }
    event.preventDefault();
    var addedAnimal= $('#inputAddress').val().trim();
    animals.push(addedAnimal);
    renderButtons();
});

function renderButtons() {
    $('#button-view').empty();
    for (i = 0; i < animals.length; i++) {
        var a = $('<button></button>');
        a.addClass('animal-btn');
        a.attr('data-name', animals[i]);
        a.text(animals[i])
        $('#button-view').append(a);
    }

}

$(document).on('click', '.animal-btn', displayAnimals)
renderButtons();

$(document).on('click', '.gif', function() {
    console.log(this);
    if ($(this).attr('src') === $(this).attr('data-gif')) {
        $(this).attr("src", $(this).attr("data-still"));
    } else {
        $(this).attr("src", $(this).attr("data-gif"));
    }
})
// animalDiv.append('<img src=' + response.data[i].images.original_still.url + '>');