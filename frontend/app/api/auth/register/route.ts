import { NextRequest } from "next/server";
import axios, { AxiosError } from "axios";

export async function POST(request: NextRequest) {
  const url = new URL(request.url);
  const token = url.searchParams.get("access_token");

  const data = await request.json();

  try {
    const response = await axios({
      url: `/users/register?access_token${token}`,
      method: "POST",
      baseURL: process.env.BASE_API_URL,
      data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: unknown) {
    const error = err as AxiosError;

    if (error.isAxiosError) {
      return new Response(JSON.stringify({ message: error.message, name: error.name, code: error.code }), {
        status: error.code ? +error.code : 400,
      });
    }

    return new Response(JSON.stringify(error), {
      status: 400,
    });
  }
}
