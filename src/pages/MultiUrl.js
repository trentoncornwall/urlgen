import { useState, useRef, useEffect } from "react";
import RidCard from "../components/RidCard";
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
            <RidCard key={rid} rid={rid} state={state} setter={setState} />
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
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  height: 100%;
  margin-top: 2em;
`;
