import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card as CardUI } from '../components';
import { LabelStyled, ValueStyled, CardContentStyled } from './style';

function Card({ value, label, color }) {
  return (
    <Card>
      <CardContentStyled color={color}>
        <ValueStyled>{value}</ValueStyled>
        <LabelStyled>{label}</LabelStyled>
      </CardContentStyled>
    </Card>
  )
};

export default memo(Card);
