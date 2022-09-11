import { PhoneContainer, PhoneButton, PhoneNumber } from './Phone.styles';
import { text } from '../../utils/Text';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PhoneIcon from './PhoneIcon/PhoneIcon';

const Phone = () => {
  const [isNumberVisible, setIsNumberVisible] = useState(false);
  const { pathname } = useLocation();
  const mainPage = pathname === '/';
  const handlePhoneVisible = () => setIsNumberVisible(!isNumberVisible);

  return (
    <PhoneContainer>
      <PhoneButton mainPage={mainPage} onClick={handlePhoneVisible}>
        <PhoneIcon />
      </PhoneButton>
      <PhoneNumber href={`tel:${text.NUMBER}`} mainPage={mainPage} isNumberVisible={isNumberVisible}>{text.PHONE_NUMBER}</PhoneNumber>
    </PhoneContainer>
  );
};

export default Phone;
