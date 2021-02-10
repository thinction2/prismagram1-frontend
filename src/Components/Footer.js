import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 12px;
  margin: 50px 0;
`;

const ListWrap = styled.div``;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
  line-height: 24px;
`;

const Link = styled.a`
  color: ${(props) => props.theme.darkBlueColor};
`;

const Copyright = styled.span`
  margin: 12px 0;
  color: ${(props) => props.theme.darkGreyColor};
`;

const FooterComponent = () => (
  <Footer>
    <ListWrap>
      <List>
        <ListItem>
          <Link href="*">소개</Link>
        </ListItem>
        <ListItem>
          <Link href="*">블로그</Link>
        </ListItem>
        <ListItem>
          <Link href="*">채용 정보</Link>
        </ListItem>
        <ListItem>
          <Link href="*">도움말</Link>
        </ListItem>
        <ListItem>
          <Link href="*">API</Link>
        </ListItem>
        <ListItem>
          <Link href="*">개인정보처리방침</Link>
        </ListItem>
        <ListItem>
          <Link href="*">약관</Link>
        </ListItem>
        <ListItem>
          <Link href="*">인기 계정</Link>
        </ListItem>
        <ListItem>
          <Link href="*">해시태그</Link>
        </ListItem>
        <ListItem>
          <Link href="*">위치</Link>
        </ListItem>
      </List>
    </ListWrap>
    <ListWrap>
      <List>
        <ListItem>
          <Link href="*">뷰티</Link>
        </ListItem>
        <ListItem>
          <Link href="*">댄스 및 공연</Link>
        </ListItem>
        <ListItem>
          <Link href="*">피트니스</Link>
        </ListItem>
        <ListItem>
          <Link href="*">식음료</Link>
        </ListItem>
        <ListItem>
          <Link href="*">집 및 정원</Link>
        </ListItem>
        <ListItem>
          <Link href="*">음악</Link>
        </ListItem>
        <ListItem>
          <Link href="*">시각 예술</Link>
        </ListItem>
      </List>
    </ListWrap>
    <Copyright>Instaclone {new Date().getFullYear()} & copy;</Copyright>
  </Footer>
);

export default FooterComponent;
