import { NextRequest } from 'next/server';
import axios, {AxiosError} from 'axios';

export async function POST(request: NextRequest) {
  const data = await request.json();

  try {
    const response = await axios({
      method: "POST",
      baseURL: process.env.BASE_API_URL,
      url: "/auth/login",
      data
    })

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": 'application/json'
      }
    });
    
  } catch (err) {
    const error = err as AxiosError;
    return new Response(JSON.stringify({
      name: error.name,
      message: error.message,
    }), {
      status: error.status
    })
  }
}