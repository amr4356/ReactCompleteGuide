import {createStore} from 'redux';

const counterReducer=(state={ counter:0 },action)=>{
    if(action.state==='increment'){
        return {
            counter:state.counter+1
        };
    }
    if(action.state==='decrement'){
        return {
            counter:state.counter-1
        };
    }

    return state;
};

const store=createStore(counterReducer);

export default store;