import React from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";

const Container = styled.div`
height: 100%;
overflow-y: scroll;
background: ${({ theme }) => theme.bg};
padding:30px 20px;
padding-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
@media (max-width: 768px) {
  padding 6px 10px;
}
`;
const Headline = styled.div`
font-size: 34px;
font-weight: 500;
color: ${({ theme }) => theme.text_primary};
display: flex;
align-items: center;
flex-direction: column;
@media (max-width: 600px) {
font-size: 22px;
}
`;
const Wrapper = styled.div`
  width: 100%;
  padding 32px 0px
  display: flex;
  justify-content: center;
`;
const CardWrapper = styled.div`
  display: grid;
  gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
@media (min-width: 640) and (max-width: 1199px) {
    grid-template-columns: repeat(3, 1fr);
}
    @media (max-width: 639px) {
    grid-template-columns: repeat(2, 1fr);
}
`;

const Home = () => {
    const item={
        photo: "https://i0.wp.com/picjumbo.com/wp-content/uploads/minimalist-portrait-of-a-woman-with-glowing-light-behind-her-free-image.jpeg?w=600&quality=80",
        author: "John Doe",
        prompt: "A beautiful sunset over the mountains"
    }
  return (
    <Container>
      <Headline>Explore Popular posts</Headline>
      <SearchBar/>
      <Wrapper>
        <CardWrapper>
            <ImageCard item={item} />
        </CardWrapper>
      </Wrapper>
    </Container>
  );
}
export default Home;