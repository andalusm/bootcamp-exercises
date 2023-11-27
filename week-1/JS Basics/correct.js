const word1 = "Hello";
const word2 = "World";

function concate() {
    console.log(word1 + ", " + word2 + "!");
}

const printerManager = {    
    printHello: function func() {
        console.log(HELLO);
    },
    text: "Click me",
    printBtn: function() {
        console.log("Button clicked!");
    }
};

function addNum(num1, num2) {
    const sum = num1 + num2;
    console.log('Sum is: ' + sum);
}

printHelloWorld();
printerManager.printBtn();
addNum(5, 3);

const weatherManager = {
    temp: 24,
    type: "sunny",
    print: function() {
        console.log("It is " + this.type + " and the temperature is " + this.temp + "°C.");
    }
};

weatherToday.print();