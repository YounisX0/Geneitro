import React, { use } from "react";
import styled from "styled-components";
import {AddRounded, WebRounded} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "./button";

const Container = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.navbar};
  color: ${({ theme }) => theme.menu_primary_text};
  font-weight: bold;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
  }
`;

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let path = location.pathname.split("/");

  const gotoCreatePost = () => {
    navigate("/post");
  };
  const gottoHome = () => {
    navigate("/");
  };
  console.log(path);
  return (
    <Container>
      GeneitroAI
      {path[1] === "post" ? (
        <Button
          text="Explore Posts"
          leftIcon={<WebRounded style={{ fontSize: "18px" }} />}
          onClick={gottoHome}
          type="secondary"
        />
      ) : (
        <Button
          text="Create new post"
          leftIcon={<AddRounded style={{ fontSize: "18px" }} />}
          onClick={gotoCreatePost}
        />
      )}
    </Container>
  );
};


export default NavBar;