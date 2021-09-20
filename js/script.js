const $characterName = $('#characterName');
const $mainContent = $('main');
// const $bodyCont = $('body')
const $input = $('input[type="text"]');
const API_URL = `https://pokeapi.co/api/v2/pokemon/`


function render(character) {

    //clears the screen.
    $mainContent.empty();

    // //display pokemon name
    // const $pokemonName = $('<h2>');
    // $pokemonName.text(character.name);
    // $bodyCont.append($pokemonName);



    $characterName.text(character.name);

    const $img = $('<div>');
    $img.addClass('imgs');
    $mainContent.append($img);

    //img front and back
    const $characterImgBack = $('<img>');
    $characterImgBack.attr('src', character.sprites.back_default);
    $characterImgBack.attr('alt', character.name);
    $img.append($characterImgBack);

    const $characterImgFront = $('<img>');
    $characterImgFront.attr('src', character.sprites.front_default);
    $characterImgFront.attr('alt', character.name);
    $img.append($characterImgFront);


    //create a div for attributes and powers
    const $powersAndAttr = $('<div>');
    $powersAndAttr.addClass('powersAndAttr');
    $mainContent.append($powersAndAttr);

    //display power and attributes
    const $powersAndAttrTitle = $('<h2>');
    $powersAndAttrTitle.text('Attributes and Powers:');
    $powersAndAttr.append($powersAndAttrTitle);

    //display some attributes
    const $attr = $('<h3>');
    $attr.text('Attributes');
    $powersAndAttr.append($attr);

    //display height and weight
    const $attrList = $('<ul>');
    $powersAndAttr.append($attrList);

    const $weight = $('<li>');
    $weight.text(`weight: ${character.weight} pounds`)
    $attrList.append($weight);

    const $height = $('<li>');
    $height.text(`height: 0.${character.height} meters`)
    $attrList.append($height);


    //grabs the pokemon type
    const $pokeType = character.types.map(ele => ele.type.name);

    const $type = $('<li>');
    $type.text(`type: ${$pokeType} type`)
    $attrList.append($type);

    //pokemon powers title
    const $powers = $('<h3>');
    $powers.text('Powers');
    $powersAndAttr.append($powers);

    //power list 
    const $powerLists = $('<ul>');
    $powersAndAttr.append($powerLists);




    character.abilities.forEach((abil) => {
        const $abilitii = abil.ability.name
        const $li = $('<li>');
        $li.text($abilitii);
        $powerLists.append($li);
    })

}






$("button").click(function (event) {
    event.preventDefault();

    // AJAX Call here
    console.log('submit clicked')
    nameInput = $input.val();

    $.ajax({
        type: "GET",
        url: `${API_URL}${nameInput}`,
        dataType: 'json',
        success: function (result) {
            console.log(result);
            render(result);
            
        },
        error: function (error) {
            console.log(error)
        }
    });
    return false;
});