# -Modules

=>Create math.js // math.js

👉 This is just a comment. It tells us the file name but does not affect execution. js // Function to add two numbers function add(a, b) { return a + b; }

👉 Defines a function named add: a and b are parameters (inputs). return a + b; means it calculates the sum of a and b and gives the result back. Example: add(3, 2) → 5 js // Function to subtract two numbers function subtract(a, b) { return a - b; }

👉 Defines another function named subtract: a and b are inputs. return a - b; means it calculates the difference of a minus b and returns it. Example: subtract(7, 4) → 3 js // Export functions so they can be used in other files module.exports = { add, subtract };

👉 This line exports the two functions (add and subtract) from this file. In Node.js, module.exports allows us to share code with other files. { add, subtract } means we’re exporting both functions in an object. So if another file (say app.js) does: js const math = require('./math');

=>Create app.js // Import functions from math.js const { add, subtract } = require('./math'); 👉 Here you are importing the functions from math.js. require('./math') loads whatever was exported from math.js. { add, subtract } is object destructuring — it directly pulls out the add and subtract functions from the exported object. So instead of writing: js const math = require('./math'); console.log(math.add(10, 5)); You can write: js const { add, subtract } = require('./math'); console.log(add(10, 5)); js // Use them console.log("Addition: ", add(10, 5));

👉 This calls the add function with arguments 10 and 5. add(10, 5) returns 15. console.log("Addition: ", 15); prints: makefile Addition: 15 js console.log("Subtraction: ", subtract(10, 5));

👉 This calls the subtract function with arguments 10 and 5. subtract(10, 5) returns 5. console.log("Subtraction: ", 5); prints: makefile Subtraction: 5 ✅ Final Output when you run node app.js will be: makefile Addition: 15 Subtraction: 5 console.log(math.add(5, 3)); // 8 console.log(math.subtract(5, 3)); // 2 It will import and use the functions from math.js

=>Create (readBlocking.js) const fs = require('fs');

👉 Loads Node.js’s built-in fs (file system) module. This module provides functions to interact with files (read, write, delete, etc). js try {

👉 Starts a try block to catch any errors that might occur during file reading. js // Blocking (synchronous) file read const data = fs.readFileSync('sample.txt', 'utf8');

👉 fs.readFileSync() reads a file synchronously: 'sample.txt' → the file you want to read. 'utf8' → encoding, so the file content is returned as a readable string instead of raw bytes. Since it’s synchronous, Node.js waits until the file is fully read before moving to the next line. If the file is large, this will block the program until reading finishes. js console.log("Blocking Read Output:"); console.log(data);

👉 Prints the heading, then the content of the file stored in data. Example output (if sample.txt contains Hello Node.js): yaml Blocking Read Output: Hello Node.js js } catch (err) { console.error("Error reading file:", err); }

👉 If something goes wrong (e.g., file not found), the catch block runs and prints an error message. Example error if file doesn’t exist: javascript Error reading file: [Error: ENOENT: no such file or directory, open 'sample.txt']

=> Create (readNonBlocking.js) const fs = require('fs');

👉 Loads Node.js’s built-in File System (fs) module, which gives us methods to read/write files. js // Non-blocking (asynchronous) file read fs.readFile('sample.txt', 'utf8', (err, data) => {

👉 Calls fs.readFile() to read sample.txt: 'sample.txt' → the file to read. 'utf8' → encoding (so you get text, not raw binary). (err, data) => { ... } → callback function that runs later when the file read finishes. ⚡ Important: Node.js does not wait for the file to be read. It schedules this operation in the background and continues with the next code. js if (err) { console.error("Error reading file:", err); return; }

👉 Inside the callback: If an error happens (file missing, permission denied, etc.), it logs the error and exits the callback. js console.log("Non-Blocking Read Output:"); console.log(data);

👉 Still inside the callback: If no error, it prints a heading and then the file content (data). js });

👉 Ends the fs.readFile() call and its callback. js console.log("This line executes before file reading is complete."); 👉 ⚡ Runs immediately after calling fs.readFile(), without waiting for the file read. ✅ Expected Output (if sample.txt has "Hello Node.js"): nginx Copy code This line executes before file reading is complete. Non-Blocking Read Output: Hello Node.js

Write a function that fetches user data (simulate with setimeout) and logs"data received" function fetchUserData() { console.log("Fetching user data...");

👉 Defines a function fetchUserData. First, it logs "Fetching user data..." immediately when called. js return new Promise((resolve) => {

👉 Returns a Promise. A Promise represents an action that will finish later (either success → resolve, or failure → reject). js setTimeout(() => { console.log("Data received"); resolve({ id: 1, name: "John Doe" }); }, 2000);

👉 Inside the Promise: setTimeout(..., 2000) waits 2 seconds (2000 ms). After 2 seconds, it logs "Data received". Then it calls resolve(...), passing an object { id: 1, name: "John Doe" }. This means the Promise is now fulfilled and carries that user data. js }); }

👉 Closes the Promise and the function. So, fetchUserData() → returns a Promise that resolves after 2 seconds with user data. js async function getUser() { const user = await fetchUserData(); console.log("User:", user); }

👉 Defines an async function getUser: await fetchUserData(); → pauses execution of getUser until the Promise from fetchUserData is resolved. After 2 seconds, the resolved data ({ id: 1, name: "John Doe" }) is stored in user. Then it logs "User: { id: 1, name: "John Doe" }". js getUser(); 👉 Calls the getUser function. ✅ Execution Flow (with timing): Immediately: Fetching user data... After 2 seconds: Data received User: { id: 1, name: 'John Doe' } ⏳ If you used .then() instead of async/await, the same could be written as: js fetchUserData().then(user => { console.log("User:", user); });
