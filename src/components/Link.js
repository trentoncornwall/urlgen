import { useState, useRef } from "react";
import styled from "styled-components";

export default function Link({ url }) {
  const [copied, setCopied] = useState(false);

  const CodeEl = useRef();

  const copy = (e) => {
    e.preventDefault();

    //Copy Function
    navigator.clipboard.writeText(url).then(function () {
      !copied && setCopied(!copied);
    });
  };

  return url ? (
    <LinkBlock>
      <Pre>
        <Code ref={CodeEl}>{url}</Code>
      </Pre>
      <CopyButton onClick={(e) => copy(e)}>
        {!copied ? "Copy Link" : "Copied!"}
      </CopyButton>
    </LinkBlock>
  ) : null;
}

const CopyButton = styled.button`
  justify-self: start;
  font-size: 15px;
  width: 150px;
  height: 35px;
`;

const LinkBlock = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-rows: auto auto;
`;

const Pre = styled.pre`
  padding: 1.5rem 2rem;
  background: #eee;
  white-space: pre-wrap;
  margin-bottom: 1rem;
  margin: 0.5em 0;
`;
const Code = styled.code`
  color: #07a;
  text-shadow: 0 1px #fff;
  background-color: #eee;
  line-height: 1.5;
  border-radius: 3px;
  font-family: courier, monospace;
  padding: 0 3px;
`;
