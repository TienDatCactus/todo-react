import React, { useContext } from "react";
import { Context } from "../../functions/context/context";
import Items from "../items/index";
import { FilterCheckbox, FilterSect, TodoList } from "./index.styled";

function Filters() {
  const { state, dispatch } = useContext(Context);
  const { todos, filters, filter } = state;
  const visibleTodos = todos.filter(filters[filter]);
  console.log("this is visible : ", visibleTodos);
  const handleToggleAll = (event) => {
    dispatch({ type: "TOGGLE_ALL", completed: event.target.checked });
  };

  const allCompleted = todos.every(filters.completed);
  return (
    <FilterSect>
      <FilterCheckbox
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={handleToggleAll}
        checked={allCompleted}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList>
        {visibleTodos.map((todo, index) => (
          <Items key={index} todo={todo} index={index} />
        ))}
      </TodoList>
    </FilterSect>
  );
}

export default Filters;
