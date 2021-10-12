import { AccordionSection, Container, Wrapper, Dropdown } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

interface accordionProps {
  thinker: string;
  phrases: string;
}

function Accordion({ thinker, phrases }: accordionProps) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <AccordionSection>
        <Container>
          <Wrapper onClick={() => setClicked(!clicked)}>
            <h1>{thinker}</h1>
            <span>
              {clicked ? (
                <FiMinus size={"1.5rem"} />
              ) : (
                <FiPlus size={"1.5rem"} />
              )}
            </span>
          </Wrapper>
          {clicked && (
            <Dropdown>
              <p>{phrases}</p>
            </Dropdown>
          )}
        </Container>
      </AccordionSection>
    </>
  );
}
export default Accordion;
