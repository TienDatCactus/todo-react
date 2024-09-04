import {
  ClearButton,
  FilterList,
  FooterContainer,
  TodoCounter,
} from "./index.styled";
import { Context } from "../../functions/context/context";
import { useContext } from "react";
function Footer() {
  const { state, dispatch } = useContext(Context);
  const { todos, filter, filters } = state;
  const activeTodoCount = todos.filter((todo) => !todo.completed).length;
  const completedTodoCount = todos.length - activeTodoCount;

  const handleFilterChange = (newFilter) => {
    dispatch({ type: "SWITCH", filter: newFilter });
  };

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <FooterContainer>
      <TodoCounter>
        <strong>{activeTodoCount}</strong> item
        {activeTodoCount !== 1 ? "s" : ""} left
      </TodoCounter>
      <FilterList
        dataSource={Object.keys(filters)}
        renderItem={(type) => (
          <li key={type}>
            <a
              href={`#/${type}`}
              className={filter === type ? "selected" : ""}
              onClick={(e) => {
                e.preventDefault();
                handleFilterChange(type);
              }}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </a>
          </li>
        )}
      ></FilterList>
      {completedTodoCount > 0 && (
        <ClearButton onClick={handleClearCompleted}>
          Clear completed
        </ClearButton>
      )}
    </FooterContainer>
  );
}

export default Footer;
