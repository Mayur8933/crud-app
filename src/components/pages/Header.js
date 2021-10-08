import React from "react";
import '../css/header.css'

const Header = () => {

    return (
        <div>
            <nav className="navigation">
                <div className="nav-brand">
                    <a style={{color:'white'}} className='text-deco' href='/'> CRUD APP </a>
                </div>
                <ul className="list-non-bullet nav-pills">
                    <li className="list-item-inline">
                        <a className="link .link-weight link-active size" href="/">Home</a>
                    </li>
                    <li className="list-item-inline">
                        <a class="link link-weight size" href="/adduser">Add user</a>
                    </li>
                    <li className="list-item-inline">
                        <a class="link link-weight size" href="/records">Records</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
