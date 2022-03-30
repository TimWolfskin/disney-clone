import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
};

const Container = styled.main`
  position: relative ;
  background-image: url('/images/home-background.png');
`

export default Home;