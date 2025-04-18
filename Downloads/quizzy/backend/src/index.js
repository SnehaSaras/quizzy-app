
const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let questions = [
    { id: 1, question: 'Capital of France?', options: ['Paris', 'Rome', 'Berlin'], answer: 'Paris' },
    { id: 2, question: '5 + 3 = ?', options: ['5', '8', '10'], answer: '8' }
];

app.get('/questions', (req, res) => {
    res.json(questions);
});

app.listen(port, () => {
    console.log(`Quizzy backend running at http://localhost:${port}`);
});
