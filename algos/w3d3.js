/* 
  Given an array of objects, a searchFor string, and searchBy key that exists in the object
  return a new array of only those objects whose value for the given key starts with the given search string
  You can assume the key will exist on the object and the value of that key will be a string
  Bonus: make the search case insensitive
  Bonus: re-write it with functional programming in mind, using built in methods
*/




// uwuwuwuwuwwuwuwuwuwuwuwuwuwuwu
const people = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
    {
      firstName: "Eddy",
      lastName: "Lee",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
    {
      firstName: "Edward",
      lastName: "Kim",
    },
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Fawn",
    },
  ];
  
  const searchFor2 = "ohn"
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "Jane",
      lastName: "Doe",
    },
  ];

  function filterByKey(items, searchFor, searchBy) {
    let resultsArr = [];
    for(let i = 0; i < items.length; i++)    {
        let obj = items[i]
        if(obj[searchBy].substring(0, searchFor.length).toLowerCase() === searchFor.toLowerCase())   {
            resultsArr.push(obj);
        }
    }
    return resultsArr;
  }
function filterByKey(items, searchFor, searchBy) {
    return items.filter((item) => item[searchBy].substring(0, searchFor.length).toLowerCase() === searchFor.toLowerCase())
}



  const students = [
    {
      firstName: "FN1",
      lastName: "LN1",
      habits: [
        "doesn't wash dishes",
        "falls asleep in lecture",
        "shows up early",
      ],
    },
    {
      firstName: "FN2",
      lastName: "LN2",
      habits: ["shows up late", "washes dishes", "helps peers"],
    },
    {
      firstName: "FN3",
      lastName: "LN3",
      habits: ["doesn't wash dishes", "hoards snacks", "shows up late"],
    },
    {
      firstName: "FN4",
      lastName: "LN4",
      habits: ["shows up early", "helps peers", "washes dishes"],
    },
  ];
  
  const badHabit1 = "doesn't wash dishes";
  const expected1 = ["FN1 LN1", "FN3 LN3"];
  
  const badHabit2 = "shows up late";
  const expected2 = ["FN2 LN2", "FN3 LN3"];
  
  const badHabit3 = "vapes too much";
  const expected3 = [];

function santasNaughtyList(persons, badHabit) {
    let resultsArr = [];
    for (let i = 0; i < persons.length; i++){
        let obj = persons[i];
        for(let j = 0; j < obj.habits.length; j++)  {
            if(badHabit === obj.habits[j])  {
                resultsArr.push(`${obj.firstName} ${obj.lastName}`) // obj.firstName+ ' '+obj.lastName
                break;
            }
        }
    }
    return resultsArr;
}

function santasNaughtyList(persons, badHabit) {
    return persons.filter((person) => person.habits.includes(badHabit)).map((person) => `${person.firstName} ${person.lastName}`)
}