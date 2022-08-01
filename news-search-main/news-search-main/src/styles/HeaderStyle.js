import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  position: sticky;
  top: 0px;
  ul {
    width: 90%;
    margin: 0 auto;
    display: flex;
    li {
      a {
        text-decoration: none;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    li + li {
      margin-left: 30px;
    }
  }
`;

export default HeaderWrapper;
