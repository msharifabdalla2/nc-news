import { useNavigate } from "react-router-dom";
import user_img from "../assets/user_img.png"
import { Link } from "react-router-dom";


function Header() {
    const navigate = useNavigate()

    function handleLogoClick() {
        navigate('/')
    }

    function handleUserClick() {
    }
    
    return (
        <div className="header">
            <img src="null" alt="logo" onClick={handleLogoClick}/>
            <h1><Link to="/">NC News</Link></h1>
            <img src={user_img} alt="cartoon user login" />
        </div>
    );
};

export default Header;