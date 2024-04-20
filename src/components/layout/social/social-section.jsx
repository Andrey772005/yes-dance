import React from 'react';
import { Social } from './styles.js';
import './styles.css';
import Vkontact from '../../../assets/vkontakte.svg'
import Telegram from '../../../assets/tg.svg'

export const SocialSection = () => {
  return (
    <Social>
      <h3 className="question">Есть вопрос&#63; Напиши нам&#46;</h3>
      <img className="vkontakte" role={"button"} src={Vkontact}/>
      <img className="telegram" role={"button"} src={Telegram}/>
    </Social>
  )
}