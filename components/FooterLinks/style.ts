import styled from "styled-components";

export const SWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  display: -ms-grid;
  grid-template-columns: repeat(2, 1fr);
  -ms-grid-columns: (1fr)[2];
  div:nth-child(1) {
    -ms-grid-column: 1;
    -ms-grid-row: 1;
  }
  div:nth-child(2) {
    -ms-grid-column: 2;
    -ms-grid-row: 1;
  }
  div:nth-child(3) {
    -ms-grid-column: 1;
    -ms-grid-row: 2;
  }
  div:nth-child(4) {
    -ms-grid-column: 2;
    -ms-grid-row: 2;
  }

  padding: 0 25px;
  margin-top: 10px;
  .section {
    color: #3c4858;
  }
  .title {
    font-size: 22px;
    font-weight: 500;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      a:link {
        color: ${props => props.theme.color.primary};
      }
      span {
        font-size: 14px;
        font-weight: 300;
        color: inherit;
        line-height: 26px;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1170px;
    grid-template-columns: repeat(4, 1fr);
    -ms-grid-columns: (1fr)[4];
    div:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    div:nth-child(2) {
      -ms-grid-column: 2;
      -ms-grid-row: 1;
    }
    div:nth-child(3) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
    }
    div:nth-child(4) {
      -ms-grid-column: 4;
      -ms-grid-row: 1;
    }

    padding: 0;
    margin: 65px auto 0;
    .title {
      font-size: 18px;
    }
    ul {
      li {
        span {
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
  }
`
