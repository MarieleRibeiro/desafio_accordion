import { Options } from "../components/Options";
import { AccordionSection, Container, Wrapper, Dropdown } from "./styles";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

function Accordion() {
  const [clicked, setClicked] = useState(null);

  const toogle = (index: any) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <AccordionSection>
        <Container>
          {Options.map((item, index) => {
            return (
              <>
                <Wrapper onClick={() => toogle(index)} key={index}>
                  <h1>{item.thinker}</h1>
                  <span>
                    {clicked === index ? (
                      <FiMinus size={"1.5rem"} />
                    ) : (
                      <FiPlus size={"1.5rem"} />
                    )}
                  </span>
                </Wrapper>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.phrases}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </>
  );
}
export default Accordion;
