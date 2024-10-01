import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./style.scss";

import { Autoplay, Pagination } from "swiper/modules";
import Container from "../container";
import AOS from "aos";
import "aos/dist/aos.css";
import Rasm from "../../assets/images/rasm.png";
import { useEffect } from "react";
import { PhoneOutlined } from "@ant-design/icons";
import { TeacherModal } from "@ui";

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      <div id="teachers" className="swiperWrap">
        <Container>
          <div>
            <Swiper
               autoplay={{
                delay: 8000, 
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={pagination}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              
            >
              <SwiperSlide>
                <div className="swiper-left">
                  <div data-aos="fade-left" className="swiper-body">
                    <h1>A'zamov Otabek</h1>
                    <h2>Frontend | Web Dasturchi</h2>
                    <p>
                      Men 3 yildan ortiq tajribaga ega Frontend dasturchisiman,
                      asosan React.js bilan ishlashda mutaxassisman. Mening
                      tajribam veb-dasturlashning barcha jihatlarini qamrab
                      oladi, shu jumladan, yuqori darajadagi foydalanuvchi
                      interfeyslarini yaratish, samarali kod yozish va kompleks
                      muammolarni hal qilish.
                    </p>
                    <p>
                      React.js bilan ishlashda men komponentlar arxitekturasi,
                      holatni boshqarish (state management), va performansni
                      optimallashtirish kabi sohalarda chuqur bilimga egaman.
                      Ushbu texnologiyalar yordamida zamonaviy, tezkor va
                      intuitiv interfeyslarni yaratishga qodirman.
                    </p>
                    <ul>
                      <li>
                          <PhoneOutlined/>
                         +998 (99) 930 - 52 - 10
                      </li>

                    </ul>
                  </div>

                  <div data-aos="fade-right" className="swiper-img">
                    <img src={Rasm} alt="rasm" />
                  </div>

                  <TeacherModal/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-left">
                  

                  <div data-aos="fade-right" className="swiper-img">
                    <img src={Rasm} alt="rasm" />
                  </div>

                  <div data-aos="fade-left" className="swiper-body">
                    <h1>A'zamov Otabek</h1>
                    <h2>Frontend | Web Dasturchi</h2>
                    <p>
                      Men 3 yildan ortiq tajribaga ega Frontend dasturchisiman,
                      asosan React.js bilan ishlashda mutaxassisman. Mening
                      tajribam veb-dasturlashning barcha jihatlarini qamrab
                      oladi, shu jumladan, yuqori darajadagi foydalanuvchi
                      interfeyslarini yaratish, samarali kod yozish va kompleks
                      muammolarni hal qilish.
                    </p>
                    <p>
                      React.js bilan ishlashda men komponentlar arxitekturasi,
                      holatni boshqarish (state management), va performansni
                      optimallashtirish kabi sohalarda chuqur bilimga egaman.
                      Ushbu texnologiyalar yordamida zamonaviy, tezkor va
                      intuitiv interfeyslarni yaratishga qodirman.
                    </p>
                    <ul>
                      <li>
                          <PhoneOutlined/>
                         +998 (99) 930 - 52 - 10
                      </li>

                    </ul>
                  </div>

                  <TeacherModal/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-left">
                  <div data-aos="fade-left" className="swiper-body">
                    <h1>A'zamov Otabek</h1>
                    <h2>Frontend | Web Dasturchi</h2>
                    <p>
                      Men 3 yildan ortiq tajribaga ega Frontend dasturchisiman,
                      asosan React.js bilan ishlashda mutaxassisman. Mening
                      tajribam veb-dasturlashning barcha jihatlarini qamrab
                      oladi, shu jumladan, yuqori darajadagi foydalanuvchi
                      interfeyslarini yaratish, samarali kod yozish va kompleks
                      muammolarni hal qilish.
                    </p>
                    <p>
                      React.js bilan ishlashda men komponentlar arxitekturasi,
                      holatni boshqarish (state management), va performansni
                      optimallashtirish kabi sohalarda chuqur bilimga egaman.
                      Ushbu texnologiyalar yordamida zamonaviy, tezkor va
                      intuitiv interfeyslarni yaratishga qodirman.
                    </p>
                    <ul>
                      <li>
                          <PhoneOutlined/>
                         +998 (99) 930 - 52 - 10
                      </li>

                    </ul>
                  </div>

                  <div data-aos="fade-right" className="swiper-img">
                    <img src={Rasm} alt="rasm" />
                  </div>

                  <TeacherModal/>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-left">
                  

                  <div data-aos="fade-right" className="swiper-img">
                    <img src={Rasm} alt="rasm" />
                  </div>

                  <div data-aos="fade-left" className="swiper-body">
                    <h1>A'zamov Otabek</h1>
                    <h2>Frontend | Web Dasturchi</h2>
                    <p>
                      Men 3 yildan ortiq tajribaga ega Frontend dasturchisiman,
                      asosan React.js bilan ishlashda mutaxassisman. Mening
                      tajribam veb-dasturlashning barcha jihatlarini qamrab
                      oladi, shu jumladan, yuqori darajadagi foydalanuvchi
                      interfeyslarini yaratish, samarali kod yozish va kompleks
                      muammolarni hal qilish.
                    </p>
                    <p>
                      React.js bilan ishlashda men komponentlar arxitekturasi,
                      holatni boshqarish (state management), va performansni
                      optimallashtirish kabi sohalarda chuqur bilimga egaman.
                      Ushbu texnologiyalar yordamida zamonaviy, tezkor va
                      intuitiv interfeyslarni yaratishga qodirman.
                    </p>
                    <ul>
                      <li>
                          <PhoneOutlined/>
                         +998 (99) 930 - 52 - 10
                      </li>

                    </ul>
                  </div>

                  <TeacherModal/>
                </div>
              </SwiperSlide>


            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
}
