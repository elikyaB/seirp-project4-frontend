import './App.css';
import Form from "./pages/Form";
import {useState, useEffect} from "react"
import {Route, Routes, Link, useNavigate} from "react-router-dom"
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';





function App() {

  //////////////
  // State
  //////////////
  const navigate = useNavigate()

  const url = "https://seirp-project4.herokuapp.com"
  const local = "http://localhost:8000"

  // state to hold food diary
  const [diary, setDiary] = useState([])

  // an empty todo for initializing the create form
  const nullDiary = {
    day: "",
    log: ""
  }

  const [targetDiary, setTargetDiary] = useState(nullDiary)

  //////////////
  // Functions
  //////////////

  const getDiary = async () => {
    const response = fetch(url+"/user")
    const data = await (await response).json()
    console.log(data)
    setDiary(data)
  }


  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getDiary()
  }, [])

  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signup" element={<Signup url={url} local={local}/>} />
        <Route path="/login" element={<Login url={url} local={local}/>} />
      </Routes>
    </div>
  );
}

export default App;
