import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

const formStyle = {
    width: "35%",
    height: "400px",
    display: "grid",
    color: "black",
    marginTop: "50px",
    textAlign: "left",
    margin: "auto",
    padding: "40px",
    paddingTop: "10px",
    paddingBottom: "20px",
    borderRadius: "15px",
    border: "2px solid rgb(215, 215, 233)",
    backgroundColor: "rgb(51, 201, 121)",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
}


export const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState({})
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationError = {};

        if (formData.email === "" || formData.email === null) {
            isValid = true;
            validationError.email = alert("Email Required")
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = true;
            validationError.email = alert("Email is not valid")
        }
        if (formData.password === "" || formData.password === null) {
            isValid = true;
            validationError.password = alert("Password Required")
        } else if (formData.password.length < 6) {
            isValid = true;
            validationError.password = alert("Password Should be minimum 6 characters")
        }

        axios.get("https://online-store-quc3.onrender.com/users").then((res) => {
            res.data.map((user) => {
                if (user.email === formData.email) {
                    if (user.password === formData.password) {
                        alert("Login Successfully")
                        navigate('/');
                    } else {
                        isValid = false;
                        validationError.password = alert("Wrong Password");
                    }
                } else if (formData.email !== "") {
                    isValid = false;
                    validationError.email = alert("Wrong Email")
                }
            })
            setError(validationError)
            setValid(isValid)
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div>
            <div style={{ marginTop: "20px" }}>
                {
                    valid ? <></> :
                        <span>
                            {error.name}; {error.email}; {error.password}
                        </span>
                }
                <form onSubmit={handleSubmit} style={formStyle}>
                    <Heading textAlign={'center'}>Login</Heading>
                    <label>Enter Email</label>
                    <input type='email' placeholder='Enter Email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <label>Enter Password</label>
                    <input type='password' placeholder='Enter Password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    <hr />
                    <button style={{ backgroundColor: "yellow", width: "20%", margin: "auto", padding: "10px", borderRadius: "5px" }}>Login</button><br />
                    <p style={{ backgroundColor: "pink", padding: "10px", width: "70%" }}>if you don't have account, Please <RouterLink to='/signup'>Register</RouterLink></p>
                </form>
            </div>
        </div>
    )
}
