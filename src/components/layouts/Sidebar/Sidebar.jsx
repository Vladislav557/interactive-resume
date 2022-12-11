import React from 'react';

import Box from '../../Box';

import styles from './Sidebar.module.scss';

const Sidebar = ({ avatar_url, login, name, public_repos, location, created_at, html_url, twitter_username }) => {
  const formatedDate = new Date(created_at).toLocaleDateString();
  return (
    <div className={styles.Sidebar}>
      <Box>
        <div className={styles.title}>
          <img src={avatar_url} alt={login} />
          <div>
            <b>{name}</b>
            <p>24.04.1995</p>
            <a href={html_url} target='_blank' rel='noreferrer'>Перейти</a>
          </div>
        </div>
        <div className={styles.info}>
          <h3>Данные с GitHub</h3>
          <p><b>Количество репозиториев</b>: {public_repos}</p>
          <p><b>Место нахождения</b>: {location}</p>
          <p><b>Зарегистрирован</b>: {formatedDate}</p>
        </div>
        <div className={styles.social}>
          <h3>Контакты</h3>
          <p><b>Twitter</b>: {twitter_username}</p>
          <p><b>Email</b>: trololo557@gmail.com</p>
          <p><b>Discord</b>: Vonny#8912</p>
          <p><b>Telegram</b>: LolyBomb557</p>
        </div>
      </Box>
    </div>
  );
};


export default Sidebar;
