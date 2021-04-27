import { useState, useRef, useEffect } from "react";
import Link from "../components/Link";
import styled from "styled-components";

export default function MutliUrl() {
  const [state, setState] = useState([]);
  const [url, setUrl] = useState("");
  const InputEl = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    let input = InputEl.current.value;
    //validation checks
    input > 0 &&
      input.length > 0 &&
      !state.includes(input) &&
      setState([...state, input]);

    InputEl.current.value = null;
  };

  useEffect(() => {
    state.length > 1 && setUrl(createUrl([...state]));

    state.length < 2 && setUrl("");
  }, [state]);

  const createUrl = (data) => {
    let url = "https://www.opentable.com/restref/client?rid=";

    for (let i = 0; i < data.length; i++) {
      if (data[i] === data[data.length - 1]) {
        url += data[i];
      } else {
        url += data[i] += "&rid=";
      }
    }
    return url;
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          Resto IDs: <input type="number" ref={InputEl} />{" "}
          <button type="submit">Add Location</button>
        </Form>
        <RidContainer>
          {state.map((rid) => (
            <RidCard key={rid}>
              <RidButton
                onClick={() =>
                  setState(state.filter((number) => number !== rid))
                }
              >
                X
              </RidButton>
              <RidText>{rid}</RidText>
            </RidCard>
          ))}
        </RidContainer>
      </div>
      <Link url={url} />
    </>
  );
}

const Form = styled.form`
  list-style-type: none;
  margin-top: 4em;
`;

const RidContainer = styled.div`
  margin-top: 2em;
`;

const RidButton = styled.button`
  justify-self: center;
  align-self: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: 1px solid #d8d9db;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 0px;
  font-size: 15px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #da3743;
    color: #ffffff;
  }
`;

const RidCard = styled.div`
  display: grid;
  grid-template-columns: 3em auto;
  padding: 0px;
`;

const RidText = styled.p`
  margin-left: 1em;
`;
