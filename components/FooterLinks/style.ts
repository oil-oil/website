import styled from "styled-components";

export const SWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1170px;
  margin: 65px auto 0;
  .section {
    color: #3c4858;
  }
  .title {
    font-size: 18px;
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
        font-size: 16px;
        font-weight: 300;
        color: inherit;
        line-height: 30px;
      }
    }
  }
`
