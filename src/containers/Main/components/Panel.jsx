import React, { memo } from 'react';
import RefreashIcon from '../../../assets/images/refresh.png';
import { Card, Typography, Button, Select, MenuItem } from '../../../components';
import COUNTRIES from '../../../commons/constants/Countries';
import { CardPanelStyled, ItemStyled } from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCovidData }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country-${index}`} value={country.value}>
      <ItemStyled>
        <div>{country.label}</div>
        <img src={country.flag} alt={`País-${country.label}`} />
      </ItemStyled>
    </MenuItem>
  )

  return (
    <Card>
      <CardPanelStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">COVID19</Typography>
          <Typography variant="h6" component="span" color="primary">Painel Coronavírus</Typography>
          <Typography variant="body2" component="span" color="primary">Atualizado em : {updateAt}</Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelStyled>
    </Card>
  )
};

export default memo(Panel);
