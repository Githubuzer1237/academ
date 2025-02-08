
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import s from './ITQuiz.module.scss';

// const questions = [
//   {
//     question: "Что тебя больше привлекает?",
//     options: [
//       "Создание игр и виртуальных миров",
//       "Простое и визуальное программирование",
//       "Создание красивых сайтов",
//       "Работа с серверной частью приложений",
//       "Разработка сложных серверных приложений",
//       "Основы работы с компьютером"
//     ],
//   },
//   {
//     question: "Какой тип задач ты предпочитаешь?",
//     options: [
//       "Креативные и визуальные",
//       "Легкие и интуитивные",
//       "Создание интерфейсов и пользовательского опыта",
//       "Логические задачи и работа с данными",
//       "Сложные алгоритмы и работа с серверами",
//       "Обучение основным навыкам работы с ПК"
//     ],
//   },
//   {
//     question: "Какой инструмент тебе кажется наиболее интересным?",
//     options: [
//       "Unity",
//       "Scratch",
//       "HTML, CSS, JavaScript",
//       "PHP, Python, или Ruby",
//       "Node.js",
//       "Основы работы с операционными системами и офисными программами"
//     ],
//   },
// ];

// const resultsMap = {
//    "Создание игр и виртуальных миров": "Unity",
//    "Простое и визуальное программирование": "Scratch",
//    "Создание красивых сайтов": "Frontend",
//    "Работа с серверной частью приложений": "Backend",
//    "Разработка сложных серверных приложений": "Node.js",
//    "Основы работы с компьютером": "Компьютерная грамотность",
//  };

// const ITQuiz = () => {
//    const [currentQuestion, setCurrentQuestion] = useState(0);
//    const [answers, setAnswers] = useState([]);
//    const [result, setResult] = useState(null);
//    const [showQuiz, setShowQuiz] = useState(false); // Стартовый флаг для показа опроса
//    const [animationStarted, setAnimationStarted] = useState(false); // Флаг для старта анимации
//    const [showResult, setShowResult] = useState(false); // Флаг для показа результата
//    const [hideQuiz, setHideQuiz] = useState(false); // Флаг для скрытия опроса

//    const handleStartQuiz = () => {
//      setAnimationStarted(true); // После нажатия на кнопку начнется анимация
//      setTimeout(() => {
//        setShowQuiz(true); // После анимации показываем опросник
//      }, 500); // Задержка в 0.5 секунды, чтобы анимация завершилась перед появлением опроса
//    };

//    const handleAnswer = (option) => {
//      const category = resultsMap[option];
//      setAnswers([...answers, category]);
//      if (currentQuestion < questions.length - 1) {
//        setCurrentQuestion(currentQuestion + 1);
//      } else {
//        setHideQuiz(true); // Скрываем опрос после последнего ответа
//        calculateResult([...answers, category]);
//      }
//    };

//    const calculateResult = (finalAnswers) => {
//      const counts = finalAnswers.reduce((acc, category) => {
//        if (category) {
//          acc[category] = (acc[category] || 0) + 1;
//        }
//        return acc;
//      }, {});

//      const sortedCategories = Object.keys(counts).sort(
//        (a, b) => counts[b] - counts[a]
//      );

//      setResult(sortedCategories[0] || "неопределено");
//      setShowResult(true); // Показываем результат с небольшой задержкой
//    };

//    const handleRestartQuiz = () => {
//      setCurrentQuestion(0);
//      setAnswers([]);
//      setResult(null);
//      setShowQuiz(false); // При повторном запуске показываем начальные элементы
//      setAnimationStarted(false); // Возвращаем флаг анимации в исходное состояние
//      setShowResult(false); // Скрываем результат
//      setHideQuiz(false); // Возвращаем флаг скрытия опроса в исходное состояние
//    };

