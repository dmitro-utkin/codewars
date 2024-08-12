// You have a group chat application, but who is online!?

// You want to show your users which of their friends are
// online and available to chat!

// Given an input of an array of objects containing usernames,
// status and time since last activity (in mins),
// create a function to work out who is online, offline and away.

// If someone is online but their lastActivity was more
// than 10 minutes ago they are to be considered away.

// The input data has the following structure:

const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

// The corresponding output should look as follows:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// If for example, no users are online the output should look as follows:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username will always be a string, status will always
// be either 'online' or 'offline' (UserStatus enum in C#)
// and lastActivity will always be number >= 0.

// Finally, if you have no friends in your chat application,
// the input will be an empty array [].
// In this case you should return an empty object {} (empty Dictionary in C#).

// input array
// output object

// algo
// 1. create an empty object
// 2. check if the status is online
// 3. if the status is online, push the username to the object
// 4. check if the status is offline
// 5. if the status is offline, push the username to the object
// 6. check if the status is away
// 7. if the status is away, push the username to the object
// 8. return the object

// v1
const whosOnline = (friends) => {
  let obj = {};
  for (let friend of friends) {
    if (friend.status === "online") {
      if (friend.lastActivity > 10) {
        obj.away
          ? obj.away.push(friend.username)
          : (obj.away = [friend.username]);
      } else {
        obj.online
          ? obj.online.push(friend.username)
          : (obj.online = [friend.username]);
      }
    } else if (friend.status === "offline") {
      obj.offline
        ? obj.offline.push(friend.username)
        : (obj.offline = [friend.username]);
    }
  }
  return obj;
};

console.log(whosOnline(friends));