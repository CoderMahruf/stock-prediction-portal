import React from "react";
import Button from "./Button";
const Header = () => {
    return (
        <>
         <nav className="navbar container pt-5 pb-5 align-items-start ">
            <a className='navbar-brand text-light'>Stock Prediction Portal</a>

            <div>
               <Button text='login' class='btn-outline-info'/>
                &nbsp;
                <Button text='Register' class='btn-info'/>
            </div>
         </nav>
        </>
    )
}

export default Header