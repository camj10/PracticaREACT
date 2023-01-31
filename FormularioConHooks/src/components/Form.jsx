import React from "react";
const Form = ({input, setInput}) => {
    const onChange = e =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    }

    return(
        <form>
            <div className="form-group">
                <label htmlFor="firstName">First name</label>
                <input onChange={onChange} type="text" name="firstName"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name</label>
                <input onChange={onChange} type="text" name="lastName"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmPassword"/>
            </div>
        </form>
    )
}
export default Form;