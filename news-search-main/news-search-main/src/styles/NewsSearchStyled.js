import styled from 'styled-components';

const NewsSearchStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    width: min(100%, 600px);
    border: 1px solid #ced4da;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    &:focus,
    &:active {
      outline: none;
      border: 1px solid #80bdff;
    }
    &::placeholder {
      color: #ced4da;
    }
  }
  .searchBar {
    width: min(100%, 600px);
    display: flex;
    text-align: center;
    span {
      width: 20%;
      height: 35px;
      margin: 10px;
      padding: 0px 10px;
      border-radius: 5px;
      background-color: #706f8e;
      color: #ffffff;
      font-size: 1.25em;
      font-weight: 700;
      line-height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span:first-child {
      margin-left: 0px;
    }
    span:last-child {
      margin-right: 0px;
    }
  }
  .hide {
    visibility: hidden;
  }
`;

export default NewsSearchStyled;
