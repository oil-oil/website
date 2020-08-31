import styled from "styled-components";

export const SWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
