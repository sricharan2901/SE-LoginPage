import { Container, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function LoginContainerBox({ onSwitch, onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

        if (username && password) {
            onLogin();
            navigate('/'); 
        } else {
            alert('Please enter valid credentials');
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
                    height: '60vh',
                    borderRadius: '8px',
                    opacity: '.7',
                }}
            >
                <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333' , fontSize : '3rem'}}>Login</h1>
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

                    <a href="#!" onClick={onSwitch} style={{ marginBottom: '16px' }}>
                        Don't have an account? Create one
                    </a>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleLogin} 
                        style={{ width: '80%' }}
                    >
                        Login
                    </Button>
                </div>
            </Typography>
        </Container>
    );
}

export default LoginContainerBox;
