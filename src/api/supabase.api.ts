import axios from "axios";

export const supabaseApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    headers: {
        "Content-Type": "application/json",
        "apiKey": process.env.NEXT_PUBLIC_SUPABASE_API_KEY
    }
})
