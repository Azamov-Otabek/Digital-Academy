import Container from "../container";
import "./style.scss";
import StarIcon from "../../assets/icons/learn.svg";
import { CheckCircleOutlined, DingtalkOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";


function index() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 }); 
    AOS.refresh();
  }, []);
  return (
    <div id="about">
      <Container>
        <div className="about-wrapper">
          <h1 className="title">{t("about_title")}</h1>
          <div className="about-body">
            <div className="about-card"  data-aos="fade-right" >
              <div className="card-left">
                <img src={StarIcon} alt="Star Icon" />
              </div>
              <div className="card-right">
                <h2>{t('card1_title')}</h2>
                <p>
                  {t('card1_description')}
                </p>
              </div>
            </div>

            <div className="about-card" data-aos="fade-left">
              <div className="card-left">
                <StarOutlined />
              </div>
              <div className="card-right">
              <h2>{t('card2_title')}</h2>
                <p>
                  {t('card2_description')}
                </p>
              </div>
            </div>

            <div className="about-card"  data-aos="fade-right">
              <div className="card-left">
                <CheckCircleOutlined />
              </div>
              <div className="card-right">
              <h2>{t('card3_title')}</h2>
                <p>
                  {t('card3_description')}
                </p>
              </div>
            </div>

            <div className="about-card" data-aos="fade-left">
              <div className="card-left">
              <DingtalkOutlined />
              </div>
              <div className="card-right">
              <h2>{t('card4_title')}</h2>
                <p>
                  {t('card4_description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default index;
