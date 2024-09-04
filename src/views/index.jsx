import Header from "../components/header/index";
import { TodoAppContainer } from "./index.styled";
import Footer from "../components/footer";
import FilterSect from "../components/filters/index";
function TodoApp() {
  return (
    <TodoAppContainer>
      <Header />
      <FilterSect />
      <Footer />
    </TodoAppContainer>
  );
}

export default TodoApp;
