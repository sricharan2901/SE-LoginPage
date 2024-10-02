import { Container, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';

function SignupBox({ onSwitch }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if(!/^[a-zA-Z]+[a-zA-Z0-9.]*@[a-zA-Z]+\.[a-zA-Z]+\.[a-zA-Z]{2,}$/.test(username))
        alert('Invalid email id');
    else if (password !== confirmPassword) {
      alert('Passwords do not match!');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      onSwitch(); 
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography
        component="div"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          height: '70vh',
          borderRadius: '8px',
          opacity: '.7',
        }}
      >
        <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333' , fontSize : '3rem'}}>Sign Up</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            width: 600,
          }}
        >
          <TextField
            label="NITK email"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginBottom: '16px', width: '80%' }}
          />
          
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: '16px', width: '80%' }}
          />
          
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ marginBottom: '16px', width: '80%' }}
          />

          <a href="#!" onClick={onSwitch} style={{ marginBottom: '16px' }}>
            Already have an account? Login
          </a>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSignup}
            style={{ width: '80%' }}
          >
            Sign Up
          </Button>
        </div>
      </Typography>
    </Container>
  );
}

export default SignupBox;
