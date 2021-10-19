import styled from "styled-components";

export const AdmDiv = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.colors.hover};
  width: 40rem;
  height: 20rem;
  text-align: center;
  border-radius: 10px;

  h2 {
    margin-top: 2rem;
  }
`;

export const BtnDiv = styled.div`
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  > * {
    width: 8rem;
    padding: 1rem;
    background-color: darkgoldenrod;
    margin: 1rem;
    //margin-top: 100px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.secondary};

    :hover {
      background-color: ${props => props.theme.colors.primary};
      color: #ffffff;
    }
  }
`;
