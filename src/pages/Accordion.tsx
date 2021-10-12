import { Container, Wrapper, Dropdown } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface accordionProps {
  thinker: string;
  phrase: string;
}

function Accordion({ thinker, phrase }: accordionProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container>
        <Wrapper onClick={() => setClicked(!clicked)}>
          <h1>{thinker}</h1>
          <span>
            {clicked ? <FiMinus size={"1.5rem"} /> : <FiPlus size={"1.5rem"} />}
          </span>
        </Wrapper>
        {clicked && (
          <Dropdown>
            <p>{phrase}</p>
          </Dropdown>
        )}
      </Container>
    </>
  );
}
export default Accordion;
