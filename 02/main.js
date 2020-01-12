var notebook = {
    brand: prompt("Enter a brand"),
    type: prompt("Enter a type"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter ram"),
    size: +prompt("Enter size"),
    weight: +prompt("Enter weight"),
    resolution: {
        width: +prompt("Enter width"),
        height: +prompt("Enter height"),
    },
};

var phone = {
    brand: prompt("Enter a brand"),
    model: prompt("Enter a model"),
    ram: +prompt("Enter ram"),
    color: prompt("Enter a color"),
};

var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: prompt("Enter a status"),
}