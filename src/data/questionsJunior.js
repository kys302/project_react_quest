const questionsJunior = [
  {
    title: 'React — это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
    explanation: 'React — это JavaScript-библиотека для создания пользовательских интерфейсов.',
  },
  {
    title: 'JSX — это ... ?',
    variants: [
      'расширение языка JavaScript, похожее на HTML',
      'тип CSS-фреймворка',
      'новый формат JSON',
    ],
    correct: 0,
    explanation: 'JSX позволяет писать HTML-подобный код внутри JavaScript.',
  },
  {
    title: 'Как создать функциональный компонент?',
    variants: ['function MyComponent() {}', 'new Component()', '<Component></Component>'],
    correct: 0,
    explanation: 'Функциональные компоненты создаются как обычные функции.',
  },
  {
    title: 'Какой хук отвечает за состояние?',
    variants: ['useEffect', 'useState', 'useMemo'],
    correct: 1,
    explanation: 'useState используется для хранения и изменения состояния внутри компонента.',
  },
  {
    title: 'Что такое props?',
    variants: ['Локальное состояние', 'Стили компонента', 'Входные параметры компонента'],
    correct: 2,
    explanation: 'Props — это свойства, которые передают компоненту извне.',
  },
  {
    title: 'Какой синтаксис корректный для передачи props?',
    variants: ['<Comp[prop]=value>', '<Comp prop="value" />', '<Comp :prop="value" />'],
    correct: 1,
    explanation: 'В JSX props передаются через атрибуты, как в HTML.',
  },
  {
    title: 'Что делает функция setState из useState?',
    variants: ['Удаляет компонент', 'Изменяет состояние и перерисовывает компонент', 'Создаёт props'],
    correct: 1,
    explanation: 'setState обновляет значение состояния и инициирует повторный рендер.',
  },
  {
    title: 'Где нельзя вызывать хук useState?',
    variants: ['Внутри компонента', 'Внутри условия или цикла', 'На верхнем уровне функции'],
    correct: 1,
    explanation: 'Хуки должны вызываться на верхнем уровне компонента без условий и циклов.',
  },
  {
    title: 'Какой элемент нужен для группировки нескольких элементов в JSX?',
    variants: ['<div>', '<React.Fragment> или <>', '<span>'],
    correct: 1,
    explanation: 'React.Fragment (или короткий синтаксис <>) позволяет группировать без лишнего DOM.',
  },
  {
    title: 'Что делает метод render?',
    variants: [
      'Присваивает стили',
      'Отрисовывает компонент в DOM',
      'Сохраняет компонент в базе данных',
    ],
    correct: 1,
    explanation: 'render — это процесс отображения компонентов в DOM.',
  },
];

export default questionsJunior;
