const QUESTIONS = [
    "Who is Daruieste Viata?",
    "Hello",
    "Where can I donate?",
    "Who is the founder?",
    "Tell me some cool statistics!",
    "What projects are they currently working on?"
];

const ANSWERS = [
    "The Daruieste Viata Association is a Romanian NGO. They have raised million of euros to help fund the medical infrastructre of Romania. They are known for having built an oncology hospital in Bucharest.",
    "Hello! If you have any questions, just ask me. I will do my best to answer them.",
    "You can donate right on the Daruieste Viata's website. It only takes a few minutes: https://www.daruiesteviata.ro/investeste",
    "The assosiaction was founded by Carmen Uscatu and Oana Gheorghiu. Asociația Dăruiește Viață was founded with a mission to improve Romania's medical infrastructure and patient care, focusing particularly on children battling serious illnesses.",
    "The DV Association has, so far, raised over 53 million euro, from 350.000 individuals and 8.000 companies!",
    "They are currently working on a new Pediatric Medical Campus at the Marie Curie Hospital in Bucharest. Alongside construction projects, Dăruiește Viață supports healthcare access through patient guidance and medical support programs."
];

const messageBox = document.getElementById("messages");
const inputBox = document.getElementById("chatbox");
const form = document.getElementById("chatbot-form");

function addText(text) {
    let node = document.createElement("p");
    node.appendChild(document.createTextNode(text));
    messageBox.appendChild(node);
}

function getInput(e) {
    let input = inputBox.value;
    // Send the message
    addText(`User: ${input}`);
    
    
    // Get the answer
    let i = QUESTIONS.findIndex(q => q == document.getElementById("chatbox").value) 
    let answer = i == -1 ? "Sorry, I do not have an aswer to that." : ANSWERS[i];
    addText(`Bot: ${answer}`);
    inputBox.value = "";
    e.preventDefault();
}

form.addEventListener("submit", getInput);