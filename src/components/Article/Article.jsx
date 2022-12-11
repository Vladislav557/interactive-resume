import React from 'react';
import styles from './Article.module.scss';

const Article = ({ title, paragraphs }) => (
  <article className={styles.Article}>
    <h4>{title}</h4>
    {
      paragraphs.map((paragraph) => <p>{paragraph}</p>)
    }
  </article>
);

export default Article;
