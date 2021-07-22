const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
  // because only 1 live squid is available and that is the limiting ingredient

  // same as available1, except live squid has 10.
const available2 = { ...available1, ["live squid"]: 10 };
const expected2 = 10;

  // same as available1 except live squid key is deleted.
const available3 = { ...available1 };
delete available3["live squid"];
  const expected3 = 0; // live squid key doesn't exist in available ingredients

function getMaxServings(recipe, available) {
    let maxDish = Number.POSITIVE_INFINITY;
    for(let key in recipe)  {
        if(available[key]/recipe[key] < maxDish)    {
            maxDish = available[key]/recipe[key];
        }else if(!available[key] / recipe[key])    {
            return 0;
        }
    }
    return maxDish;
}



const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
    firstName: "Person",
    lastName: "One",
    isSocialDistancing: false,
    friends: [friend2, friend3],
    },
    {
    firstName: "Person",
    lastName: "Two",
    isSocialDistancing: true,
    friends: [friend2, friend1],
    },
    {
    firstName: "Person",
    lastName: "Three",
    isSocialDistancing: false,
    friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

function coronaVirusAtRisk(persons) {
    // let friendsRiskFactor =[];
    let atRisk = []
    for(let obj in people)  {
        if(obj.isSocialDistancing === false) {
            for(i = 0; i < obj.friends.length; i++) {
                if(obj.friends[i].isSocialDistancing === false && obj.friends[i].hasCovid === true) {
                    // friendsRiskFactor.push(obj.friends[i]);
                    atRisk.push(`${obj.firstName} ${obj.lastName}`)
                    break;
                }
            }
        }
    }
    return atRisk;
}