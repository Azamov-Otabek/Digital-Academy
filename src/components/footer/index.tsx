import Container from '../container'
import './style.scss'
import { useTranslation } from 'react-i18next'


function Footer() {
  const { t } = useTranslation();
  return (
    <footer id='footer'>
        <Container>
            <div className='footer-wrapper'>
                <div className="footer-left">
                    <p>{t("footer_name")}</p>
                    <div>
                      <a target='_blank' href="https://t.me/digital_academy_sirdaryo"><i className='bx bxl-telegram' style={{color: 'blue'}}></i></a>
                      {/* <a target='_blank' href="#"> <i className='bx bxl-youtube' style={{color: 'red'}} ></i></a>   */}
                      <a target='_blank' href="https://www.instagram.com/digital.academy.sirdaryo/"> <i className='bx bxl-instagram-alt'  ></i></a>
                    </div>
                    
                    <p style={{textAlign: 'center', marginBottom: 20, marginTop: 30}}>{t("footer_contact")}</p>
                    <h5 style={{textAlign: 'center'}}>+998 (94) 124 - 24 - 44</h5>
                </div>
                <div className="footer-right">
                  

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.0691092498005!2d68.79379960785084!3d40.518438950990436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b20744f37988af%3A0x5fe5538855c9a835!2z0JzQvtC70L7QtNC10LbQvdGL0Lkg0YbQtdC90YLRgA!5e0!3m2!1sru!2s!4v1727165855948!5m2!1sru!2s" width="600" height="450"  loading="lazy"></iframe>
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer