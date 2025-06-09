import React from 'react';
import { useParams } from 'react-router-dom';
import questionsJunior from '../data/questionsJunior';
import questionsMiddle from '../data/questionsMiddle';
import questionsSenior from '../data/questionsSenior';

import { useNavigate } from 'react-router-dom';

function Result({ correct, questions, userAnswers }) {
  const navigate = useNavigate();

  const getMedal = () => {
    if (correct >= 8) return { medal: '🥇', label: 'React эксперт' };
    if (correct >= 4) return { medal: '🥈', label: 'Уверенный пользователь' };
    return { medal: '🥉', label: 'Новичок' };
  };

  const { medal, label } = getMedal();

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
      <h2>Вы отгадали {correct} из {questions.length} вопросов</h2>
      <h3 style={{ marginTop: '10px' }}>{medal} {label}</h3>

      <button onClick={() => navigate('/')}>🏠 В главное меню</button>

      <h3>Разбор:</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index} style={{ textAlign: 'left', marginBottom: '15px' }}>
            <strong>{q.title}</strong>
            <ul>
              {q.variants.map((variant, vIndex) => {
                const isCorrect = vIndex === q.correct;
                const isSelected = userAnswers[index] === vIndex;
                const style = {
                  backgroundColor: isCorrect ? '#d4edda' : isSelected ? '#f8d7da' : 'transparent',
                  padding: '5px',
                  borderRadius: '5px'
                };
                return <li key={vIndex} style={style}>{variant}</li>;
              })}
            </ul>
            {q.explanation && (
              <div style={{ fontStyle: 'italic', marginTop: '5px', color: '#555' }}>
                💡 {q.explanation}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}



function Game({ step, question, onClickVariant, total }) {
  const percentage = Math.round((step / total) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        ))}
      </ul>
    </>
  );
}

function Quiz() {
  const { level } = useParams();
  const questionsMap = {
    junior: questionsJunior,
    middle: questionsMiddle,
    senior: questionsSenior,
  };

  const questions = questionsMap[level] || [];
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);

  React.useEffect(() => {
  if (step === questions.length) {
    const saved = JSON.parse(localStorage.getItem('reactquest_bestResults') || '{}');
    const best = saved[level] || 0;
    if (correct > best) {
      saved[level] = correct;
      localStorage.setItem('reactquest_bestResults', JSON.stringify(saved));
    }
  }
}, [step]);

  
  const [userAnswers, setUserAnswers] = React.useState([]);

  const question = questions[step];

  const onClickVariant = (index) => {
    setUserAnswers([...userAnswers, index]);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
  };

  if (!questions.length) {
    return <div className="App"><h2>Неверный уровень</h2></div>;
  }

  return (
    <div className="App">
      {step < questions.length
        ? <Game step={step} question={question} onClickVariant={onClickVariant} total={questions.length} />
        : <Result correct={correct} questions={questions} userAnswers={userAnswers} />
      }
    </div>
  );
}

export default Quiz;
