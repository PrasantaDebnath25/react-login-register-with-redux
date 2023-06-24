import React from 'react';
import Login from '../Login'
import './HeaderStyle.css'
import imgs from './bar.png'
import { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Registration from '../Registration'
import Timer from '../Timer'
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();
    const [modal, setmodal] = useState(false);
    localStorage.setItem("modalValue", modal);
    const [buttonClick, setbuttonClick] = useState("");
    return (
        <div>
            <div class="topnav">
                <a ><img src={imgs} alt="image" height="25px" width="30px" /></a>

                <div class="topnav-centered">
                    <a href="/" class="active">This is new Project</a>

                </div>
                {/* <a href="/">Home</a> */}
                <div class="topnav-right">
                    {localStorage.getItem("status") === 'true'
                        && <a> <Timer show='on' /> </a>}
                    {localStorage.getItem("status") === 'true'
                        // && <a onClick={() => {
                        //     history.push('/ShowData')
                        //     }}
                        //     >Profile</a>


                        && <a onClick={() => {
                            localStorage.setItem("status", 'false')
                            console.log("Logout Sucessfully")
                            history.push('/')
                            { <Timer show='off' /> }
                        }}
                        >   Logout</a>


                        || <a onClick={() => {
                            setmodal(true); setbuttonClick("login");
                        }}
                        >Login</a>
                    }
                    {localStorage.getItem("status") === 'true'
                        && <a onClick={() => {
                            history.push('/ShowData')
                        }}
                        >Profile</a>
                        || <a onClick={() => {
                            setmodal(true); setbuttonClick("reg");
                        }}
                        >Registration</a>
                    }
                    {/* <a onClick={() => {
                            setmodal(true); setbuttonClick("login");
                        }}
                        >Login</a> */}

                    {/* <a href="/Registration">Registration</a> */}

                </div>

            </div>
            <div >


            </div>
            <Modal style={{
                top: "10%",
                left: "20%",
                // justify-content: center,
                backgroundImage: `url("https://picsum.photos/id/1067/200/300")`,
                width: '850px', height: '650px'
            }} show={modal} onHide={() => setmodal(false)} >

                {buttonClick === "login" ?
                    <p className='font-small grey-text d-flex justify-content-end'>
                        Have not an account? Go to
                        <a className='blue-text ml-1' onClick={() => {
                            setbuttonClick("reg");
                        }}>
                            <h5><b> Register</b></h5>
                        </a>
                    </p>
                    : <p className='font-small grey-text d-flex justify-content-end'>
                        Have an account? Go to
                        <a className='blue-text ml-1' onClick={() => {
                            setbuttonClick("login");
                        }}>
                            <h5><b>Log in</b></h5>
                        </a>
                    </p>
                }
                {buttonClick === "login" ?
                    <Login /> :
                    <Registration />
                }

            </Modal>
        </div>
    )
}
export default Header;