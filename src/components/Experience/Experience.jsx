import React from 'react';

import Article from '../Article';

import styles from './Experience.module.scss';

const Experience = () => {
  const data = [
    {
      title: 'observer (Пет-проект)',
      paragraphs: [
        'Позволял вести диспансерное наблюдение за пациентами. Начальству эта идея пришла не по вкусу, в связи с чем проект так и остался невостребованным и я его давно забросил.'
      ],
      link: 'https://github.com/Vladislav557/observer',
    },
    {
      title: 'Интерактивное резюме (Пет-проект)',
      paragraphs: [
        'Простое приложение с использованием React и инструментов для динамического отображения резюме. Оно перед Вами.'
      ],
      link: 'https://github.com/Vladislav557/interactive-resume',
    },
    {
      title: 'Игры разума (Учебный проект)',
      paragraphs: [
        'JavaScript приложение, представляющее из себя набор простых мини-игр.'
      ],
      link: 'https://github.com/Vladislav557/fullstack-javascript-project-44',
    },
    {
      title: 'Когнитивные искажения (Учебный проект)',
      paragraphs: [
        'Сайт о когнитивных искажениях.'
      ],
      link: 'https://github.com/Vladislav557/layout-designer-project-58',
    }
  ]
  return (
    <div className={styles.Experience}>
      {
        data.map((item) => <Article {...item} key={item.title} />)
      }
    </div>
  );
};

export default Experience;
