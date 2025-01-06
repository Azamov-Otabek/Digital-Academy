import { useState } from 'react';
import './style.scss'
import { Modal } from 'antd';


function KursCard(props:any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {data} = props


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
            <h2>{data.id}</h2>
        </div>

        <div className="kurs-right">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <h5>Nima uchun tanlash kerak? <span onClick={showModal}>Batafsil...</span></h5>
        </div>
    </div>


    <Modal footer={false} title={data.subTitle} className='kurs-modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="kurs-right-modal">
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <h5>Nima uchun tanlash kerak?</h5>
                <ul>
                  <li>{data.quession1}</li>
                  <li>{data.quession2}</li>
                  <li>{data.quession3}</li>
                  <li>{data.quession4}</li>
                </ul>
                <p>{data.subDescription}</p>
            </div>
      </Modal>
    </>
    
  )
}

export default KursCard