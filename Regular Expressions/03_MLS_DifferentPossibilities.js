let petString = "Emma has a pet rock.";
let petRegex = /cat|dog|bird|fish/; // Change this line
let result = petRegex.test(petString);

console.log(result);
