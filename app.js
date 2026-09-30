const QUESTION_COUNT = 12;
const LEVEL_DIFFICULTIES = {
    junior: new Set(['Easy', 'Medium']),
    senior: new Set(['Medium', 'Hard'])
};

const elements = {
    setup: document.getElementById('setupScreen'),
    question: document.getElementById('questionScreen'),
    finale: document.getElementById('finaleScreen'),
    role: document.getElementById('roleSelect'),
    level: document.getElementById('levelSelect'),
    start: document.getElementById('startButton'),
    status: document.getElementById('bankStatus'),
    sessionLabel: document.getElementById('sessionLabel'),
    questionNumber: document.getElementById('questionNumber'),
    difficulty: document.getElementById('difficultyTag'),
    progress: document.getElementById('progressFill'),
    topic: document.getElementById('topicLabel'),
    time: document.getElementById('timeLabel'),
    title: document.getElementById('questionTitle'),
    ask: document.getElementById('questionAsk'),
    context: document.getElementById('questionContext'),
    details: document.getElementById('detailsContent'),
    answer: document.getElementById('answerInput'),
    next: document.getElementById('nextButton')
};

let questionBank = [];
let selectedQuestions = [];
let currentQuestionIndex = 0;
let answers = new Map();

function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
}

function addDetailLine(label, value) {
    if (!value) return;
    const line = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = `${label}: `;
    line.append(strong, document.createTextNode(value));
    elements.details.append(line);
}

function renderDetails(question) {
    elements.details.replaceChildren();
    addDetailLine('Function', question.functionName);
    if (question.parameters?.length) {
        addDetailLine('Inputs', question.parameters.map(({ name, type }) => `${name}: ${type}`).join(', '));
    }
    addDetailLine('Returns', question.returnType);
    if (question.expectedComplexity) {
        const complexity = [question.expectedComplexity.time, question.expectedComplexity.space]
            .filter(Boolean)
            .join(' time / ');
        addDetailLine('Expected complexity', complexity);
    }
    if (question.constraints?.length) {
        const heading = document.createElement('p');
        const strong = document.createElement('strong');
        strong.textContent = 'Constraints';
        heading.append(strong);
        const list = document.createElement('ul');
        question.constraints.forEach((constraint) => {
            const item = document.createElement('li');
            item.textContent = constraint;
            list.append(item);
        });
        elements.details.append(heading, list);
    }
}

function renderQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    const number = currentQuestionIndex + 1;

    elements.questionNumber.textContent = String(number).padStart(2, '0');
    elements.difficulty.textContent = question.difficulty.toUpperCase();
    elements.progress.style.width = `${(number / QUESTION_COUNT) * 100}%`;
    elements.topic.textContent = `${question.category} / ${question.topic}`.toUpperCase();
    elements.time.textContent = `${question.estimatedTimeMins || 30} MIN`;
    elements.title.textContent = question.title;
    const [context, ...taskParts] = question.description.split(/\n\s*\n/);
    elements.ask.textContent = taskParts.join('\n\n').trim() || question.description;
    elements.context.textContent = taskParts.length ? context.trim() : '';
    elements.answer.value = answers.get(question.slug) || '';
    elements.next.querySelector('span').textContent = number === QUESTION_COUNT ? 'FINISH RUN' : 'NEXT QUESTION';
    document.getElementById('challengeDetails').open = false;
    renderDetails(question);

    elements.question.classList.remove('is-entering');
    void elements.question.offsetWidth;
    elements.question.classList.add('is-entering');
}

function startAssessment() {
    const role = elements.role.value;
    const level = elements.level.value;
    const eligibleDifficulties = LEVEL_DIFFICULTIES[level];
    const eligibleQuestions = questionBank.filter((question) =>
        question.roleApplicability?.includes(role) && eligibleDifficulties.has(question.difficulty)
    );

    if (eligibleQuestions.length < QUESTION_COUNT) {
        elements.status.textContent = `Only ${eligibleQuestions.length} matching questions are available. At least ${QUESTION_COUNT} are needed.`;
        return;
    }

    selectedQuestions = shuffle(eligibleQuestions).slice(0, QUESTION_COUNT);
    currentQuestionIndex = 0;
    answers = new Map();
    const roleName = elements.role.selectedOptions[0].textContent.replace(/ Engineer$/, '').toUpperCase();
    const levelName = elements.level.selectedOptions[0].textContent.split(' · ')[0].toUpperCase();
    elements.sessionLabel.textContent = `${roleName} · ${levelName}`;
    document.getElementById('footerRole').textContent = `QUICKRUIT / ${roleName}`;
    showScreen(elements.question);
    renderQuestion();
}

function showScreen(activeScreen) {
    [elements.setup, elements.question, elements.finale].forEach((screen) => {
        const active = screen === activeScreen;
        screen.hidden = !active;
        screen.classList.toggle('is-active', active);
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

elements.start.addEventListener('click', startAssessment);
elements.next.addEventListener('click', () => {
    const question = selectedQuestions[currentQuestionIndex];
    answers.set(question.slug, elements.answer.value);

    if (currentQuestionIndex === QUESTION_COUNT - 1) {
        showScreen(elements.finale);
        return;
    }

    currentQuestionIndex += 1;
    renderQuestion();
});

document.getElementById('restartButton').addEventListener('click', () => showScreen(elements.setup));

fetch('./question.json.txt')
    .then((response) => {
        if (!response.ok) throw new Error(`Question bank returned ${response.status}`);
        return response.json();
    })
    .then((data) => {
        if (!Array.isArray(data)) throw new Error('Question bank format is invalid');
        questionBank = data;
        elements.start.disabled = false;
        elements.status.textContent = `${data.length} questions ready. Your set will be shuffled.`;
    })
    .catch((error) => {
        console.error('Could not load the question bank:', error);
        elements.status.textContent = 'Could not load questions. Open this page through a local web server.';
    });
