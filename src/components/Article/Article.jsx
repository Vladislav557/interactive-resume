import React from 'react';
import styles from './Article.module.scss';

const Article = ({ title, paragraphs, link = null }) => (
  <article className={styles.Article}>
    <h4>{title}</h4>
    {
      paragraphs.map((paragraph) => <p>{paragraph}</p>)
    }
    {
      link && <a href={link} target='_blank' rel='noreferrer'>Ссылка</a>
    }
  </article>
);

export default Article;
