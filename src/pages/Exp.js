import { useState, useRef } from "react";
import Link from "../components/Link";
import styled from "styled-components";

export default function Exp() {
  const [url, setUrl] = useState();
  const [state, setState] = useState({
    rid: "",
    expId: "",
  });

  const ridEle = useRef();
  const expEle = useRef();

  const createUrl = (data) => {
    let URL = `https://www.opentable.com/booking/experiences-availability?rid=${data.rid}&experienceId=${data.expId}&restref=${data.rid}`;
    return URL;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate
    if (!state.expId || state.rid < 0) {
      // preform a toast warning
      ridEle.current.reportValidity();
      expEle.current.reportValidity();
      return false;
    }

    setUrl(createUrl(state));
  };

  return (
    <form>
      <FormList>
        <FormRow>
          <Label>Resto ID:</Label>
          <input
            type="number"
            ref={ridEle}
            onChange={() => setState({ ...state, rid: ridEle.current.value })}
            autoComplete="off"
            required="required"
          />
        </FormRow>
        <FormRow>
          <Label>Exp ID:</Label>
          <input
            type="number"
            ref={expEle}
            onChange={() => setState({ ...state, expId: expEle.current.value })}
            autoComplete="off"
            required="required"
          />
        </FormRow>
        <SubmitButton type="submit" onClick={handleSubmit}>
          Submit
        </SubmitButton>
        <Link url={url} />
      </FormList>
    </form>
  );
}

const SubmitButton = styled.button`
  margin-top: 1em;
  font-size: 15px;
  width: 150px;
  height: 35px;
`;
const FormList = styled.ul`
  list-style-type: none;
  margin-top: 6em;
`;

const FormRow = styled.li`
  display: grid;
  margin-bottom: 15px;
  grid-template-columns: 110px 200px;
  height: 1.5em;
  width: 100%;
`;
const Label = styled.label`
  margin: 5px 10px 5px 0;
`;
