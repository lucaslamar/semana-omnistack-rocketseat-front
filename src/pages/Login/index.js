import React, {useState} from 'react';

import api from '../../services/api';


export default function  Login({ history }) {
    const [email,setEmail] = useState('');
  
  
    async function handleSubmit(event) {
     event.preventDefault();
     
    const response = await api.post('/users', {email})
 
    const { _id } = response.data;
    
    localStorage.setItem('user', _id);

    history.push('/dashboard')
 
   }
  
    return (
        <>
        <p>
            ofereça <strong>spots</strong> para programadores e encontre  <strong>talentos</strong> para sua emprea
        </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL * </label>
            <input type="email" id="email" placeholder="Seu Melhor email" value={email} onChange={event => setEmail(event.target.email)}/>
            <button className="btn" type="submit">Entar</button>
          </form>
          </>
    )
  
}
