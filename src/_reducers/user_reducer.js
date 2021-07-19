import { COVID_MAIN } from "../_actions/type";

export default function (state={},action){
    switch (action.type){
        case COVID_MAIN:
                return {...state,loginSuccess:action.payload};
            break;

        default:
            return state;

        
    }
}