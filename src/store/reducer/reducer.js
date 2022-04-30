const initState = [
    {
    item:'learn js',
    done:false
    },
    {
    item:'learn react',
    done:true
    },
    {
    item:'learn redux',
    done:false
    }
];
export const reducer=(originState=initState,{type,payload})=>{
    switch(type){
        case "ADD_TODO":
            return [...originState,payload];
        case "DEL_TODO":
            return originState.filter( value => value.item !== originState[payload].item);//Q2:该过滤条件todo内容不能有相同项
        case "TOGGLE_TODO":{
            const NewState = [...originState];
            NewState[payload].done = !NewState[payload].done;
            return NewState;
        }
        default:
            return originState;
    }
}