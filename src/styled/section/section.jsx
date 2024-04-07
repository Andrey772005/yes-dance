import { Section } from "./styles.js";
import './styles.css'

export const StyledSection = () => {
  return (
    <Section>
      <h3 className="promo">Первое занятие БЕСПЛАТНО!</h3>
      <p className="promo-text">При первом посещении Студии</p>
    </Section>
  )
}