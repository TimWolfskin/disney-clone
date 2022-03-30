import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

const Container = styled.main`
  position: relative ;
  background-image: url('/images/home-background.png');
`

export default Home;