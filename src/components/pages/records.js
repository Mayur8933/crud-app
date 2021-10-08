import React, { useState, useEffect } from 'react'
import '../css/form.css'
import axios from 'axios'
import { Link} from 'react-router-dom';
import { FaRegEye, FaEdit, FaRegTrashAlt } from 'react-icons/fa';

const Records = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get('http://localhost:3333/students/')
        console.log(result)
        setUsers(result.data.reverse())
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3333/students/${id}`)
        loadUsers();
    }

    return (
        <div>
            <div>
                <nav className="navigation">
                    <div className="nav-brand">
                    <a style={{color:'white'}} className='text-deco' href='/'> CRUD APP </a>
                    </div>
                    <ul className="list-non-bullet nav-pills">
                        <li className="list-item-inline">
                            <a className="link .link-weight" href="/">Home</a>
                        </li>
                        <li className="list-item-inline">
                            <a class="link link-weight" href="/adduser">AddUser</a>
                        </li>
                        <li className="list-item-inline">
                            <a class="link link-weight link-active" href="/records">Records</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className='right-div over'>
                <h1 style={{ textAlign: 'center' }}>Records</h1>
                <div className='over'> 
                    <table>
                        <tr className='table-head'>
                            <th className='sr-no'>SR.No</th>
                            <th className='th'>Name</th>
                            <th className='email'>Email</th>
                            <th>Action</th>
                        </tr>
                        <tbody className='info'>
                            {
                                users.map((user, index) => (
                                    <tr className='info'>
                                        <th className='sr-no'>{user.id}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link className='pad-right blue' to={`/view/${user.id}`}><FaRegEye /></Link>
                                            <Link className='pad-right green' to={`/edituser/${user.id}`}><FaEdit /></Link>
                                           <a href='/records' onClick={() => deleteUser(user.id)} className='pad-right red'><FaRegTrashAlt /></a>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Records;
