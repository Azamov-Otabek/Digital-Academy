import Container from "../container";
import "./style.scss";
import Intro_Video from "../../assets/videos/intro.mp4";
import { useEffect } from "react";
import LOGO from "../../assets/icons/DIGITALsvg.svg";
import { Button } from "antd";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';


function Intro() {
  useEffect(() => {
    const video: any = document.querySelector(".intro-video");
    if (video) {
      video.play().catch((error: any) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);
  
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    AOS.refresh();
  }, []);

  return (
    <div id="intro">
      <Container>
        <div className="intro-wrapper">
          <video
            autoPlay
            loop
            muted
            disablePictureInPicture
            disableRemotePlayback
            className="intro-video"
            src={Intro_Video}
          ></video>

          <div className="intro-body">
            <div  data-aos="fade-right" className="intro-left">
              <h1>
                <Typewriter
                  options={{
                    strings: [t("intro_slide_1"), t("intro_slide_2"), t("intro_slide_3")],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  
                  }}
                />
              </h1>
              <p>
                {t('intro_description')}
              </p >
              <a href="#kurslar"><Button>{t('intro_btn')}</Button></a>
            </div>
            <img data-aos="fade-left" className="intro-right" src={LOGO} alt="" />
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Intro;
