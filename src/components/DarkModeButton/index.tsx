import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { setMode } from '../../store/theme';

import * as S from './styles';

const DarkModeButton = () => {
  const dispatch = useDispatch();
  const themeColorsMode = useSelector(
    (state: RootState) => state.themeColors.mode
  );

  const nextMode = themeColorsMode === 'default' ? 'dark' : 'default';

  const handleChangeMode = () => {
    dispatch(setMode({ mode: nextMode }));
  };

  return (
    <S.Wrapper
      onPress={handleChangeMode}
      accessibilityLabel={`change theme to ${nextMode}`}
    >
      <S.Icon />
      <S.Label>Dark Mode</S.Label>
    </S.Wrapper>
  );
};

export default DarkModeButton;
