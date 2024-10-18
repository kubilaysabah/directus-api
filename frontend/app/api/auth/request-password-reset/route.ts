import { NextRequest } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
  try {
    const response = await axios({
      url: '/auth/password/request',
      method: 'POST',
      baseURL: process.env.BASE_API_URL,
      data: request.body
    });

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.log(error);
    return new Response("Bad request", {
      status: 400,
    })
  }
}