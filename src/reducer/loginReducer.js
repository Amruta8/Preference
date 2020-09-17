let initialState= {
    eMail: null,
    phoneNumber: null,
    password: null,
    confirmPassword: null,
    message: null
}
function LoginReducer(state = initialState, action){
    console.log(action);
    switch(action.type){
        case 'UPDATE_EMAIL':return {
            ...state,
            eMail: action.payload
        }
        break;
        case 'UPDATE_PHONE': return {
            ...state,
            phoneNumber: action.payload
        }
        break;
        case 'UPDATE_PASSWORD': return {
            ...state,
            password: action.payload            
        }
        break;
        case 'UPDATE_CONFIRM_PASSWORD': return {
            ...state,
            confirmPassword: action.payload            
        }
        break;  
        case 'FORM_SUBMITTED': return {
            ...state,
            message: action.payload  
        }        
        default:
            return state;
    }
    console.log(...state);
}

export default LoginReducer;