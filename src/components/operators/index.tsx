import Container from '../container';
import Dispecher from '../../assets/videos/dispetcher.mp4';
import './style.scss';
import { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';

function Operators() {
  const [phone, setPhone] = useState('+998 ');

  useEffect(() => {
    const video:any = document.querySelector(".intro-video");
    if (video) {
      video.play().catch((error:any) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);

  return (
    <div id='contacts'>
      <Container>
        <div className='call-wrapper'>
          <div className="call-left">
            <video className='intro-video' autoPlay={true} muted loop={true} src={Dispecher}></video>
          </div>
          <div className="call-right">
            <h2>Digital Academy</h2>
            <h3>Sirdaryo viloyati barcha tuman va shaharlarda.</h3>
            <h3>Qulay paytni poylamang, hoziroq kafolatni kelajagingiz sari ishonli qadamlarni tashlang!</h3>

            <Form className='call-operator'>
              <p>Ismingizni kiriting</p>
              <FormItem name='name' rules={[{
                required: true,
                message: 'Ismingizni kiriting!',
              }]}>
                <Input  placeholder='Ismizni kiriting'/>
              </FormItem>

              <p>Telefon raqamingizni kiriting</p>
              <FormItem name="phone_number" rules={[{
                required: true,
                message: 'Telefon raqamingizni kiriting!',
              },
              {
                pattern: /^\+998[0-9]{9}$/,
                message: "Raqamingizni to'g'ri formatda kiriting! (+998)"
              }]}>
                <Input typeof='number' placeholder='Telefon raqamingizni kiriting'/>
              </FormItem>
              
              <Button htmlType='submit'>So'rov yuborish</Button>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Operators;
