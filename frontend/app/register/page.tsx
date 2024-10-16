import {
  Button,
  TextField,
  FormGroup,
  Box,
  Grid2 as Grid,
} from "@mui/material";
import Password from "@/components/password";

export default function Register() {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      padding={2}
      width={"100%"}
      height={"100vh"}
    >
      <Grid size={{ xs: 12, sm: 4, lg: 3 }}>
        <Box component={"form"}>
          <FormGroup sx={{ marginBottom: 2 }}>
            <TextField id="email" label="E-Mail" variant="outlined" fullWidth />
          </FormGroup>

          <Password />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            {"Kayıt Ol"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
