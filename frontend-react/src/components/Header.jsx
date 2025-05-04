import React from "react";
import Button from "./Button";
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
    return (
        <>
         <nav className="navbar container pt-5 pb-5 align-items-start ">
            <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>

            <div>
               <Button text='login' class='btn-outline-info' url="/login"/>
                &nbsp;
                <Button text='Register' class='btn-info' url="/register"/>
            </div>
         </nav>
        </>
    )
}

export default Header