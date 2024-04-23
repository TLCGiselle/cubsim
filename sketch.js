// Variables to store images
let badbird;
let goodbird;

// Variable to store current image
let currentImage;

// Variable to track whether the message should be displayed
let showMessage = false;
let showMessage2 = false;

function setup() {
  createCanvas(1000, 1000);
  background(250);

  // Load images
  goodbird = loadImage('goodbird.png');
  badbird = loadImage('badbird.png');

  // Set the initial image
  currentImage = goodbird;

  // Create buttons
  let buttonYes = createButton('Yes');
  let buttonNo = createButton('No');
  
  // Position buttons
  buttonYes.position(670, 360);
  buttonNo.position(950, 360);

  // Style buttons
  buttonYes.style('background-color', '#4CAF50'); // Green color for "Yes" button
  buttonNo.style('background-color', '#f44336'); // Red color for "No" button

  
  // Add callback functions to handle button clicks
  buttonYes.mousePressed(displayMessageAndChangeToGoodBird);
  buttonNo.mousePressed(displayMessageAndChangeToBadBird);
}

// Function to change to good bird image
function changeToGoodBird() {
  currentImage = goodbird;
}

// Function to change to bad bird image
function changeToBadBird() {
  currentImage = badbird;
}

// Function to display a message and change to good bird image after clicking "Yes"
function displayMessageAndChangeToGoodBird() {
  showMessage = true; // Set showMessage to true to display the message
  setTimeout(() => {
    showMessage = false; // Set showMessage back to false after 1 second
    changeToGoodBird(); // Change to good bird image
  }, 1000);
}

// Function to display a message and change to bad bird image after clicking "No"
function displayMessageAndChangeToBadBird() {
  showMessage2 = true; // Set showMessage2 to true to display the message
  setTimeout(() => {
    showMessage2 = false; // Set showMessage2 back to false after 1 second
    changeToBadBird(); // Change to bad bird image
  }, 1000);
}

function draw() {
  // Clear the background
  background(255);
  
  // Display current image
  image(currentImage,640 , 20,);

  let imageX = (width - currentImage.width) / 2;
 
  // Display first message if showMessage is true
  if (showMessage) {
    textSize(24);
    textAlign(CENTER, CENTER);
    fill(0);
   
    text("I hope you enjoy your lesson",820,350 );
  }
  
  // Display second message if showMessage2 is true
  if (showMessage2) {
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    
    text("WHY DID YOU CLICK ON ME", 730, 350);
  }
}
