import React, { useState } from 'react';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import { IconButton, TextField } from '@mui/material';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import logo from '../Images/logo.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  maxHeight: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Botton = styled.h3`
  padding: 0.8rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 60%;
  background-color: #bd883c;
  border-radius: 50px;
  color: white;
  margin: 0 auto;
  text-align: center;

  :hover {
    background-color: #775524;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 1rem;
    height: 100%;
  }
`;

const BtnAlerta = (props) => {
  const [open, setOpen] = useState(false);
  const [formText, setFormText] = useState('');
  const [hasError, setHasError] = useState(false);
  const [helperText, setHelperText] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const guardarCambio = (evento) => {
    // console.log(evento.target.value);
    setFormText(evento.target.value);

    //validar formulario despues de cada cambio
    esValido();
  };

  /**
   * Solo vamos a execute cuando we click el boton
   */
  const esValido = () => {
    setHasError(false);
    setHelperText('');

    if (formText === '') {
      setHasError(true);
      setHelperText('Please enter your Email');
    }

    //Otras reglas

    // Mandar informacion a servidor o base de datos
  };

  return (
    <div className={props.className}>
      <div>
        <Botton onClick={handleOpen}>JOIN THE COMMUNITY</Botton>

        <Modal open={open} onClose={handleClose}>
          <Box style={style}>
            {/* <Card sx={{ maxWidth: 700, maxHeight: 400 }}> */}

            <Card>
              <IconButton onClick={handleClose}>
                <AiOutlineCloseCircle />
              </IconButton>

              <CardMedia
                component="img"
                sx={{ width: 100, margin: '0 auto' }}
                height="50"
                width="50"
                alt="logo"
                image={logo}
              />

              <CardContent sx={{ textAlign: 'center' }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: 'times', fontSize: '3rem' }}
                >
                  Join the Foodie Community
                </Typography>

                <TextField
                  sx={{
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    width: 600,
                    maxWidth: '100%',
                    '&:hover': {
                      borderColor: '#bd883c',
                    },
                    '&:focus': { borderColor: '#bd883c' },
                  }}
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="Email"
                  type="email"
                  onChange={guardarCambio}
                  error={hasError}
                  helperText={helperText}
                />
                {/* <TextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                /> */}

                <Fab
                  sx={{
                    marginTop: ' 1rem',
                    color: 'white',
                    bgcolor: '#bd883c',
                    width: '80%',
                    '&:hover': {
                      backgroundColor: '#775524',
                      borderColor: '#bd883c',
                      boxShadow: 'none',
                    },
                    '&:active': {
                      boxShadow: 'none',
                      backgroundColor: '#bd883c',
                      borderColor: '#775524',
                    },
                    // '&:focus': {
                    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
                    // },
                  }}
                  variant="extended"
                  onClick={esValido}
                >
                  JOIN
                </Fab>

                <Typography
                  sx={{
                    marginTop: ' 1rem',
                  }}
                  variant="body2"
                  color="text.secondary"
                >
                  Privacy Policy: We hate spam and promise to keep your email
                  address safe
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default styled(BtnAlerta)`
  .image-container {
    max-width: 50%;
  }
`;
