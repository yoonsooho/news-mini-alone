import styled from 'styled-components';

const NewsWrapper = styled.div`
  ul {
    width: max(60%, 600px);
    margin: 20px auto 0px;
    li {
      color: #5f5f5f;
      padding: 20px 10px;
      border-top: 1px solid #5f5f5f;
      font-family: arial, sans-serif;
      div {
        margin-bottom: 20px;
        span {
          margin-right: 15px;
        }
      }
      h2 {
        line-height: 30px;
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
      }
      p {
        line-height: 25px;
        margin-bottom: 20px;
      }
      button {
        width: 100px;
        padding: 10px;
        font-size: 20px;
        border: 1px solid #ced4da;
        border-radius: 5px;
        cursor: pointer;
      }
      button + button {
        margin: 0px 10px;
      }
    }
    li:first-child {
      border-top: none;
    }
    li.cliped {
      background-color: #fff;
    }
  }
`;

export default NewsWrapper;
