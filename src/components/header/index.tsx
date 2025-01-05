import Container from '../container'
import DigitalLogo from '../../assets/icons/DIGITALsvg.svg'
import { useTranslation } from 'react-i18next';



import './style.scss'
import { DriwerHeader, SelectLanguage } from '@ui'


function Header() {
  const { t } = useTranslation();


  return (
    <header>
        <Container>
            <nav>
                <img src={DigitalLogo} alt="Digital LOGO" />
                <ul>
                  <li><a href="#">{t("home")}</a></li>
                  <li><a href="#kurslar">{t('courses')}</a></li>
                  <li><a href="#teachers">{t('teachers')}</a></li>
                  <li><a href="#service">{t('services')}</a></li>
                  <li><a href="#about">{t('about')}</a></li>
                  <li><a href="#footer">{t('contacts')}</a></li>
                  <SelectLanguage/>
                </ul> 
                <DriwerHeader/>
            </nav>
        </Container>
    </header>
  )
}

export default Header