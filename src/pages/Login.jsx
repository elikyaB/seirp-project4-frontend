import { useState } from "react";
import { useNavigate } from "react-router-dom"
// import Logo from "../components/Logo";

const Login = (props) => {
    let navigate = useNavigate()
    
    const URL = props.url+'/user'
    const getUser = (account) => {
        const queryString = URL+"?email="+account.email+"&password="+account.password
        console.log(queryString)
        // make the post request to API
        fetch("https://seirp-project4.herokuapp.com/user/f71d66527a7d4ac9", {
            method: "post",
            // headers: {"Content-Type": "application/json"}
        }).then(function(response) {
            // console.log(typeof(response))
            return response.clone().json()
        })
        .then(function(data) {
            console.log(data)
            // props.getAuth(data)
        })
    }

    //state to hold form data
    const [newForm, setNewForm] = useState({
        email: "",
        password: ""
    })

    //handleChange function to sync input with state 
    const handleChange = (event) =>{
        // make a copy of state
        const newState = {...newForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setNewForm(newState)
    }

    // handleSubmit function for when form is submitted
    const handleSubmit = (event) => {
        // prevent the page from refreshing
        event.preventDefault()
        // pass the form data
        getUser(newForm)
            // .then(
                // reset the form to empty
                setNewForm({
                    email: "",
                    password: ""
            })
            // )
        // .then(navigate("/diary"))
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="auth-form"
            value={newForm.email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
         
          <input
            type="password"
            className="auth-form"
            value={newForm.password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input type="submit" className="auth-button" value="Login" />
        </form>
      );

    return (
    <div>
        {/* <Logo /> */}
        {form}
    </div>
    )
}

export default Login