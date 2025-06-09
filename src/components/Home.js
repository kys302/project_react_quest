import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [bestResults, setBestResults] = React.useState({});

    React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reactquest_bestResults') || '{}');
     setBestResults(saved);
    }, []);

    

  const navigate = useNavigate();

  const handleStart = (level) => {
    navigate(`/quiz/${level}`);
    
  };

  return (
    <div className="App">
      <h1>Добро пожаловать в ReactQuest!</h1>
      <p>Выбери уровень и начни тест:</p>
    <ul>
    <li onClick={() => handleStart('junior')}>
        👶 Junior {bestResults.junior !== undefined && `— рекорд: ${bestResults.junior}/10`}
    </li>
    <li onClick={() => handleStart('middle')}>
        🧑 Middle {bestResults.middle !== undefined && `— рекорд: ${bestResults.middle}/10`}
    </li>
    <li onClick={() => handleStart('senior')}>
        🧙 Senior {bestResults.senior !== undefined && `— рекорд: ${bestResults.senior}/10`}
    </li>
    </ul>
        <div style={{ marginTop: '20px' }}>
            <a href="/feedback" className="feedback-fab" title="Обратная связь">💬</a>

        </div>



    </div>
  );
}




export default Home;
