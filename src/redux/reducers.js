// reducers.js
const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false,
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        case 'TOGGLE_TODO':
            const toggledTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: toggledTodos,
            };
        case 'TOGGLE_CHECKBOX':
            const toggledCheckboxTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: toggledCheckboxTodos,
            };

        case 'MARK_TODO':
            const markedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
            return {
                ...state,
                todos: markedTodos,
            };
        case 'DELETE_TODO':
            const filteredTodos = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            );
            return {
                ...state,
                todos: filteredTodos,
            };
       
        case 'DELETE_ALL_TODOS':
            return {
                ...state,
                todos: [],
            };

        default:
            return state;
    }
};

export default todoReducer;
