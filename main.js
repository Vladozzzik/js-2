// task 1 Use an Array to Store a Collection of Data
const yourArray = ["hellow", 1, true, 24, "world"];
console.log(yourArray)

// task 2 Access an Array's Contents Using Bracket Notation
const myArray = ["a", "h", "c", "d"];
console.log(myArray[1]);

// task 3 Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  const arrNumbers = arr;
  arrNumbers.unshift("I", 2, "three");
  arrNumbers.push(7, "VIII", 9);
  return arrNumbers;
}
console.log(mixedNumbers(["IV", 5, "six"]));

//  task 4 Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(["challenge", "is", "not", "complete"]));

//   task 5 Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
console.log(arr);

// task 6 Add Items Using splice()
function htmlColorNames(arr) {
  const colorNamesArr = arr;
  colorNamesArr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  return colorNamesArr;
}
console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// task 7 Copy Array Items Using slice()
function forecast(arr) {
  const forcastArr = arr.slice(2, 4);
  return forcastArr;
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

// task 8 Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// task 9 Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
console.log(spreadOut());

// task 10 Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  if (arr.indexOf(elem) === -1) {
    return false;
  }
  return true;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// task 11 Iterate Through All an Array's Items Using For Loops
function filteredArray(arr, elem) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
)
// task 12 Create complex multi-dimensional arrays
let myNestedArray = [
    'level 1',                   
    ['level 2'],	               
    [['level 3','deep']],	       
    [[['level 4','deeper']]],    
    [[[['level 5','deepest']]]]
  ];
  console.log(myNestedArray)

// task 13 Add Key-Value Pairs to JavaScript Objects
let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  foods['bananas'] = 13
  foods['grapes'] = 35
  foods['strawberries'] = 27
  
  console.log(foods)

//   task 14 Modify an Object Nested Within an Object
const userActivity = {
    id: 23894201352,
    date: 'January 1, 2017',
    data: {
      totalUsers: 51,
      online: 42
    }
  }
  userActivity.data.online = 45
  console.log(userActivity)

//   task 15 Access Property Names with Bracket Notation
  const foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  };
  
  function checkInventory(scannedItem) {
    return foods[scannedItem]
  }
  console.log(checkInventory("apples"));

// task 16 Use the delete Keyword to Remove Object Properties
const foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27
  }
  delete foods.oranges
  delete foods.plums
  delete foods.strawberries

  console.log(foods)

// task 17 Check if an Object has a Property
const users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    if(userObj.hasOwnProperty('Alan')&&
    userObj.hasOwnProperty('Jeff')&&
    userObj.hasOwnProperty('Sarah')&&
    userObj.hasOwnProperty('Ryan')){
      return true
    }
    return false
  }
  console.log(isEveryoneHere(users));

// task 18 Iterate Through the Keys of an Object with a for...in Statement

const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  function countOnline(usersObj) {
    let onlineCountUsers = 0
    for(let user in usersObj){
      if(usersObj[user].online == true){
        onlineCountUsers ++
      }
    }
    return onlineCountUsers
   }
   
   console.log(countOnline(users));

// task 19 Iterate Through the Keys of an Object with a for...in Statement
   let users = {
    Alan: {
      age: 27,
      online: false
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function getArrayOfUsers(obj) {
    return Object.keys(obj)
    
  }
  
  console.log(getArrayOfUsers(users))

// task 20 Modify an Array Stored in an Object
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
  
  function addFriend(userObj, friend) {
    userObj.data.friends.push(friend)
    return userObj.data.friends
  }
  console.log(addFriend(user, 'Pete'));