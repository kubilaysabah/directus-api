"use client";

import { useState, useCallback, type MouseEvent } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Skeleton
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import useMounted from '@/hooks/mounted'

export default function Password() {
  const isMounted = useMounted();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  const handleMouseUpPassword = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
    []
  );

  if(!isMounted) {
    return (
      <Skeleton variant="rounded" width={'100%'} height={56} sx={{ marginBottom: 2 }} />
    )
  }

  return (
    <FormControl variant="outlined" fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel htmlFor="password">{'Password'}</InputLabel>
      <OutlinedInput
        fullWidth
        name="password"
        id="password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
}
