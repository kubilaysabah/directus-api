import { Button, TextField, FormGroup, Box, Grid2 } from '@mui/material';

export default function Login() {
    return (
        <Grid2 container alignItems={'center'} justifyContent={'center'}>
            <Grid2 >
                <Box component={'form'}>
                    <FormGroup sx={{ marginBottom: 2 }}>
                        <TextField id="firstname" label="Firstname" variant="outlined" fullWidth />
                    </FormGroup>
                    <FormGroup sx={{ marginBottom: 2 }}>
                        <TextField id="lastname" label="Lastname" variant="outlined" fullWidth />
                    </FormGroup>
                    <Button type="submit" variant="contained" color="primary" fullWidth>{"Giriş Yap"}</Button>
                </Box>
            </Grid2>
        </Grid2>
    )
}