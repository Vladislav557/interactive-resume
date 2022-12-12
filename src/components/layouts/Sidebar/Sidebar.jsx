import React from 'react';

import Box from '../../Box';
import Article from '../../Article'

import styles from './Sidebar.module.scss';

const Sidebar = ({ avatar_url, login, name, public_repos, location, created_at, html_url, twitter_username }) => {
  const formatedDate = new Date(created_at).toLocaleDateString();
  const data = [
    {
      title: 'Данные с GitHub',
      paragraphs: [
        `Количество репозиториев: ${public_repos}`,
        `Место нахождения: ${location}`,
        `Зарегистрирован: ${formatedDate}`
      ],
    },
    {
      title: 'Контакты',
      paragraphs: [
        `Twitter: ${twitter_username}`,
        `Email: trololo557@gmail.com`,
        `Discord: Vonny#8912 `,
        `Telegram: LolyBomb557`,
      ]
    }
  ]
  return (
    <div className={styles.Sidebar}>
      <Box>
        <div className={styles.fixed}>
          <div className={styles.title}>
            <img src={avatar_url} alt={login} />
            <div>
              <b>{name}</b>
              <p>24.04.1995</p>
              <a href={html_url} target='_blank' rel='noreferrer'>Перейти на GitHub</a>
            </div>
          </div>
          {
            data.map((item) => <Article {...item} key={item.title} />)
          }
        </div>
      </Box>
    </div>
  );
};


export default Sidebar;
