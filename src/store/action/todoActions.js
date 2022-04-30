export const actionType = {
    ADD_TODO:"ADD_TODO",
    DEL_TODO:"DEL_TODO",
    TOGGLE_TODO:"TOGGLE_TODO"
};
export const addTodo = (payload)=>{
    return{
        type:actionType.ADD_TODO,
        payload
    }
}

export const delTodo = (payload)=>{
    return{
        type:actionType.DEL_TODO,
        payload
    }
}

export const toggleTodo = (payload)=>{
    return{
        type:actionType.TOGGLE_TODO,
        payload
    }
}