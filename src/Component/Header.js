import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// css파일을 모듈화 하여 임의의(randomize) 클래스로 변경하여 사용

const Header = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;
export default () => (
  <Header>
    <List>
      <Item>
        <Link to="/">Home</Link>
      </Item>
      <Item>
        <Link to="/tv">TV</Link>
      </Item>
      <Item>
        <Link to="/search">Search</Link>
      </Item>
    </List>
  </Header>
);
