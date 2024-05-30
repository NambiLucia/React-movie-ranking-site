import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Subscribe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (name && email && password) {
        try {
          const response = await fetch('http://localhost:1337/api/auth/local/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: name,
              email: email,
              password: password,
              
            }),
          });
          const data = await response.json();
          if (response.ok) {
            alert('Subscribed successfully!');
            setName("");
            setEmail("");
            setPassword("");
            
            navigate('/');
          } else {
            alert(`Failed to Subscribe: ${data.error.message}`);
          }
        } catch (error) {
          console.error('Error Subscribing:', error);
          
        }
      } else {
        alert('Information missing!');
      }
    };
    return (
        <section >
            <form onSubmit={handleSubmit}>
             <div  >
          <h4 className='text-lg font-semibold mb-4 text-custom-red'>Subscribe</h4>
         
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            id="identifier"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='w-48 mb-2 px-4 py-2 text-black rounded'    

          />

         <div>
            <input 
            type="email" 
            name="email" 
            placeholder="Enter your E-mail" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='w-48 mb-2 px-4 py-2 text-black rounded'
          />
          </div>

          <div>
            <input 
            type="password" 
            name="password" 
            placeholder="****" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='w-48 mb-2 px-4 py-2 text-black rounded'
          />
          </div>
          
          <div>
            <button 
            className='bg-custom-red text-white py-2 px-4 rounded hover:black' type='submit'>
            Subscribe
          </button>
          </div>
          
        </div>
        </form>

        </section>
    );
};

export default Subscribe;
