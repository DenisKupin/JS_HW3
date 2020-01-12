var notebook = {
    brand: "HP",
    type: "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
};

var phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
};

var person = {
    name: "Donald",
    surname: "Trump",
    married: true,
    laptop: {
        name: "laptop",
        owner: ""
    },
    smartphone: {
        name: "smartphone",
        owner: ""
    }
}

person.laptop.owner = "Donald"
person.smartphone.owner = "Donald"