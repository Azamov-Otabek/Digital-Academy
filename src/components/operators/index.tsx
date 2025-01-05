import Container from '../container';
import Dispecher from '../../assets/videos/dispetcher.mp4';
import './style.scss';
import { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useTranslation } from 'react-i18next';

function Operators() {

  useEffect(() => {
    const video:any = document.querySelector(".intro-video");
    if (video) {
      video.play().catch((error:any) => {
        console.error("Error attempting to play the video:", error);
      });
    }
  }, []);
  const { t } = useTranslation();

  return (
    <div id='contacts'>
      <Container>
        <div className='call-wrapper'>
          <div className="call-left">
            <video className='intro-operator-video' autoPlay={true} muted loop={true} src={Dispecher}></video>
          </div>
          <div className="call-right">
            <h2>{t('operator_title')}</h2>
            <h3>{t('operator_description_1')}</h3>
            <h3>{t('operator_description_2')}</h3>

            <Form className='call-operator'>
              <p>{t('operator_input')}</p>
              <FormItem name='name' rules={[{
                required: true,
                message: `${t("input_validation")}`,
              }]}>
                <Input  placeholder={`${t("operator_input")}`}/>
              </FormItem>

              <p>{t('operator_number')}</p>
              <FormItem name="phone_number" rules={[{
                required: true,
                message: `${t("number_validation1")}`,
              },
              {
                pattern: /^\+998[0-9]{9}$/,
                message: `${t("number_validation2")}`
              }]}>
                <Input typeof='number' placeholder={`${t("operator_number")}`}/>
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
