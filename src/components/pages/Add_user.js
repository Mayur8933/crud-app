import axios from 'axios'
import React, { useState } from 'react'
import '../css/form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const Add_user = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3333/students/", user)
        setUser({
            name: "",
            email: "",
            phone: ""
        })
        return toast("Added", { type: 'success' })
    }

    return (
        <div>
            <div>
                <nav className="navigation">
                    <div className="nav-brand">
                    CRUD APP
                    </div>
                    <ul className="list-non-bullet nav-pills">
                        <li className="list-item-inline">
                            <a className="link .link-weight" href="/">Home</a>
                        </li>
                        <li className="list-item-inline">
                            <a class="link link-weight" href="/records">Records</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='container2'>
                <div className='container2'>
                <h1>ADD User</h1>
                    <div>
                        <form onSubmit={e => onSubmit(e)} className='form'>
                            <input name='name' className='input' placeholder='Name' value={user.name} onChange={e => onInputChange(e)} ></input>

                            <input value={user.email} name='email' className='input' placeholder='Email' onChange={e => onInputChange(e)} required></input>

                            <input value={user.phone} name='phone' className='input' placeholder='Phone' onChange={e => onInputChange(e)} ></input>

                            <button type='submit' className='btn'>ADD</button>
                            <ToastContainer limit={1} closeButton={false} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Add_user;