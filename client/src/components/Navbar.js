import React, {useContext } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { UserContext } from '../App'

const NavBar = () => {

    const history = useHistory()
    const { state, dispatch } = useContext(UserContext);
    
    //initially state is empty
    //to render links based on state
    const renderList = () => {
        if(state){
            return [
                <li key="profile"><Link to="/profile">Profile</Link></li>,
                <li key="create"><Link to="/create">Create Post</Link></li>,
                <li key="logout">
                    <button className="btn #c62828 red darken-3" style={{marginRight:"10px"}}
                        onClick = {() => {
                            localStorage.clear();
                            dispatch({type:"CLEAR"});
                            history.push('/signin');
                        }}>
                        Logout
                    </button>
                </li>
            ]
        }else{
            return [
                <li key="signin"><Link to="/signin">Signin</Link></li>,
                <li key="signup"><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <nav>
            <div className="nav-wrapper white">
            <Link to={state?"/":"/signin"} className="brand-logo left">Instagram</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                {renderList()}
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;