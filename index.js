// Problem - 1
const multiply = (a, b, c) => a * b * c;
// console.log(multiply(7, 8, 9));

// task2
const sentence = `I am a web developer.
I love to code.
I love to eat biriyani.`;
// console.log(sentence);

// Task 3

const add = (x, y = 6) => x + y;
// console.log(add(10));

// task 3.1
const add2 = (x, y = "") => x + y;
// console.log(add2("hasan"));

// problem - 2
const evenCheck = () => {
  let newFriends = [];
  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      newFriends.push(friend);
    }
  }
  return newFriends;
};
const friends = ["alian", "anik", "sohan", "akhi"];
console.log(evenCheck(friends));
