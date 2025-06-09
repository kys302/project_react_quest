import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Feedback() {
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const url =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhpKtFm7JkFFtw64Jr_-FGEfhreAQAizlcnl8WOxxJQeyXOQ/formResponse';

    fetch(url, { method: 'POST', body: data, mode: 'no-cors' }).then(() =>
      setSent(true)
    );
  };

  return (
    <div className="feedback-wrapper">
      {sent ? (
        <div className="feedback-success">
          <h2>Спасибо за сообщение! 🙏</h2>
          <button className="feedback-send" onClick={() => navigate('/')}>
          🏠 В главное меню
          </button>
        </div>
      ) : (
        <form className="feedback-card" onSubmit={handleSubmit}>
          <h2>Обратная связь</h2>

          <label className="feedback-label">
            Ваше имя
            <input
              type="text"
              name="entry.2010905784"
              placeholder="Как к вам обращаться?"
              required
            />
          </label>

          <label className="feedback-label">
            Ваше сообщение
            <textarea
              name="entry.1535454278"
              rows="5"
              placeholder="Поделитесь впечатлениями или сообщите об ошибке…"
              required
            />
          </label>

          <button type="submit" className="feedback-send">
            📤 Отправить
          </button>

          <button
            type="button"
            className="feedback-back"
            onClick={() => navigate('/')}
          >
            ⏪ Назад
          </button>
        </form>
      )}
    </div>
  );
}

export default Feedback;
