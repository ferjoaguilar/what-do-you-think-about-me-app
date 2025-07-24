import { supabaseApi } from "@/api/supabase.api"

export type CommentData = {
    name: string
    lastname: string
    comment: string
    email: string
    gift?: number
}

type CommentResponse = {
    name: string
    lastname: string
    comment: string
    email: string
    gift: number | null
    created_at: string
}

export const createComment= async (data:CommentData):Promise<CommentResponse> => {
    try{
        const response = await supabaseApi.post('/comments', data, {
            headers: {
                'Prefer': 'return=representation'
            }
        })
        return response.data[0]
    }
    catch(error){
        console.log("Error de llamado a la api", error);
        throw new Error('Fallo el llamado a la API')
    }
}