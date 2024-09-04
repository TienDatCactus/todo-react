import React, { useContext } from "react";
import { Context } from "../../functions/context/context";
import {
  EditInput,
  TitleLabel,
  EmptyLabel,
  DestroyButton,
} from "./index.styled";

function Items({ todo, index }) {
  const { state, dispatch } = useContext(Context);
  const isEditing = state.editIndex === index;

  const handleToggle = () => dispatch({ type: "TOGGLE", index });
  const handleDestroy = () => dispatch({ type: "DESTROY", index });
  const handleEdit = () => dispatch({ type: "EDIT", index });
  const handleEndEdit = (e) =>
    dispatch({ type: "END_EDIT", title: e.target.value.trim() });
  const handleCancelEdit = () => dispatch({ type: "CANCEL_EDIT" });

  const handleKeyUp = (event) => {
    if (event.key === "Enter") handleEndEdit(event);
    else if (event.key === "Escape") handleCancelEdit();
  };
  return (
    <li
      className={`${todo.completed ? "completed" : ""} ${
        isEditing ? "editing" : ""
      }`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <TitleLabel onDoubleClick={handleEdit}>
          {todo.title ? (
            todo.title
          ) : (
            <EmptyLabel>Nothing's entered here !</EmptyLabel>
          )}
        </TitleLabel>
        <DestroyButton
          className="destroy"
          onClick={handleDestroy}
        ></DestroyButton>
      </div>
      {isEditing && (
        <EditInput
          className="edit"
          defaultValue={todo.title}
          onKeyUp={handleKeyUp}
          onBlur={handleEndEdit}
          autoFocus
        />
      )}
    </li>
  );
}

export default Items;
