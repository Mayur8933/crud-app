import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import '../css/form.css'

const View = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const { id } = useParams();

    useEffect(() => {
        const loadUser = async () => {
            const result = await axios.get(`http://localhost:3333/students/${id}`);
            setUser(result.data)
        }
        loadUser();
        // eslint-disable-next-line
    },[])  

    return (
        <div>
            <Header />
            <div style={{marginLeft:'2.5rem'}} className='view'>
                <table className='mar'>
                <h1 style={{ textAlign: 'center'}}>User Id : {id}</h1>
                    <tr>
                        <td>name : {user.name}</td>
                    </tr>
                    <tr>
                        <td>email : {user.email}</td>
                    </tr>
                    <tr>
                        <td>phone : {user.phone}</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
};

export default View;