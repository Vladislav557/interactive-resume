import React from 'react';

import Article from '../Article/Article';

import styles from './Education.module.scss';

const Education = () => {
  const data = [
    {
      title: 'Школа',
      paragraphs: [
        'Визингская средняя школа, Республика Коми, село Визинга, 2001 - 2013г',
        'Информационно-технологический класс',
      ],
    },
    {
      title: 'ВУЗ',
      paragraphs: [
        'СыктГУ им.Питирима Сорокина, Республика Коми, город Сыктывкар, 2013 - 2019г',
        'Направление - Лечебное дело, специалитет',
      ],
    },
  ];
  return (
    <div className={styles.Education}>
      {
        data.map((item) => <Article {...item} key={item.title} />)
      }
    </div>
  );
};

export default Education;
