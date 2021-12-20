
import { Box, Typography, TextField, Button } from '@mui/material'


const LoginPage = (props: any) => {

  return (
    <Box
      sx= {{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Typography component="h1" variant="h5">Login</Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField id="token" margin="normal" required fullWidth label="Token da Conta"></TextField>
          <Button type="submit" fullWidth variant="contained" sx={{ mt:3, mb:2 }}>Login</Button>
        </Box>


    </Box>
  );
};


export default LoginPage