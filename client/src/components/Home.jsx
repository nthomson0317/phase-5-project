import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useState } from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Card from '@material-ui/core/Card';
import header from '../images/Orchid_header.jpg'

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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Home(props) {
    const classes = useStyles();
    //STATE ONE
    const [username, setUsername]=useState('')
    //STATE TWO
    const [password, setPassword]=useState('')
    //STATE THREE
    const [token, setToken]=useState('')

    
    const handleSubmit = (e) => {
    e.preventDefault()
      let formData = { 
        username: username,    
        password: password,}      
        console.log("Login form has been submitted")
        
        fetch("http://localhost:3000/login", {
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
        localStorage.token = resp.token
        props.setUser(resp)
        props.history.push("/periods")
      }
          else {
              alert("Incorrect username or password")
          }
      console.log(resp)
      }
  
  
    const handleChangeUsername = (e) => {
      setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
      setPassword(e.target.value)
    }

    return (
      <div>
        <Card>
          <img src={header}/>
        </Card>
      
          <Container component="main" maxWidth="xs">

         <CssBaseline />
            <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </div>
    )
}



let mapStateToProps = (globalState) => {
  let booleanOfWhetherTheyAreLoggedIn = !!globalState.userInfo.token
  return {
    token: globalState.userInfo.token,
    username: globalState.userInfo.username
  }
}


export default connect(mapStateToProps)(withRouter(Home))