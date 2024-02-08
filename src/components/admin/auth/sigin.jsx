import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 
 
  const checkLogin = async () => {
    try {
      const response = await fetch('https://omofood.pythonanywhere.com/api/v1/users/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (response.ok) {
        localStorage.setItem('isLoggedIn', 'true');
        
        // Correctly show success message before navigation
        toast.success('Siz kirdingiz', {
          onClose: () => {
            navigate('/admin/home');
          },
          autoClose: 5000, // Adjust based on how long you want the toast to show
        });
      } else {
        // Handle non-OK response without throwing an error unnecessarily
        toast.error('Siz kira olmadingiz');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error(error.message || 'An error occurred during login');
    }
  };

  return (
    <div className='body'>
      <div className="box">
        <form>
          <h2>Login</h2>
          <div className="inputBx">
            <span></span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <span></span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input type="button" value="Sign in" onClick={checkLogin} />
          </div>
          <div className="groupi">
            <a href="https://t.me/akmalxon000">
              <p>Forgat Password</p>
            </a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
