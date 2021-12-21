
import { Box, Typography, TextField, Button } from '@mui/material'
import { FormEvent } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

const LoginPage = (props: any) => {

  const route = useRouter()
  async function onSubmit(event: FormEvent){
    event.preventDefault()
    const token = (document.querySelector("#token") as HTMLInputElement).value;
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_HOST}/login`, { token })
      route.push("/orders")
    } catch(e) {
      console.error(e)
      alert("problema no login")
    }
  }

  return (
    <Box
      sx= {{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <Box component="form" sx={{ mt: 1 }} onSubmit={onSubmit}>
          <TextField id="token" margin="normal" required fullWidth label="Token da Conta"></TextField>
          <Button type="submit" fullWidth variant="contained" sx={{ mt:3, mb:2 }}>Login</Button>
        </Box>


    </Box>
  );
};


export default LoginPage