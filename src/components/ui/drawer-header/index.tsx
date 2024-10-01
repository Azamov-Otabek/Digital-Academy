import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './style.scss'
import { SelectLanguage } from '@ui';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };


  return (
    <>
     <div className='driwer'>
      <Space>
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined/>
          </Button>
        </Space>
        <Drawer
          className='drawer'
          placement={'top'}
          closable={false}
          onClose={onClose}
          open={open}
          key={'top'}
        >
          <div>
            <ul>
                    <li><a href="#">Bosh qism</a></li>
                    <li><a href="#">Kurslar</a></li>
                    <li><a href="#">O'qituvchilar</a></li>
                    <li><a href="#">Xizmatlar</a></li>
                    <li><a href="#">Biz haqimizda</a></li>
                    <li><a href="#">Kontaktlar</a></li>
            </ul> 
            <SelectLanguage/>
          </div>
        </Drawer>
     </div>
    </>
  );
};

export default App;