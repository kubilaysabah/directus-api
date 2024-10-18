"use server";

import axios from 'axios'

export async function Login() {
  try {
    const response = await axios({
      url: `/api/auth/login`,
      baseURL: process.env.BASE_URL,
      method: "POST",
      data: {
        email: "admin@example.com",
        password: "12345678"
      }
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function Register(formData: FormData, token: string | null) {
  if (!token) {
    return;
  }

  const body: { [key: string]: string } = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  ["first_name", "last_name", "email", "password"].forEach((item) => {
    const value = formData.get(item);

    if (typeof value === "string") {
      body[item] = value;
    }
  });

  try {
    const response = await axios({
      url: `/api/auth/register?access_token=${token}`,
      baseURL: process.env.BASE_URL,
      method: "POST",
      data: body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