//    return (
//      <div id='quiz' className={s.wrapper}>
//        {/* Начальный экран */}
//        {!showQuiz && (
//          <motion.div
//            className={s.text}
//            initial={{ opacity: 1, x: 0 }}
//            animate={animationStarted ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
//            transition={{ duration: 0.5 }}
//          >
//            <motion.h2
//              initial={{ opacity: 1 }}
//              animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
//              transition={{ duration: 0.5 }}
//            >
//              Начни свой путь в IT
//            </motion.h2>
//            <motion.p
//              initial={{ opacity: 1 }}
//              animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
//              transition={{ duration: 0.5 }}
//            >
//              Нажмите на кнопку, чтобы начать!
//            </motion.p>
//            <motion.button
//              onClick={handleStartQuiz}
//              initial={{ opacity: 1 }}
//              animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
//              transition={{ duration: 0.5 }}
//            >
//              Начать опрос
//            </motion.button>
//          </motion.div>
//        )}

//        {/* Опросник, который появляется с правой стороны */}
//        {showQuiz && !hideQuiz && (
//          <motion.div
//            className={s.quiz}
//            initial={{ opacity: 0, x: 100 }}
//            animate={{ opacity: 1, x: 0 }}
//            transition={{ duration: 0.5 }}
//          >
//            <p>{questions[currentQuestion].question}</p>
//            <div className={s.options}>
//              {questions[currentQuestion].options.map((option, index) => (
//                <button key={index} onClick={() => handleAnswer(option)}>
//                  {option}
//                </button>
//              ))}
//            </div>
//          </motion.div>
//        )}

//        {/* Результат и кнопка для перезапуска */}
//        {showResult && (
//          <motion.div
//            className={s.result}
//            initial={{ opacity: 0 }}
//            animate={{ opacity: 1 }}
//            transition={{ duration: 0.5 }}
//          >
//            <h3>Тебе подойдет направление: {result}!</h3>
//            <p>Рекомендуем рассмотреть курсы по этому направлению, чтобы начать свою карьеру в IT.</p>
//            <button onClick={handleRestartQuiz}>Перепройти тест</button>
//          </motion.div>
//        )}
//      </div>
//    );
// };

// export default ITQuiz;




import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import s from './ITQuiz.module.scss';
import DecryptedText from '../DecryptedText/DecryptedText';

const questions = [
  {
    question: "Что тебя больше привлекает?",
    options: [
      "Создание игр и виртуальных миров",
      "Простое и визуальное программирование",
      "Создание красивых сайтов",
      "Работа с серверной частью приложений",
      "Разработка сложных серверных приложений",
      "Основы работы с компьютером"
    ],
  },
  {
    question: "Какой тип задач ты предпочитаешь?",
    options: [
      "Креативные и визуальные",
      "Легкие и интуитивные",
      "Создание интерфейсов и пользовательского опыта",
      "Логические задачи и работа с данными",
      "Сложные алгоритмы и работа с серверами",
      "Обучение основным навыкам работы с ПК"
    ],
  },
  {
    question: "Какой инструмент тебе кажется наиболее интересным?",
    options: [
      "Unity",
      "Scratch",
      "HTML, CSS, JavaScript, React",
      "PHP, Python, или Ruby",
      "Node.js",
      "Основы работы с операционными системами и офисными программами"
    ],
  },
];

const resultsMap = {
  "Создание игр и виртуальных миров": "Unity",
  "Простое и визуальное программирование": "Scratch",
  "Создание красивых сайтов": "Frontend",
  "Работа с серверной частью приложений": "Backend",
  "Разработка сложных серверных приложений": "Node.js",
  "Основы работы с компьютером": "Компьютерная грамотность",
};

const ITQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false); // Стартовый флаг для показа опроса
  const [animationStarted, setAnimationStarted] = useState(false); // Флаг для старта анимации
  const [showResult, setShowResult] = useState(false); // Флаг для показа результата
  const [hideQuiz, setHideQuiz] = useState(false); // Флаг для скрытия опроса

  const [particles, setParticles] = useState([]); // Частицы песка
  const quizRef = useRef(null); // Реф для компонента

  // Функция для генерации частиц песка
  const generateSandParticles = (x, y) => {
    if (!quizRef.current) return;

    const quizRect = quizRef.current.getBoundingClientRect(); // Позиция компонента

    const newParticle = {
      id: Date.now(),
      x: x - quizRect.left + Math.random() * 20, // Положение частиц в пределах компонента
      y: y - quizRect.top + Math.random() * 20,
      animationDuration: 0.7 + Math.random() * 0.3, // Длительность падения
    };

    // Добавляем частицу в массив частиц
    setParticles((prevParticles) => [...prevParticles, newParticle]);

    // Удаляем частицу через время её падения
    setTimeout(() => {
      setParticles((prevParticles) => prevParticles.filter(p => p.id !== newParticle.id));
    }, newParticle.animationDuration * 1000); // Через длительность анимации
  };

  // Слушаем движение мыши для генерации песчаных частиц
  useEffect(() => {
    const handleMouseMove = (e) => {
      generateSandParticles(e.clientX, e.clientY);
    };

    const quizElement = quizRef.current;
    if (quizElement) {
      quizElement.addEventListener('mousemove', handleMouseMove);
    }

    // Очистка при размонтировании компонента
    return () => {
      if (quizElement) {
        quizElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleStartQuiz = () => {
    setAnimationStarted(true); // После нажатия на кнопку начнется анимация
    setTimeout(() => {
      setShowQuiz(true); // После анимации показываем опросник
    }, 500); // Задержка в 0.5 секунды, чтобы анимация завершилась перед появлением опроса
  };

  const handleAnswer = (option) => {
    const category = resultsMap[option];
    setAnswers([...answers, category]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setHideQuiz(true); // Скрываем опрос после последнего ответа
      calculateResult([...answers, category]);
    }
  };

  const calculateResult = (finalAnswers) => {
    const counts = finalAnswers.reduce((acc, category) => {
      if (category) {
        acc[category] = (acc[category] || 0) + 1;
      }
      return acc;
    }, {});

    const sortedCategories = Object.keys(counts).sort(
      (a, b) => counts[b] - counts[a]
    );

    setResult(sortedCategories[0] || "неопределено");
    setShowResult(true); // Показываем результат с небольшой задержкой
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowQuiz(false); // При повторном запуске показываем начальные элементы
    setAnimationStarted(false); // Возвращаем флаг анимации в исходное состояние
    setShowResult(false); // Скрываем результат
    setHideQuiz(false); // Возвращаем флаг скрытия опроса в исходное состояние
  };

  return (
    <div ref={quizRef} id='quiz' className={s.wrapper}>
      {/* Частицы песка */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={s.sandParticle}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}

      {/* Начальный экран */}
      {!showQuiz && (
        <motion.div
          className={s.text}
          initial={{ opacity: 1, x: 0 }}
          animate={animationStarted ? { opacity: 0, x: -100 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <motion.h2
            initial={{ opacity: 1 }}
            animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Начни свой путь в IT
          </motion.h2> */}
          <div style={{ marginTop: '4rem' }}>
<DecryptedText
  text="Начни свой путь в IT"
  animateOn="view"
  revealDirection="center"
  className={s.animtext}
/>
</div>
          <motion.p
            initial={{ opacity: 1 }}
            animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Нажмите на кнопку, чтобы начать!
          </motion.p>
          <motion.button
            onClick={handleStartQuiz}
            initial={{ opacity: 1 }}
            animate={animationStarted ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Начать опрос
          </motion.button>
        </motion.div>
      )}

      {/* Опросник, который появляется с правой стороны */}
      {showQuiz && !hideQuiz && (
        <motion.div
          className={s.quiz}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p>{questions[currentQuestion].question}</p>
          <div className={s.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Результат и кнопка для перезапуска */}
      {showResult && (
        <motion.div
          className={s.result}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Тебе подойдет направление: {result}!</h3>
          <p>Рекомендуем рассмотреть курсы по этому направлению, чтобы начать свою карьеру в IT.</p>
          <button onClick={handleRestartQuiz}>Перепройти тест</button>
        </motion.div>
      )}
    </div>
  );
};

export default ITQuiz;
