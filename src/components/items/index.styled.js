import { Button, Input } from "antd";
import styled from "styled-components";

export const EditInput = styled(Input)`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const TitleLabel = styled.label`
  border-radius: 12px;
  height: inherit;
`;
export const DestroyButton = styled(Button)`
  all: unset;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  transition: color 0.2s ease-out;
  &:hover {
    color: #000;
  }
  &:after {
    content: "×";
  }
`;
export const EmptyLabel = styled.p`
  all: unset;
  font-size: 20px;
  color: #aaa;
  font-style: italic;
  text-decoration: underline;
`;
