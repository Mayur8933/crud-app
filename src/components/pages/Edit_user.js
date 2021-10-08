import axios from 'axios'
import React, { useState ,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../css/form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const EditUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const {id} = useParams();

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3333/students/${id}`, user)
        return toast("Saved", { type: 'success' })
    }

    useEffect(()=>{
        const loadUser = async()=>{
            const result = await axios.get(`http://localhost:3333/students/${id}`)
            setUser(result.data)
        }
        loadUser();
         // eslint-disable-next-line
    },[])

    return (
        <div>
            <div>
                <nav style={{width:'100vw'}} className="navigation">
                    <div className="nav-brand">
                    CRUD APP
                    </div>
                    <ul style={{paddingRight:'2rem'}} className="list-non-bullet nav-pills">
                        <li className="list-item-inline">
                            <Link className='white' to='/'>Home</Link>
                        </li>
                        <li className="list-item-inline">
                            <Link className='white' to="/records">Records</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='container2'>
                <div className='container2'>
                <h1>Edit User</h1>
                    <div>
                        <form onSubmit={e => onSubmit(e)} className='form'>
                            <input name='name' className='input' placeholder='Name' value={user.name} onChange={e => onInputChange(e)} ></input>

                            <input value={user.email} name='email' className='input' placeholder='Email' onChange={e => onInputChange(e)} required></input>

                            <input value={user.phone} name='phone' className='input' placeholder='Phone' onChange={e => onInputChange(e)} ></input>

                            <button type='submit' className='btn'>ADD</button>
                            <ToastContainer limit={1} closeButton={true} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default EditUser;