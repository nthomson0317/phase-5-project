import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState } from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Register(props) {
    const classes = useStyles();
    //STATE ONE
    const [username, setUsername]=useState('')
    //STATE TWO
    const [password, setPassword]=useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      let formData = { 
        username: username,    
        password: password}      
        console.log("Register form has been submitted")

        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                 "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((r) => handleResponse(r));
    }

    const handleResponse = (resp) => {
        if(resp.token){
          console.log("User successful")
        }
        else {
          alert("Messed up")
        }
    }
    
  
    const handleChangeUsername = (e) => {
      setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    }

    return (
      <div>
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} 
        noValidate
        onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleChangeUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handleChangePassword}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
        </form>
      </div>
        <Box mt={8}>
        </Box>
    </Container>
    </div>
    )
}
