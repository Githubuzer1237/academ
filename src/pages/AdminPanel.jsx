

import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [prices, setPrices] = useState({
    WebCourse: '',
    Grafic: '',
    ScratchSection: '',
  });
  
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Загрузка текущих цен при загрузке компонента
  useEffect(() => {
    fetch('http://localhost:3000/prices')
      .then(response => response.json())
      .then(data => {
        setPrices(data); // Устанавливаем текущие цены из json-server
      });
  }, []);

  const updatePrice = (key, value) => {
    setPrices(prevPrices => ({ ...prevPrices, [key]: value }));
  };

  const savePrices = () => {
    fetch('http://localhost:3000/prices', {
      method: 'PUT', // Используем PUT для обновления данных
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prices),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Сохраненные данные:', data); // Логируем ответ от сервера
        alert('Цены успешно сохранены!'); // Уведомляем пользователя об успешном сохранении
      })
      .catch(error => {
        console.error('Ошибка при сохранении данных:', error);
        alert('Произошла ошибка при сохранении цен.');
      });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'Альтус') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: '100px' }}>
        <h1>Вход в панель администратора</h1>
        <form onSubmit={handlePasswordSubmit}>
          <label>
            Введите пароль:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '100px' }}>
      <h1>Панель администратора</h1>
      <div>
        <label>
          WebCourse:
          <input
            type="text"
            value={prices.WebCourse || ''}
            onChange={(e) => updatePrice("WebCourse", e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Grafic:
          <input
            type="text"
            value={prices.Grafic || ''}
            onChange={(e) => updatePrice("Grafic", e.target.value)}
          />
        </label>
      </div>
      <div>
  <label>
    NodeJs:
    <input
      type="text"
      value={prices.NodeJs || ''}
      onChange={(e) => updatePrice("NodeJs", e.target.value)}
    />
  </label>
</div>
      <div>
        <label>
          ScratchSection:
          <input
            type="text"
            value={prices.ScratchSection || ''}
            onChange={(e) => updatePrice("ScratchSection", e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={savePrices}>Сохранить изменения</button>
      </div>
    </div>
  );
};

export default AdminPanel;
