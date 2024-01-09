import fs from "fs";

function decode(message_file) {
  // Use the fs library to read the file
  const fileContents = fs.readFileSync(message_file, "utf-8");

  // Remove the whitespace, split by newlines and return keys, then sort by ascending number order
  const rows = fileContents
    .split(/\r?\n/)
    .sort((a, b) => parseInt(a) - parseInt(b));

  // define the createStaircase closure function  
  function createStaircase(pairs) {

    // Initialize the subsets array and the incrementing step variable
    const subsets = [];
    let step = 1;

    // For each string of the pairs array, 
    for (let str of pairs) {

      // Splice the required number of elements, then push that new array into the subsets array and increment step
      subsets.push(pairs.splice(0, step));
      step++;
    }

    // return the subsets array
    return subsets;
  }

  // Store the finished staircase of the organized file contents in a new variable
  const staircase = createStaircase(rows);

  // Initialize the words array where you'll store the decoded message
  const words = [];

  // For each subset of the staircase, 
  for (let subset of staircase) {

    // Split the last element in each subarray on a space, separating the number and its associated word, then push the word into the words array
    const lastPair = subset[subset.length - 1].split(" ");
    words.push(lastPair[1]);
  }

  // Join the words array into a string and return it
  return words.join(" ");
}

// Example usage:
const decodedMessage = decode(
  "C:\\Users\\Isaac\\Documents\\GitHub\\LitLobby\\coding_qual_input.txt"
);
console.log(decodedMessage); // Output the decoded message
