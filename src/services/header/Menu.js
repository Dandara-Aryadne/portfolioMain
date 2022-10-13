import React from "react";
import * as S from '../../Style/MenuStyle'
import menuIcon from './H.img/menuIcon.png'

const Props = ({ modal }) => {
  return (
    <div>
      <S.Button onClick={modal}>
        <S.Img src={menuIcon} alt='botão'/>
      </S.Button>
    </div>
  );
};

export default Props;
