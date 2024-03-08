const http = require("http");
constqs = require('querystring')


// var StringDecoder = require("string_decoder").StringDecoder;
// new comment for point 5


// Generate a random number between 1 and 100 for the user to guess
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Function to display the HTML form for the number guessing game
const displayForm = (message = '') => {
  return `
      <body>
          <h2>Number Guessing Game</h2>
          <p>${message}</p>
          <form method="POST">
              <label for="guess">Enter your guess (between 1 and 100):</label><br>
              <input type="number" id="guess" name="guess" min="1" max="100" required><br><br>
              <button type="submit">Submit Guess</button>
          </form>
      </body>
  `;
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      const userGuess = parseInt(formData.guess);

      // Check if the user's guess is correct, too low, or too high
      let message = '';
      if (userGuess === randomNumber) {
        message = `Congratulations! You guessed the correct number (${randomNumber}). Try again!`;
        randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
      } else if (userGuess < randomNumber) {
        message = 'Too low! Try a higher number.';
      } else {
        message = 'Too high! Try a lower number.';
      }

      // Display the form again with the updated message
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(displayForm(message));
    });
  } else {
    // Display the initial form
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(displayForm());
  }
});

// Listen for incoming requests on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});