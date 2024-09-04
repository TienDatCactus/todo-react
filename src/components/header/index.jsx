import { useContext, useState } from "react";
import { TodoInput } from "./index.styled";
import { Context } from "../../functions/context/context";
function Header() {
  const { dispatch } = useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      const trimmedValue = inputValue.trim();
      if (trimmedValue) {
        dispatch({ type: "ADD", title: trimmedValue });
        setInputValue("");
      }
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <header>
      <h1>todos</h1>
      <TodoInput
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </header>
  );
}

export default Header;
