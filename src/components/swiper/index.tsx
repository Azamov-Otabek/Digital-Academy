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
import { teachers } from "../../data/teachers";

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
              {
                teachers?.map((e, i )=> {
                  return  (
                    <SwiperSlide key={i}>
                      <div className="swiper-left">
                        <div data-aos="fade-left" className="swiper-body">
                          <h1>{e.name}</h1>
                          <h2>{e.position}</h2>
                          <p>
                            {e.description}
                          </p>
                          <p>
                          {e.description2}
                          </p>
                          <ul>
                            <li>
                                <PhoneOutlined/>
                                +998 (99) 999-99-99
                            </li>

                          </ul>
                        </div>

                        <div data-aos="fade-right" className="swiper-img">
                          <img src={Rasm} alt="rasm" />
                        </div>

                        <TeacherModal/>
                      </div>
                    </SwiperSlide>
                  )
                })
              }


            </Swiper>
          </div>
        </Container>
      </div>
    </>
  );
}
