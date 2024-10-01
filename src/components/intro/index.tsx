import Container from "../container";
import "./style.scss";
import Intro_Video from "../../assets/videos/intro.mp4";
import { useEffect } from "react";
import LOGO from "../../assets/icons/DIGITALsvg.svg";
import { Button } from "antd";
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Intro() {
  useEffect(() => {
    const video: any = document.querySelector(".intro-video");
    if (video) {
      video.play().catch((error: any) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

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
            className="intro-video"
            src={Intro_Video}
          ></video>

          <div className="intro-body">
            <div  data-aos="fade-right" className="intro-left">
              <h1>
                <Typewriter
                  options={{
                    strings: ['KELAJAK HOZIR VA SHU YERDAN BOSHLANADI.', "Hoziroq ro'yhatdan o'ting.", "Web Dasturlash, Kompyuter savodhonligi, Backend Dasturlash"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                  
                  }}
                />
              </h1>
              <p>
                O'zingizga qulay vaqtda, joyda va uslubda zamonaviy kasblarni
                o'rganing.
              </p >
              <Button>Kurslarni ko'rish</Button>
            </div>
            <img data-aos="fade-left" className="intro-right" src={LOGO} alt="" />
          </div>
        </div>
      </Container>
      
    </div>
  );
}

export default Intro;
