import React, { useState, useContext } from 'react';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { Button, withStyles } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { blue } from '@material-ui/core/colors';
import { NewsContext } from '../context/NewsContext';

import login from '../services/getDB';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
      backgroundColor: blue[700],
    },
  },
}))(Button);

const LoginButton = (props) => {
  // const {userData, setuserData} = props;
  const {userContext, setUserContext} = useContext(NewsContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    return (
    (userContext)?<>
    <div style={{marginRight: '15px'}}>
      Hola {userContext.nombre_apellido} !
    </div>
    <ColorButton variant="contained" 
    disableElevation color="primary" 
    onClick={() => {setUserContext(null)}} >
    Cerrar sesión
    </ColorButton></>:(
    <>
    <ColorButton variant="contained" 
    disableElevation color="primary" 
    endIcon={<AccountCircleSharpIcon />} 
    onClick={handleClickOpen}>
      Login
    </ColorButton>

    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Iniciar sesión</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Ingrese sus datos de acceso para poder disfrutar de nuestro contenido Premium
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Correo electrónico"
          type="email"
          fullWidth
        />
        <TextField
          margin="dense"
          id="pass"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => {
          const userName = document.getElementById('name').value;
          const userPass = document.getElementById('pass').value;
          const user = login(userName, userPass);
          alert('El usuario ha iniciado sesión correctamente!!\nBienvenido a nuestro contenido exclusivo!!');
          setUserContext(user);
          
          handleClose();}} 
          color="primary">
          Ingresar
        </Button>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog></>))
        
  
}

export default LoginButton;

