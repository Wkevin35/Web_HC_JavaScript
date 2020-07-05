document.getElementById("body1").innerHTML = "Hello World";

var a = 20;      //number
var b = 1.5;     //float
var c = "text";  //string
var d = true;    //boolean

console.log(a);

console.log(a+5);
console.log(a-5);
console.log(a*5);
console.log(a/5);
console.log(a%3);
console.log(a**3);

var num1 = 5;
console.log(num1 += 5);
console.log(num1 -= 5);
console.log(num1 *= 5);
console.log(num1 /= 5);
console.log(num1 %= 5);
console.log(num1 **= 5);

function functionA() {
    console.log("functionA");
}

functionA();

function functionB(number) {
    console.log(number+10);
}

functionB(5);

function mul(a, b) {
    console.log(`相乘: ${a*b}`);
}

mul(3, 2);

var car = {
    brand: "BMW",
    cc: 500,
    color: "black",
    event: () => {
        console.log('事件');
    }
}
console.log(car.brand);
car.event();

var box2 = document.getElementById("box2");

box2.onclick = () => {
    console.log("click");
};
box2.onmouseenter = () => {
    console.log("mouse enter");
};
box2.onmouseleave = () => {
    console.log("mouse leave");
};

var myArray = [10, 100, 21, 9];

console.log(`第0筆資料: ${myArray[0]}`);
myArray[0] = 20;
console.log(`第0筆資料: ${myArray[0]}`);
console.log(`長度: ${myArray.length}`);

var numberA = "100";
var numberB = 100;
console.log(numberA === numberB);

var testA = true;

console.log(!testA);

// &&
console.log("&&");
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||
console.log("||");
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);