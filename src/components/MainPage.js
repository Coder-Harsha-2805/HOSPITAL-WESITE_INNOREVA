import React from 'react';
import Header from './Header';
import ImgBg from './ImgBg';
import ImgGroup from './ImgGroup';
import 'typeface-abril-fatface';
import Doctors from './Doctors';




function Maincomp() {
  return (
    <>
      <Header/>
      <ImgBg/>
      <Doctors/>
      <ImgGroup/>
    </>
  );
}

export default Maincomp;
