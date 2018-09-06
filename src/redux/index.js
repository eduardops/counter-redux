import { createStore, combineReducers, applyMiddleware, compose
} from "redux";
// import uuidv1 from "uuid/v1";

//actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_AMOUNT = "INCREMENT_AMOUNT";
export const DECREMENT_AMOUNT = "DECREMENT_AMOUNT";

export const increment = () => {
    return {
        type: INCREMENT,
    }
};

export const increment_amount = (amount) => {
    return {
        type: INCREMENT_AMOUNT,
        amount
    }
};
export const decrement = () => {
    return {
        type: DECREMENT,
    }
};

export const decrement_amount = (amount) => {
    return {
        type: DECREMENT_AMOUNT,
        amount
    }
};

//reducers
const counter = (state = 1, action) => {
    switch (action.type) {
        case INCREMENT :
            return state + 1;
        case INCREMENT_AMOUNT :
            return state + action.amount;
        case DECREMENT :
            return state - 1;
        case DECREMENT_AMOUNT :
            return state - action.amount;
        default:
            return state;
    }
};

const reducers = combineReducers({
    counter
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [];
const initialState = {};

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store
