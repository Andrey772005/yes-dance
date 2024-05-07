/* eslint-disable no-unused-vars */
import React from 'react';
import { Footer } from './styles';
import { FooterButton } from '../../ui/footer-button/footer-button';
import  Main  from '../../../assets/footer-main.svg'
import './styles.css'


export function MainFooter() {
  return (
    <Footer>
      <FooterButton className="footer-main" imageSrc={Main} text="Главная"/>
    </Footer>  
  )
}