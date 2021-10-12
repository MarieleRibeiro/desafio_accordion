import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;
export const Wrapper = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 1.5rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;
export const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  p {
    font-size: 1.2rem;
  }
`;
