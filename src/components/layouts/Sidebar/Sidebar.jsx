import React from 'react';

import Box from '../../Box';

import styles from './Sidebar.module.scss';

const localDate = new Intl.DateTimeFormat('ru-RU', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

const Sidebar = ({ avatar_url, login, name, public_repos, location, created_at, html_url }) => {
  const formatedDate = localDate.format(new Date(created_at))
  return (
    <div className={styles.Sidebar}>
      <Box>
        <h2>GitHub</h2>
        <div className={styles.title}>
          <img src={avatar_url} alt={login} />
          <div>
            <b>Имя: {name}</b>
            <a href={html_url} target='_blank' rel='noreferrer'>Перейти</a>
          </div>
        </div>
        <div className={styles.info}>
          <h3>Данные с GitHub</h3>
          <p>Количество репозиториев на данный момент: {public_repos}</p>
          <div>
            <p>Место нахождения: {location}</p>
            <p>Зарегистрирован: {formatedDate}</p>
          </div>
        </div>
      </Box>
    </div>
  );
};


export default Sidebar;
