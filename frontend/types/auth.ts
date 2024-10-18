export type RegisterParams = { 
    first_name: string; 
    last_name: string; 
    email: string;
    password: string;
}

export type LoginParams = {
    email: string;
    password: string;
}

export type LoginResponse = {
    access_token: string;
    expires: number;
    refresh_token: string;
}

export type ResetPasswordParams = {
    token: string; // password_reset_token
    password: string;
}