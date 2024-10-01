import { Select } from 'antd';
import Uzbekistan from '../../../assets/icons/uzbekistan.png';
import Russian from '../../../assets/icons/russia.png';
import English from '../../../assets/icons/united-kingdom.png';
import './style.scss';

const flagStyles = { width: 20, height: 20, marginRight: 8 };

const LanguageSelect = () => {
  const languages = [
    {
      label: 'Uzbek',
      value: 'uz',
      icon: <img src={Uzbekistan} alt="Uzbek Flag" style={flagStyles} />,
    },
    {
      label: 'Russian',
      value: 'ru',
      icon: <img src={Russian} alt="Russian Flag" style={flagStyles} />,
    },
    {
      label: 'English',
      value: 'eng',
      icon: <img src={English} alt="English Flag" style={flagStyles} />,
    }
  ]

  const { Option } = Select;
  return (
    <Select defaultValue="uz" style={{ width: 150}}>
        {languages?.map((e, i) => {
          return (
            <Option key={i} value={e.value} className="custom-option">
              {e.icon} {e.label}
            </Option>
          )
        })}
    </Select>
  );
};

export default LanguageSelect;
