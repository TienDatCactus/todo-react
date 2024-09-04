import styled from "styled-components";
import { Button, List } from "antd";
export const FooterContainer = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

export const TodoCounter = styled.span`
  float: left;
  text-align: left;
  strong {
    font-weight: 300;
  }
`;

export const FilterList = styled(List)`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
  all: unset;
  li {
    display: inline;
    a {
      color: inherit;
      margin: 3px;
      padding: 3px 7px;
      text-decoration: none;
      border: 1px solid transparent;
      border-radius: 3px;
    }
    a:hover {
      border-color: rgba(175, 47, 47, 0.1);
    }
    a.selected {
      border-color: rgba(175, 47, 47, 0.2);
    }
  }
`;

export const ClearButton = styled(Button)`
  all: unset;
  &,
  &:active {
    float: right;
    bottom : 98%;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }
  &:hover {
    text-decoration: underline;
    background: none;
    color: #ccc;
  }
`;
