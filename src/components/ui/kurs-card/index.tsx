import { useState } from 'react';
import './style.scss'
import { Button, Modal } from 'antd';



function KursCard() {
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
      <div className='kurs'>
        <div className="kurs-left">
            <h2>1</h2>
        </div>

        <div className="kurs-right">
            <h3>Frontend Dasturlash</h3>
            <p>Frontend kursi zamonaviy veb-dizayn va dasturlash asoslarini o‘rganishga mo‘ljallangan. Ushbu kursda HTML, CSS va JavaScript kabi texnologiyalarni o‘zlashtirib, veb-sahifalarni yaratish va dizayn qilish ko‘nikmalarini rivojlantirasiz.</p>
            <h5>Nima uchun tanlash kerak? <span onClick={showModal}>Batafsil...</span></h5>
        </div>
    </div>


    <Modal footer={false} title="Frontend" className='kurs-modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="kurs-right-modal">
                <h3>Frontend Dasturlash</h3>
                <p>Frontend kursi zamonaviy veb-dizayn va dasturlash asoslarini o‘rganishga mo‘ljallangan. Ushbu kursda HTML, CSS va JavaScript kabi texnologiyalarni o‘zlashtirib, veb-sahifalarni yaratish va dizayn qilish ko‘nikmalarini rivojlantirasiz.</p>
                <h5>Nima uchun tanlash kerak?</h5>
                <ul>
                  <li><b>Kreativlik:</b> O'z g'oyangizni amalga oshirish uchun imkoniyat.</li>
                  <li><b>Talab:</b> Bugungi kunda veb-dasturchilar juda kerak.</li>
                  <li><b>Oson kirish:</b> Dasturlash bilimlari bo‘lmasa ham boshlash imkoniyati mavjud.</li>
                  <li><b>Amaliy tajriba:</b> Kurs davomida real loyihalar ustida ishlaysiz.</li>
                </ul>
                <p>Frontend kursi sizga nafaqat nazariy bilim, balki amaliy ko‘nikmalarni ham beradi. O‘zingizning veb-loyihalaringizni yaratish va zamonaviy veb-texnologiyalarni o‘rganish uchun buni qo‘ldan boy bermang!</p>
            </div>
      </Modal>
    </>
    
  )
}

export default KursCard