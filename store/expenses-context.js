import { createContext } from "react";

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {}

});

function expensesReducer(state, action){
    switch(action.type){
        case 'add':
            const id = Math.random().toString();
            return [{...action.data, id: id},...state]
        case 'update':
        case 'delete':
        default:
            return state;
    }
}

function ContextProvider({children}){
    //state management logic
    const[expenseState, dispatch] = userReducer(expensesReducer);

    //defining various actions that will lead to state changes 
    function addExpense({expenseData}){
        dispatch({ type: 'add', data: expenseData});
    }

    function deleteExpense({expenseData}){
        dispatch({ type: 'delete', data: id});
    }

    function updateExpense({expenseData}){
        dispatch({ type: 'update', data: {id: id, data: expenseData}});
    }


    return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>
}


export default ContextProvider;