/* eslint-disable no-unused-vars */
import React from 'react';
import { Footer } from './styles';
import { FooterButton } from '../../ui/footer-button/footer-button';
import Main from '../../../assets/footer-main.svg';
import Shedule from '../../../assets/footer-shedule.svg';
import Subscriber from '../../../assets/footer-subscriber.svg';
import Profile from '../../../assets/footer-profile.svg';


export function MainFooter() {
  return (
    <Footer>
      <FooterButton text="Главная" imageSrc={Main} role='button'/>
      <FooterButton text="Абонемент" imageSrc={Shedule} role='button'/>
      <FooterButton text="Расписание" imageSrc={Subscriber} role='button'/>
      <FooterButton text="Профиль" imageSrc={Profile} role='button'/>
    </Footer>  
  )
}