let font1;

let userInput;
let button;
let saveButton;
let poem = [];
let textStyle = "Abstract"; // Default text style
let backgroundStyle = "Abstract"; // Default background style
let poemTitle = ""; // Store the generated title

function preload() {
  font1 = loadFont('Monstrous_Fish.otf');
}

function setup() {
  createCanvas(600, 600);
  textFont(font1);

  // Title above input and buttons
  let mainTitle = createElement('h1', 'Get Funky with Words');
  mainTitle.style('font-family', 'Arial, sans-serif');
  mainTitle.style('color', 'purple');
  mainTitle.style('text-align', 'center');
  mainTitle.position(0, 0);
  mainTitle.size(400);

  // Input field and buttons
  userInput = createInput();
  userInput.position(40, 90);
  button = createButton('Add to Poem');
  button.position(userInput.x, userInput.y + 30);
  button.mousePressed(() => {
    let modifiedLine = replaceLastWordWithRhyme(userInput.value());
    userInput.value('');
    poem.push(modifiedLine);

    // Generate the title only if it's not already set
    if (poemTitle === "") {
      poemTitle = generateTitle();
    }
  });

  saveButton = createButton('Save Poem');
  saveButton.position(userInput.x, userInput.y + 60);
  saveButton.mousePressed(savePoem);

  // Background style dropdown
  let backgroundDropdown = createSelect();
  backgroundDropdown.position(40, height + 20);
  backgroundDropdown.option('Abstract');
  backgroundDropdown.option('Plain');
  backgroundDropdown.changed(() => {
    backgroundStyle = backgroundDropdown.value();
  });

  // Text style dropdown
  let textDropdown = createSelect();
  textDropdown.position(200, height + 20);
  textDropdown.option('Abstract');
  textDropdown.option('Plain');
  textDropdown.changed(() => {
    textStyle = textDropdown.value();
  });
}

function draw() {
  // Set the background based on the selected style
  if (backgroundStyle === "Abstract") {
    abstractBackground();
  } else if (backgroundStyle === "Plain") {
    background(255); // White background
  }

  displayTitle();
  writePoem();
}

// Abstract-themed background
function abstractBackground() {
  background(random(255), random(255), random(255)); // Dynamic random colors
}

// Function to replace the last word of a sentence with a rhyming word
function replaceLastWordWithRhyme(sentence) {
  let words = RiTa.tokenize(sentence);
  if (words.length === 0) return sentence; // If input is empty, return unchanged

  let lastWord = words[words.length - 1];
  let rhymes = RiTa.rhymesSync(lastWord);

  if (rhymes.length > 0) {
    let randomRhyme = random(rhymes); // Pick a random rhyme
    words[words.length - 1] = randomRhyme;
  }

  return RiTa.untokenize(words); // Return the modified sentence
}

// Function to write the poem on the canvas
function writePoem() {
  for (let x = 0; x < poem.length; x++) {
    if (textStyle === "Plain") {
      fill(0); // Black text for the "Plain" style
    } else if (textStyle === "Abstract") {
      fill(random(255), random(255), random(255)); // Random color for "Abstract" text
    }
    textSize(30 + (textStyle === "Abstract" ? sin(frameCount * 0.05 + x) * 5 : 0)); // Pulsating effect for Abstract text
    text(poem[x], 40, 250 + x * 50); // Dynamic spacing for each line
  }
}

// Function to save the poem as a text file
function savePoem() {
  saveStrings(poem, 'my_poem.txt'); // Save the poem array as a text file
}

// Function to display the poem title
function displayTitle() {
  fill(0); // Static black color for the title
  textSize(50); // Larger font size for the title
  textAlign(LEFT);
  text(`Title: ${poemTitle}`, 40, 220);
}

// Generate a title based on the poem content
function generateTitle() {
  if (poem.length > 0) {
    let randomLine = poem[floor(random(poem.length))];
    let words = RiTa.tokenize(randomLine);
    return "The Tale of " + words[words.length - 1]; // Use the last word of a random line
  }
  return "Untitled Poem";
}
