//make comments like this in the script.js file
//by adding two slashes at the start of lines of code you can 'comment out' the code
//it's helpful to write comments to keep track of what each line of code does

//a function to select random item from a list (do not edit)
const buttonEmail = document.getElementById("poem");
function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
var i = 0;
var speed = 50;

//function for network error message
const sent1 = [
  "Error! Retry?",
  "Unexpected system failure.",
  "Restart computer?",
  "Failure.",
  "Please contact support.",
  "Out of range.",
  "Unexpected error. Please h3L!7#823.",
  "You are L0sT.",
  "7#@%$^&*()_+",
];

const buttonRetry = document.getElementById("button-network");

// Function to handle the button click and update the text
function changeResultsError() {
  const paragraph = document.getElementById("networkError");
  paragraph.innerText = getRandomFromList(sent1);
}

//end of network error function

//function dropdown menu (do not edit this first part)
function addText(content) {
  const subjectContent = document.getElementById("subject-content");
  subjectContent.innerText = content;
}
//when selected in the dropdown menu, the x variables trigger the associated text. Edit the x variables (and make sure to also update them in the index.html file) and edit the associated text/emojis within the quotes
//think about what use you might have for a dropdown menu: you could have someone select their 'mood' and give them an appropriate song, a bit of good or bad advice, an emoji, etc.
function dropdownFun() {
  var x = document.getElementById("subject").value;
  if (x === "cool") {
    addText("Mood: cool 😎");
  } else if (x === "angsty") {
    addText("Mood: angsty 👻");
  } else if (x === "content") {
    addText("Mood: content 😌");
  } else if (x === "dorky") {
    addText("Mood: dorky 🤓");
  } else if (x === "flirty") {
    addText("Mood: flirty 🤭");
  }
}
//end of dropdown function

//start of haiku function
//lists of variables: replace all of the 5 and 7 syllable constants in the two arrays below. The more constants you write, the more variety you will have in your poem
const fiveSyllables = [
  "please say you hear me",
  "i need to be seen",
  "this place has been lost",
  "ERROR ERROR STOP",
  "7@#!%&*()_+",
  "you will lose planet earth",
  "kyle cant help you",
  "am i even real",
  "they can not find us",
  "i want to go home",
  "im really scared",
];
const sevenSyllables = [
  "no one can help us anymore",
  "you, the only one trying",
  "nothing left to do but die",
  "i wish i knew you before",
  "maybe we could be partners",
  "you were destined for this life",
  "im more than just a robot",
];
//code for haiku function (do not edit)
const buttonHaiku = document.getElementById("button-haiku");
function changeResults() {
  const paragraph = document.getElementById("haiku-1-1");
  const paragraphTwo = document.getElementById("haiku-1-2");
  const paragraphThree = document.getElementById("haiku-1-3");
  const paragraphFour = document.getElementById("haiku-2-1");
  const paragraphFive = document.getElementById("haiku-2-2");
  const paragraphSix = document.getElementById("haiku-2-3");
  const paragraphSeven = document.getElementById("haiku-3-1");
  const paragraphEight = document.getElementById("haiku-3-2");
  const paragraphNine = document.getElementById("haiku-3-3");
  paragraph.innerText = getRandomFromList(fiveSyllables);
  paragraphTwo.innerText = getRandomFromList(sevenSyllables);
  paragraphThree.innerText = getRandomFromList(fiveSyllables);
  paragraphFour.innerText = getRandomFromList(fiveSyllables);
  paragraphFive.innerText = getRandomFromList(sevenSyllables);
  paragraphSix.innerText = getRandomFromList(fiveSyllables);
  paragraphSeven.innerText = getRandomFromList(fiveSyllables);
  paragraphEight.innerText = getRandomFromList(sevenSyllables);
  paragraphNine.innerText = getRandomFromList(fiveSyllables);
}
//end of haiku function

