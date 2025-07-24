'use client';
import { CommentData, createComment } from '@/services/supabase.service';
import {useForm} from 'react-hook-form'

type TextProps = {
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
}

type Inputs = {
    name: string
    lastname: string
    email: string
    comment: string
    giftMoney: number
}

export const Form = (TextProps:TextProps) => {
    const {register, handleSubmit ,watch, formState:{errors}} = useForm<Inputs>()
    console.log(watch("name"));
    console.log("ERRORES DE FORM", errors);

    const onSubmit = (data:Inputs) => {
        const commentData:CommentData = {
            name: data.name,
            lastname: data.lastname,
            email: data.email,
            comment: data.comment,
            gift: data.giftMoney || undefined
        }

        createComment(commentData)
    }


  return (
    <div className='bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>
            {TextProps.formTitle}
        </h2>

        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 gap-4'>
                <div>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-2'>
                        {TextProps.nameLabel}
                    </label>
                    <input 
                        type="text" 
                        id='name'
                        {...register("name", 
                            {required: "El nombre es requerido", 
                            minLength:{value: 2, message: "El nombre es muy corto"}, 
                            maxLength:{value:60, message: "El nombre es muy largo"},
                            pattern: {value:/^[a-zA-Z0-9\sÜü]*$/i, message: "El nombre solo puede contener letras y números"}}
                        )}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder={TextProps.namePlaceholder}
                    />
                    {
                       errors.name &&
                       <p className='text-red-500 text-xs mt-1'>{errors.name.message}</p> 
                    }
                </div>

                <div>
                    <label htmlFor="lastname" className='block text-sm font-medium text-gray-700 mb-2'>
                        Lastname
                    </label>
                    <input 
                        type="text" 
                        id='lastname'
                        {...register('lastname', {required: "El apelldio es requerido", minLength:{value: 2, message: "El apellido es muy corto"}, maxLength:{value:60, message: "El apellido es muy largo"}})}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu apellido"
                    />
                    {
                        errors.lastname &&
                        <p className='text-red-500 text-xs mt-1'>{errors.lastname.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                        Email
                    </label>
                    <input 
                        type="text" 
                        id='email'
                        {...register('email', {required: "El email es requerido", pattern: {value:/^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/i, message: "El email no es válido"}})}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu Email"
                    />
                    {
                        errors.email &&
                        <p className='text-red-500 text-xs mt-1'>{errors.email.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="comment" className='block text-sm font-medium text-gray-700 mb-2'>
                        Comentario
                    </label>
                    <textarea 
                        id='comment'
                        {...register('comment', {required: "El comentario es requerido"})}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu comentario"
                        rows={4}
                    ></textarea>
                    {
                        errors.comment &&
                        <p className='text-red-500 text-xs mt-1'>{errors.comment.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="giftMoney" className='block text-sm font-medium text-gray-700 mb-2'>
                        Gift
                    </label>
                    <input 
                        type="number" 
                        id='giftMoney'
                        {...register('giftMoney')}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu regalo monetario"
                    />
                </div>

                <div className='flex justify-center'>
                    <button 
                        type='submit' 
                        className='w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    >
                        Guardar comentario
                    </button>
                </div>

            </div>
        </form>

    </div>
  )
}
