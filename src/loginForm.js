import React, {Component} from 'react';
import {connect} from 'react-redux';

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state={
            validator : {
                isEmailInvalid:false,
                isPhoneInvalid:false,
                isPassInvalid:false,
                isConfirmPassInvalid:false
            } 
        }
        this.validateFeild = this.validateFeild.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.props);
    }

    handleSubmit(){
        console.log("SUBMITTED");
        if(!this.refs.email.value || !this.refs.phone.value || !this.refs.password.value || !this.refs.confirmPassword.value){
            this.setState({validator:{
                isEmailInvalid:!this.refs.email.value,
                isPhoneInvalid:!this.refs.phone.value,
                isPassInvalid:!this.refs.password.value,
                isConfirmPassInvalid:!this.refs.confirmPassword.value
            }})
        }else{
            this.setState({validator : {
                isEmailInvalid:false,
                isPhoneInvalid:false,
                isPassInvalid:false,
                isConfirmPassInvalid:false
            }})
            document.forms[0].reset();
            this.props.updateFeild({type: 'FORM_SUBMITTED', payload: "Submitted!!"});
        }
    }

    validateFeild(event){
        let elemId = event.target.id;
        let elemValue = event.target.value;
        let validation = event.target.checkValidity();
        const regexPass = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g
        console.log(validation)
        switch(elemId){
            case 'email':
                if(validation){
                    this.props.updateFeild({type: 'UPDATE_EMAIL', payload: elemValue});                    
                }else{
                    alert("Invalid Email ID");
                }
                break;
            case 'phone':
                if(elemValue.length === 10){
                    this.props.updateFeild({type: 'UPDATE_PHONE', payload: elemValue});                    
                }else{
                    alert("Invalid Phone Number");
                }
                break;
            case 'password':
                if(regexPass.test(elemValue)){
                    this.props.updateFeild({type: 'UPDATE_PASSWORD', payload: elemValue});                    
                }else{
                    alert("Password Validation Missing");
                }
                break;
            case 'confirmPassword':
                if(validation){
                    this.props.updateFeild({type: 'UPDATE_CONFIRM_PASSWORD', payload: elemValue});                    
                }else{
                    alert("It should be same as Password. Retype!!");
                }
                 break;
                 default:
                break
        }
        console.log(this.props);
    }

    render(){
        return(
            <div>
                <form name="loginForm">
                    <div>
                        <h4>LOGIN FORM</h4>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL ID*&nbsp;</label>
                        <input type="email" name="email" id="email" ref="email" required={true} onBlur={this.validateFeild}/>  
                        {this.state.validator.isEmailInvalid && <p>Please fill</p>}                      
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="phone">PHONE*&nbsp;</label>
                        <input type="Number" id="phone" ref="phone" required={true} onBlur={this.validateFeild}/> 
                        {this.state.validator.isPhoneInvalid && <p>Please fill</p>}                        
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="password">PASSWORD*&nbsp;</label>
                        <input type="password" required={true} ref="password" id="password" onBlur={this.validateFeild}/>        
                        {this.state.validator.isPassInvalid && <p>Please fill</p>}                  
                    </div>
                    <br></br>
                    <div>
                        <label htmlFor="confirmPassword">CONFIRM PASSWORD*&nbsp;</label>
                        <input type="password" required={true} ref="confirmPassword" id="confirmPassword" onBlur={this.validateFeild}/>   
                        {this.state.validator.isConfirmPassInvalid && <p>Please fill</p>}                      
                    </div>
                    <br></br>
                    <div>
                        <button type="button" onClick={this.handleSubmit}>Submit</button>                      
                    </div>
                </form>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return state;
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateFeild: (actionObj)=>{
            dispatch(actionObj);
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);