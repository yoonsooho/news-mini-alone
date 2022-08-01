import styled from 'styled-components';

const NoMatchWrapper = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    align-items: center;

    > div:first-child {
      font-size: 40px;
    }

    div {
      height: 20%;
      display: flex;
      align-items: center;
    }
  }
`;

export default NoMatchWrapper;
