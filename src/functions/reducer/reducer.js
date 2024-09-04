import storage from "../storage/local-storage";
export const initialState = {
  todos: storage.get(),
  filter: "all",
  filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed,
  },
  editIndex: null,
};
export function todoReducer(state, action) {
  let newState;
  switch (action.type) {
    case "ADD":
      newState = {
        ...state,
        todos: [...state.todos, { title: action.title, completed: false }],
      };
      break;
    case "TOGGLE":
      newState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      break;
    case "TOGGLE_ALL":
      newState = {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: action.completed,
        })),
      };
      break;
    case "DESTROY":
      newState = {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index),
      };
      break;
    case "SWITCH":
      newState = { ...state, filter: action.filter };
      break;
    case "CLEAR_COMPLETED":
      newState = {
        ...state,
        todos: state.todos.filter(state.filters.active),
      };
      break;
    case "EDIT":
      newState = { ...state, editIndex: action.index };
      break;
    case "END_EDIT":
      newState = {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === state.editIndex ? { ...todo, title: action.title } : todo
        ),
        editIndex: null,
      };
      break;
    case "CANCEL_EDIT":
      newState = { ...state, editIndex: null };
      break;
    default:
      return state;
  }

  if (newState && newState.todos !== state.todos) {
    storage.set(newState.todos);
  }

  return newState || state;
}
