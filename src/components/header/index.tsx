import Container from '../container'
import DigitalLogo from '../../assets/icons/DIGITALsvg.svg'



import './style.scss'
import { DriwerHeader, SelectLanguage } from '@ui'


function Header() {
  return (
    <header>
        <Container>
            <nav>
                <img src={DigitalLogo} alt="Digital LOGO" />
                <ul>
                  <li><a href="#">Bosh qism</a></li>
                  <li><a href="#kurslar">Kurslar</a></li>
                  <li><a href="#teachers">O'qituvchilar</a></li>
                  <li><a href="#service">Xizmatlar</a></li>
                  <li><a href="#about">Biz haqimizda</a></li>
                  <li><a href="#footer">Kontaktlar</a></li>
                  <SelectLanguage/>
                </ul> 
                <DriwerHeader/>
            </nav>
        </Container>
    </header>
  )
}

export default Header