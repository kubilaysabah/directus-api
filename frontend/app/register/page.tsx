"use client";

import { useEffect, useState } from "react";
import { Button, TextField, Grid2 as Grid, Box } from "@mui/material";

import Password from "@/components/password";
import { Register, Login } from '@/actions/auth'

export default function RegisterPage() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    void (async (): Promise<void> => {
      if (token) {
        return;
      }

      const { data } = await Login("admin@example.com", "12345678");
      
      if(!data) {
        return;
      }

      setToken(data.access_token);
    })();
  }, [token]);

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
        <Box action={(formData: FormData) => Register(formData, token)} component={"form"}>
          <TextField
            type="text"
            name="first_name"
            id="first_name"
            label="Firstname"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />

          <TextField
            type="text"
            name="last_name"
            id="last_name"
            label="Lastname"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />

          <TextField
            type="email"
            name="email"
            id="email"
            label="E-Mail"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: 2 }}
          />

          <Password />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            {"Kayıt Ol"}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
