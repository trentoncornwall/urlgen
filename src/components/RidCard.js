import styled from "styled-components";

export default function RidCard({ rid, setter, state }) {
  return (
    <Card>
      <RidButton
        onClick={() => setter(state.filter((number) => number !== rid))}
      >
        X
      </RidButton>
      <RidText>{rid}</RidText>
    </Card>
  );
}

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
  font-size: 13px;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #da3743;
    color: #ffffff;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 2em auto;
  padding: 0px;
`;

const RidText = styled.p`
  margin-left: 0.5em;
  margin-right: 3em;
`;
