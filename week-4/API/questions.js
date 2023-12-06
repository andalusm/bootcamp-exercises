$.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/people", function (data, status) {

    // How many people are there? (no children / spouses)
    console.log(data.length)
    // What is the type of the 19th Person’s first pet?
    console.log(data[18].family.pets[0].breed.type)
    const person = data.find(p => p.name.first === "Rebecca" && p.name.last === "Parker")
    const petName = person.family.pets[0].name;
    $.get("https://ele-people-api-8eb0b1bd9b96.herokuapp.com/pets", function (pets) {
        const pet = pets.find(p => p.name === petName)
        console.log(pet.neutered)
    });




})


