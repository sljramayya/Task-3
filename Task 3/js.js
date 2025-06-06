// Global Variables
let currentQuestion = 0;
let score = 0;
let currentSlide = 0;
let quizCompleted = false;

// Quiz Questions Data
const quizQuestions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correct: 1
    },
    {
        question: "How long does it take for light from the Sun to reach Earth?",
        options: ["8 minutes", "1 hour", "1 day", "Instantly"],
        correct: 0
    },
    {
        question: "What is the closest star to Earth (besides the Sun)?",
        options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Betelgeuse"],
        correct: 2
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        correct: 1
    },
    {
        question: "What is a group of stars that form a pattern called?",
        options: ["Galaxy", "Nebula", "Constellation", "Asteroid"],
        correct: 2
    },
    {
        question: "How many moons does Jupiter have approximately?",
        options: ["12", "27", "79", "150"],
        correct: 2