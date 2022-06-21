import { useRoute } from '@react-navigation/native';
import React from 'react';

import { ViewDetailProps } from '../../routes/types';

import * as S from './styles';

const Detail = () => {
  const {
    params: { code },
  } = useRoute<ViewDetailProps>();

  return <S.Wrapper>Detail {code}</S.Wrapper>;
};

export default Detail;
