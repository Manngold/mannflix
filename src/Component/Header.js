import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
// css파일을 모듈화 하여 임의의(randomize) 클래스로 변경하여 사용

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  background-color: rgb(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/" ? true : false}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv" ? true : false}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search" ? true : false}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
