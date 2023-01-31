import React from "react";
import Form from "./Form";
const Results = (props) => {
    const{firstName,lastName,email,password,confirmPassword}= props.data;
    return(
        <div>
            <h2>Results</h2>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm password: {confirmPassword}</p>
        </div>
    )
}
export default Results