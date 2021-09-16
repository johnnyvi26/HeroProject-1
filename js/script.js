const $characterName = $('#characterName');
const $characterImg = $('#characterImg');
const $powers = $('#powers');
const $characterBio = $('#characterBio');
const $characterInfo = $('#characterInfo');
const $input = $('input[type="text"]');


function HandleGetData(evt) {
    nameInput = $input.val();

    $.ajax({
        url: `https://superheroapi.com/api/4726525207391640/search/${nameInput}`
    }).then(
        (data) => {
            console.log(data);
            render(data);
        },
        (error) => {
            console.log("Oops something went wrong: ", error);
        }
    );
}

