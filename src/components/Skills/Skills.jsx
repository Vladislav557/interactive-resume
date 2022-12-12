import React from 'react';

import Article from '../Article';

import styles from './Skills.module.scss';

const Skills = () => {
  const data = [
    {
      title: 'Верстка',
      paragraphs: [
        'HTML5, CSS3, препроцессор SCSS, знаком с шаблонизатором Pug, CSS-фреймворком Bootstrap',
      ],
    },
    {
      title: 'Языки программирования',
      paragraphs: [
        'JavaScript, TypeScript',
      ],
    },
    {
      title: 'JS-библиотеки и фреймворки (основные)',
      paragraphs: [
        'React, React-router, Redux-toolkit. Базовые знания Node.js и Express.js. Знакомство с Vue3.',
      ],
    },
    {
      title: 'Прочее',
      paragraphs: [
        'Понимание HTTP протокола, работа в ОС Linux, git.',
      ],
    }
  ]
  return (
    <div className={styles.Skills}>
      {
        data.map((item) => <Article {...item} key={item.title} />)
      }
    </div>
  );
};


export default Skills;
