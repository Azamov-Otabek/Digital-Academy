import React, { useState } from "react";
import { Button, Modal } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import './style.scss'

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button className="teacher-btn" type="primary" onClick={showModal}>
        Batafsil
      </Button>
      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-teacher">
          <h1>A'zamov Otabek</h1>
          <h2>Frontend | Web Dasturchi</h2>
          <p>
            Men 3 yildan ortiq tajribaga ega Frontend dasturchisiman, asosan
            React.js bilan ishlashda mutaxassisman. Mening tajribam
            veb-dasturlashning barcha jihatlarini qamrab oladi, shu jumladan,
            yuqori darajadagi foydalanuvchi interfeyslarini yaratish, samarali
            kod yozish va kompleks muammolarni hal qilish.
          </p>
          <p>
            React.js bilan ishlashda men komponentlar arxitekturasi, holatni
            boshqarish (state management), va performansni optimallashtirish
            kabi sohalarda chuqur bilimga egaman. Ushbu texnologiyalar yordamida
            zamonaviy, tezkor va intuitiv interfeyslarni yaratishga qodirman.
          </p>
          <ul>
            <li>
              <PhoneOutlined />
              +998 (99) 930 - 52 - 10
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default App;
