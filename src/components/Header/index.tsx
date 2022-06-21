import DarkModeButton from '../DarkModeButton';
import React from 'react';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Title>Where in the World?</S.Title>
      <DarkModeButton />
    </S.Wrapper>
  );
};

export default Header;
