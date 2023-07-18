import { Link} from "react-router-dom"
import  "./SignUp.css"

let Page = () =>{
    return(<>
    <p id="message">Account Created Successfuly!</p>
    <Link to ="/SignUp">
    <button id="button">Ok</button>
    </Link>
    </>)
}

export default Page