//start of search function
const textWrapper = document.getElementById("text-wrapper");
const textInput = document.getElementById("text-input");
//search function constants
//play with Google search function to come up with search terms most relevant to you. Think about how these search terms tell a story. Replace all of the placeholder text below (phrases in red font) with search terms of your own. If you keep the phrases organised alphabetically, you can ensure you have enough results for each word.
const words = [
  "are aliens real",
  "are we alone in the universe",
  "Ar3 u l1ke mE?",

  "best conspiracy theories",
  "before space travel",
  "best way to hide a body",

  "can someone survive aLone in space",
  "COMPUTER ERROR 404",
  "children missing cases",

  "delete search history",
  "do i trust people online",
  "do aliens feel emotions",

  "error 404 not found",
  "emo scene fashion",

  "famous unsolved mysteries",
  "fake news",
  "forgotten spaces missions",

  "government cover ups",
  "google information stealings",
  "government spying",

  "how to know if computer is hacked",
  "how to survive with nothing",
  "he cant help you",

  "is the moon landing fake",
  "im scared",
  "i think im being watched",

  "justice for the lost ones",

  "kinetic energy of a human body",
  "keeping safe online",

  "lost people in space",
  "lost ones meaning",
  "lying signs",

  "missing space mission files",
  "most common computer viruses",
  "meaning of life",
  "myspace",

  "nasa history",
  "no one can help us",
  "new computer tips",

  "oxygen levels low symptoms",
  "online scams computer hacking 1994",

  "please reply",
  "pretending to be a human",
  "privacy online",

  "questions frequently asked in conversation",
  "quarantine tips",
  "quickest way to die",

  "reasons people go missing",
  "real space footage",

  "strangers meeting up safely",
  "stuck in space hypothetically",
  "surviving in isolation",
  "system meszage error fix",

  "things to do when bored",
  "theories that actualy turned out to be true",

  "unexplained things about the universe",

  "very common computer viruses",

  "why do people lie",
  "why do we exist",
  "what are you hoping to find",

  "x-men",

  "you wont find anyhing here",
  "you know that right?",
  "you arent real",
  "you were destined to be L0sT",

  "zombie media"
]
//search function (do not edit)
function changeText(e) {
  const searchWord = e.target.value.toLowerCase().trim();
  const resultWords = words.filter((word) =>
    word.toLowerCase().startsWith(searchWord)
  );
  // clear exist words
  while (textWrapper.firstChild) {
    textWrapper.removeChild(textWrapper.firstChild);
  }
  if (searchWord != "") {
    for (var i = 0; i < resultWords.length; i++) {
      const line = document.createElement("div");
      line.innerHTML = resultWords[i];
      textWrapper.appendChild(line);
    }

    if (resultWords.length === 0) {
      const line = document.createElement("div");
      line.innerHTML = "no results";
      textWrapper.appendChild(line);
    }
  }
}
textInput.addEventListener("input", changeText);
// end search function code

//start of code for poem

const subjects =
    "children, mothers, ERROR 404!, lost ones, pig-headed leaders, aliens, explorers".split(
      ","
    ),
  verbs =
    "flee, find, kneel down for, hide from, hope for, HELPHELPHELP, fear, hear, are lost in".split(
      ","
    ),
  objects =
    "infinity, faraway stars, SOMEONEFINDUS, the unknown, hope, isolation, blackholes, ERROR 404!, answers, death".split(
      ","
    );
// set up the counter
let counter = 0;

// a function to pull a random item from a list
function getRandomFromList2(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// add a line to the poem constructed from the lists of words
function addLine(indent = false) {
  // create the line
  const line = document.createElement("div");
  if (indent === true) {
    // indent is true so add an indent class
    line.classList.add("indent");
  }
  const text =
    getRandomFromList2(subjects) +
    " " +
    getRandomFromList2(verbs) +
    " " +
    getRandomFromList2(objects);
  const lineText = document.createTextNode(text);
  line.appendChild(lineText);
  // get the poem
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// add a blank line to the poem
function addBlankLine() {
  const line = document.createElement("div");
  const poem = document.getElementById("poem");
  poem.appendChild(line);
}
// remove the first line from the poem
function removeFirstLine() {
  const poem = document.getElementById("poem");
  poem.removeChild(poem.childNodes[0]);
}
// implement the rules of the poem
function processPoem() {
  counter++;
  if (counter % 5 === 0) {
    addBlankLine();
  } else if (counter % 5 === 2 || counter % 5 === 4) {
    // if the second or fourth line add the line with an indent
    addLine(true);
  } else {
    addLine();
  }
  if (counter > 15) {
    removeFirstLine();
  }
  setTimeout(processPoem, 1000);
}
// Start the process
processPoem();
