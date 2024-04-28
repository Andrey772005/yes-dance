import React from 'react';
import { Social } from './styles.js';
import './styles.css';
import Vkontact from '../../../assets/vkontakte.svg'
import Telegram from '../../../assets/tg.svg'
import { SocialMediaLink } from '../../ui/social-media-link/social-media-link.jsx';

export const SocialSection = () => {
  return (
    <Social>
      <h3 className="question">Есть вопрос&#63; Напиши нам&#46;</h3>
      <SocialMediaLink className="vkontakte" url="https://vk.com/yes_ds" imageSrc={Vkontact} alt="ссылка на страницу Вконтакте"/>
      <SocialMediaLink className="telegram" url="https://t.me/yes_ds" imageSrc={Telegram} alt="ссылка на страницу Телеграмм"/>
    </Social>
  )
}