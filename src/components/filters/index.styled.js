import { List } from "antd";
import styled from "styled-components";

export const FilterSect = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;
export const FilterCheckbox = styled.input`
  width: 1px;
  height: 1px;
  border: none; /* Mobile Safari */
  opacity: 0;
  position: absolute;
  right: 100%;
  bottom: 100%;
  & + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    cursor: pointer;
    top: -48px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  & + label:before {
    content: "❯";
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
  &:checked + label:before {
    color: #737373;
  }
`;

export const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }
  li:last-child {
    border-bottom: none;
  }
  li.editing {
    border-bottom: none;
    padding: 0;
  }
  li.editing .edit {
    display: block;
    width: 506px;
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }
  li.editing .view {
    display: none;
  }
  li .toggle {
    text-align: center;
    width: 40px;
    /* auto, since non-WebKit browsers doesn't support input styling */
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none; /* Mobile Safari */
    -webkit-appearance: none;
    appearance: none;
  }
  li .toggle {
    opacity: 0;
  }
  li .toggle + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
  }
  li .toggle:checked + label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");
  }
  li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }
  li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  li:hover .destroy {
    display: block;
  }
  li .edit {
    display: none;
  }
  li.editing:last-child {
    margin-bottom: -1px;
  }
`;
