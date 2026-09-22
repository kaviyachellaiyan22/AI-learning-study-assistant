// Scroll to Study Planner

function scrollToPlanner() {
    document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
    });
}


// Create Learning Plan

function createPlan() {

    const subject = document.getElementById("subject").value;
    const hours = document.getElementById("hours").value;
    const goal = document.getElementById("goal").value;

    const result = document.getElementById("planResult");

    if (subject === "" || hours === "" || goal === "") {

        result.style.display = "block";

        result.innerHTML =
            "<p>Please fill all the fields.</p>";

        return;
    }

    result.style.display = "block";

    result.innerHTML = `
        <h3>Your AI Learning Plan</h3>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Daily Study Time:</strong> ${hours} hour(s)</p>

        <p><strong>Goal:</strong> ${goal}</p>

        <br>

        <ul>
            <li>Day 1: Learn the basic concepts of ${subject}</li>
            <li>Day 2: Study important topics and examples</li>
            <li>Day 3: Practice coding/problems</li>
            <li>Day 4: Revise the concepts</li>
            <li>Day 5: Take a practice quiz</li>
        </ul>

        <br>

        <p>
            <strong>AI Tip:</strong>
            Study for ${hours} hour(s) every day and
            take short breaks between study sessions.
        </p>
    `;
}


// Ask AI

function askAI() {

    const input = document.getElementById("question");

    const question = input.value.trim();

    const chat = document.getElementById("chatMessages");

    if (question === "") {
        return;
    }

    // User message

    const userMessage = document.createElement("div");

    userMessage.className = "user-message";

    userMessage.innerText = question;

    chat.appendChild(userMessage);


    // AI response

    const botMessage = document.createElement("div");

    botMessage.className = "bot-message";

    let answer =
        "I can help you understand this topic. Try breaking the concept into smaller parts, learn the basics first, and then practice with examples.";

    if (question.toLowerCase().includes("html")) {

        answer =
            "HTML stands for HyperText Markup Language. It is used to create the structure of web pages.";

    } else if (question.toLowerCase().includes("css")) {

        answer =
            "CSS stands for Cascading Style Sheets. It is used to design and style HTML elements.";

    } else if (question.toLowerCase().includes("javascript")) {

        answer =
            "JavaScript is a programming language used to make web pages interactive and dynamic.";

    } else if (question.toLowerCase().includes("java")) {

        answer =
            "Java is an object-oriented programming language commonly used for application and backend development.";
    }

    botMessage.innerText = answer;

    setTimeout(() => {

        chat.appendChild(botMessage);

        chat.scrollTop = chat.scrollHeight;

    }, 500);

    input.value = "";
}


// Generate Quiz

function generateQuiz() {

    const subject =
        document.getElementById("quizSubject").value.trim();

    const result =
        document.getElementById("quizResult");

    if (subject === "") {

        result.innerHTML =
            "<p>Please enter a subject first.</p>";

        return;
    }


    let questions = [];


    if (subject.toLowerCase() === "html") {

        questions = [
            "What does HTML stand for?",
            "Which tag is used to create a paragraph?",
            "Which tag is used to create a hyperlink?"
        ];

    } else if (subject.toLowerCase() === "css") {

        questions = [
            "What does CSS stand for?",
            "Which property changes text color?",
            "Which property is used to change the background color?"
        ];

    } else if (subject.toLowerCase() === "javascript") {

        questions = [
            "What is JavaScript used for?",
            "How do you declare a variable in JavaScript?",
            "Which keyword is used to define a function?"
        ];

    } else {

        questions = [
            `What are the basic concepts of ${subject}?`,
            `Why is ${subject} important?`,
            `Give one real-world application of ${subject}.`
        ];
    }


    let output =
        `<h2>${subject} Quiz</h2>`;


    questions.forEach((question, index) => {

        output += `
            <div class="question-card">

                <h3>
                    Question ${index + 1}
                </h3>

                <p>${question}</p>

                <br>

                <label>
                    <input type="radio"
                           name="q${index}">
                    Option A
                </label>

                <label>
                    <input type="radio"
                           name="q${index}">
                    Option B
                </label>

                <label>
                    <input type="radio"
                           name="q${index}">
                    Option C
                </label>

            </div>
        `;
    });


    result.innerHTML = output;
}