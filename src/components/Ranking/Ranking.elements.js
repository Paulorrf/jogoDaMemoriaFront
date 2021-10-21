import styled from "styled-components";

export const RankingDiv = styled.div`
  width: 600px;
  height: auto;
  min-height: 400px;
  background-color: ${props => props.theme.colors.secondary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const BtnDiv = styled.div`
  button {
    width: 4rem;
    height: 1.6rem;
    margin: 0 10px;
    margin-top: 10px;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0.5rem;
    border-color: transparent;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const Display = styled.div`
  display: flex;
  justify-content: center;

  div {
    padding: 20px;
    h3 {
      padding-bottom: 6px;
    }
    p {
      padding-bottom: 6px;
    }
  }
`;
