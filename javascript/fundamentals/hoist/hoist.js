// Problem 1 //
console.log(hello);
var hello = 'world';

/*
var hello;
console.log(hello);
hello = 'world';
expected:
undefined
*/

//Problem 2//
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

/*
var needle;
needle = 'haystack';
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
test();
expected:
magnet
*/

// Problem 3 //
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

/*
var brendan;
brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
expected:
super cool
*/

// Problem 4 //
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

/*
var food;
food = 'chicken';
console.log(food);
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
eat();
expected:
chicken
half-chicken
*/

// Problem 5 //
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
console.log(food);
*/

// expected: mean is initialized but has no value so it returns a mean is not a function error

// Problem 6 //
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre;
console.log(genre);
genre = "disco";
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

Expected:
Undefined
rock
r&b
r&b
*/

// Problem 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

/*
dojo = "san jose";
console.log(dojo);
function learn() {
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo);

expected:
san jose
seattle
burbank
san jose
*/

// Problem 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo;
    dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    } else if(dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

Expected:
Parse error dojo is a const and cannot be reassigned
*/