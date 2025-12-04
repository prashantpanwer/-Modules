

function add(a, b) {
return a + b;
}
function subtract(a, b) {
return a - b;
}

module.exports = { add, subtract };



const { add, subtract } = require('
./math');

console.log("Addition: "
, add(10, 5));
console.log("Subtraction: "
, subtract(10, 5));

=>Create (readBlocking.js)
const fs = require('fs');
try {

const data = fs.readFileSync('sample.txt'
,
'utf8');
console.log("Blocking Read Output:");
console.log(data);
} catch (err) {
console.error("Error reading file:"
, err);
}

=> Create (readNonBlocking.js)
const fs = require('fs');

fs.readFile('sample.txt'
,
'utf8'
, (err, data) => {
if (err) {
console.error("Error reading file:"
, err);
return;
}
console.log("Non-Blocking Read Output:");
console.log(data);
});
console.log("This line executes before file reading is complete.");

=> Write a function that fetches user data
(simulate with setimeout) and logs"data received"

function fetchUserData() {
console.log("Fetching user data...
");
return new Promise((resolve) => {
setTimeout(() => {
console.log("Data received");
resolve({ id: 1, name: "John Doe" });
}, 2000);
});
}
async function getUser() {
const user = await fetchUserData();
console.log("User:"
, user);
}
getUser();