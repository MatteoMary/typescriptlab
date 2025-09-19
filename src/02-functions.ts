import {Friend, Colleague } from './myTypes'
import { friends } from "./01-basics";
import { colleagues } from "./01-basics";
import { EmailContact } from './myTypes';
function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))


export function allOlder(arr: Friend[]): string[] {
  return arr.map((f) => {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
  });
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

// Add a colleague with extension = (current max + 1)
function addColleague(
  arr: Colleague[],
  name: string,
  department: string,
  email: string
): Colleague {
  const maxExt = arr.reduce(
    (max, c) => Math.max(max, c.contact.extension),
    0
  );
  const newCol: Colleague = {
    name,
    department,
    contact: { email, extension: maxExt + 1 },
  };
  arr.push(newCol);
  return newCol;
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

function findFriends(arr: Friend[], criterion: (f: Friend) => boolean) {
  return arr.filter(criterion).map((f) => f.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith("Pa")));
console.log(findFriends(friends, (friend) => friend.age < 35));

export function addInterest(friend: Friend, interest: string) {
  if (!friend.interests) {
    friend.interests = [];
  }
  friend.interests.push(interest);
  return friend.interests;
}
// Example usage:
console.log(addInterest(friends[0], "Politics"))
