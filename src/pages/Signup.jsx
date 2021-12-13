import { useState } from "react";
import { useNavigate } from "react-router-dom"
// import Logo from "../components/Logo";

const Signup = (props) => {
    let navigate = useNavigate()
    const URL = props.local+'/user'

    const createUser = async (item) => {
        console.log(item, URL)
        // make the post request to API
        await fetch(URL, {
            method: "post",
            headers: {"Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"},
            body: JSON.stringify(item),
        })
    }

    //state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
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
        createUser(newForm)
            .then(
                // reset the form to empty
                setNewForm({
                    name: "",
                    email: "",
                    password: ""
            }))
            // .then(navigate("/login"))
    }

    const form = (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="auth-form"
            value={newForm.name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />

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
          <input type="submit" className="auth-button" value="Signup" />
        </form>
      );

    return (
    <div>
        {/* <Logo /> */}
        {form}
    </div>
    )
}

export default Signup