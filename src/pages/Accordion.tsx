import { Container, Wrapper, Dropdown } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface accordionProps {
  header: string;
  body: string;
}

function Accordion({ header, body }: accordionProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container className="AccordionContainer">
        <Wrapper
          className="AccordionWrapper"
          onClick={() => setClicked(!clicked)}
        >
          <h1>{header}</h1>
          <button>
            {clicked ? (
              <FiMinus size={"1.5rem"} color="#fff" />
            ) : (
              <FiPlus size={"1.5rem"} color="#fff" />
            )}
          </button>
        </Wrapper>
        {clicked && (
          <Dropdown className="AccordionDropdown">
            <p>{body}</p>
          </Dropdown>
        )}
      </Container>
    </>
  );
}
export default Accordion;
