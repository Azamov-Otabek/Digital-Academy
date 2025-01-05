import { Select } from 'antd';
import Uzbekistan from '../../../assets/icons/uzbekistan.png';
import Russian from '../../../assets/icons/russia.png';
import English from '../../../assets/icons/united-kingdom.png';
import { useTranslation } from 'react-i18next';
import './style.scss';

const flagStyles = { width: 20, height: 20, marginRight: 8 };

const LanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    {
      label: t('select_uzbek'),
      value: 'uz',
      icon: <img src={Uzbekistan} alt="Uzbek Flag" style={flagStyles} />,
    },
    {
      label: t('select_russian'),
      value: 'ru',
      icon: <img src={Russian} alt="Russian Flag" style={flagStyles} />,
    },
    {
      label: t('select_english'),
      value: 'eng',
      icon: <img src={English} alt="English Flag" style={flagStyles} />,
    },
  ];

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      onChange={handleChange}
      defaultValue="uz"
      style={{ width: 150 }}
      options={languages.map(({ label, value, icon }) => ({
        label: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {icon} {label}
          </div>
        ),
        value,
      }))}
    />
  );
};

export default LanguageSelect;
