# randomizersameer

`randomizersameer` is a simple Node.js package that randomizes the characters of a given string. It takes an input string, shuffles its characters, and returns the randomized version of that string.

## Installation

You can install `randomizersameer` via npm:

```bash
npm install randomizersameer
```

## Usage

To use the package, simply require it in your project and pass a string to the `randomize` function. It will return a randomized version of the input string.

### Example

```javascript
const randomize = require("randomizersameer");

const randomizedString = randomize("hello world");
console.log(randomizedString); // Outputs a shuffled version of "hello world", e.g., "odlleh wlro"
```

## API

### `randomize(s: string)`

- **Parameters**: 
  - `s` (string): The string to be randomized.
  
- **Returns**: 
  - A new string with the characters of the input string shuffled randomly.

- **Throws**: 
  - An error if the input is not a string.

### Example

```javascript
const randomize = require("randomizersameer");

// Correct usage
console.log(randomize("example")); // Outputs: "maxpele", "pmaleex", etc.

// Incorrect usage
console.log(randomize(12345)); // Throws: Error: It should be a string
```

## Error Handling

If the input is not of type `string`, the function throws an error:

```javascript
throw new Error("It should be a string");
```

