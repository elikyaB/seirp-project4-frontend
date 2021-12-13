import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
// import Logo from "../components/Logo"

const Landing = (props) => {
    let navigate = useNavigate()
    const toSignup = () => {navigate('/signup')}
    const toLogin = () => {navigate('/login')}
    return (
        <div>
            {/* <Logo /> */}
            <button className="landing-button" onClick={toSignup}>Signup</button>
            <button className="landing-button" onClick={toLogin}>Login</button>
        </div>
    )
    
}

export default Landing