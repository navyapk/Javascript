//Q1. Program to find particular character in a string //
let str = "Welcome";
console.log(str);
console.log(str.indexOf("c"));

//Q2. Program to convert minutes to seconds

let minutes = 60;
seconds = minutes * 60;
console.log("60 " + " Min " + " into sec is " + seconds);

//Q3. Program to search element in a array of strings
var array = [-10, -20, 30, -40, -50];

var found = array.find(function (element) {
return element > 0;
});
console.log(found);

//Q4. Program to display only elements containing 'a' in the term of array
array =["Apps","Apple","Animals","Fruits","Banana","Cat","Dog"];
for(let i=0; i<array.length; i++){
    if(array[i].includes("a")){
        console.log(array[i]);
    }
}


//Q5. Print an array in reverse order
Array = ["Animal","Fruits","Vegetables"];
console.log(Array);
Array = ["Animal","Fruits","Vegetables"].reverse();
console.log(Array);