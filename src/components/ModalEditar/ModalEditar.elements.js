import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

//Used to make round borders with the scroll bar inside
export const OuterModal = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 15px;
  padding: 6px 0px;
  background: #fff;
  position: relative;
  text-align: center;

  > * {
    padding: 10px;
  }
`;

export const FormDiv = styled.div`
  width: 80%;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  //background-color: red;

  form {
    input {
      padding: 0.4rem;
    }

    label {
      display: block;
      margin: 0.4rem 0;
    }
    div {
      h3 {
        font-size: 1rem;
        padding: 0.8rem 0;
      }
    }

    button {
      width: 8rem;
      height: 2.4rem;
      background-color: ${props => props.theme.colors.primary};
      border-radius: 0.5rem;
      border-color: transparent;
      color: #fff;
      font-size: 1.2rem;
      cursor: pointer;

      :hover {
        background-color: ${props => props.theme.colors.secondary};
        color: #000;
      }
    }
  }
`;

export const BtnCancelDiv = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  text-align: center;

  p {
    padding-bottom: 5px;
  }

  button {
    width: 6rem;
    height: 1.6rem;
    background-color: #e63946;
    border-radius: 0.5rem;
    border-color: transparent;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;

    :hover {
      background-color: red;
    }
  }
`;

export const ZerouDiv = styled.div`
  width: 80%;
  height: 160px;
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  button {
    width: 8rem;
    height: 2.4rem;
    background-color: #e63946;
    border-radius: 0.5rem;
    border-color: transparent;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 100px;

    :hover {
      background-color: red;
    }
  }
`;

export const LabelDiv = styled.div`
  padding: 20px 0;

  button {
    width: 6rem;
    height: 2rem;
    margin-top: 20px;
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 0.5rem;
    border-color: transparent;
    color: #000;
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
      background-color: ${props => props.theme.colors.primary};
      color: #fff;
    }
  }
`;
