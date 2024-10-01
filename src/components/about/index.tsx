import Container from "../container";
import "./style.scss";
import StarIcon from "../../assets/icons/learn.svg";
import { CheckCircleOutlined, DingtalkOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function index() {

  useEffect(() => {
    AOS.init({ duration: 1200 }); 
    AOS.refresh();
  }, []);
  return (
    <div id="about">
      <Container>
        <div className="about-wrapper">
          <h1 className="title">Biz haqimizda</h1>
          <div className="about-body">
            <div className="about-card"  data-aos="fade-right" >
              <div className="card-left">
                <img src={StarIcon} alt="Star Icon" />
              </div>
              <div className="card-right">
                <h2>Onlayn akademiya</h2>
                <p>
                  «Digital Academy» - bu zamonaviy kasblar o‘qitiladigan offline
                  akademiya. Qayerda bo‘lishingizdan qat’i nazar: uydami yo
                  mehmonda, daladami yo safarda — o‘zingizga qulay tarzda va
                  vaqtda bilim olishingiz mumkin, internet va noutbuk bo‘lsa
                  bas.
                </p>
              </div>
            </div>

            <div className="about-card" data-aos="fade-left">
              <div className="card-left">
                <StarOutlined />
              </div>
              <div className="card-right">
                <h2>O‘z ishining ustalari</h2>
                <p>
                  Darslar katta tajribaga ega malakali mutaxassislar tomonidan
                  tayyorlangan. O‘z ishining ustalaridan yanada ishonchli bilim
                  va tajribaga ega bo’lasiz
                </p>
              </div>
            </div>

            <div className="about-card"  data-aos="fade-right">
              <div className="card-left">
                <CheckCircleOutlined />
              </div>
              <div className="card-right">
                <h2>Digital Academy</h2>
                <p>
                  Sirdaryo viloyati bo'yicha barcha o'quv markazlari ichra TOP-1
                  o'rinda joylashgan. Bitiruvchilarimiz soni 1500 nafardan oshiq
                  va ularning 90% o'zlarining daromad yo'llarini topishgan.
                </p>
              </div>
            </div>

            <div className="about-card" data-aos="fade-left">
              <div className="card-left">
              <DingtalkOutlined />
              </div>
              <div className="card-right">
                <h2>Bo'lib to'lash imkoniyati</h2>
                <p>
                  Endi siz oldin o'qib, keyin to'lashingiz mumkin.
                  To'lovlarni bo'lib to'lash imkoniyati sizga malakali ta'limdan
                  bahramand bo'lishingizni va moliyaviy yukni
                  engillashtirishingizni ta'minlaydi. Har bir talabaga
                  individual yondashib, sizning ehtiyojlaringiz va
                  imkoniyatlaringizni hisobga olib, moslashtirilgan yechimlar
                  taklif etamiz.
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
