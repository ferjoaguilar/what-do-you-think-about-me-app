'use client';
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

    console.log("ERRORES DE FORM", errors);
    const onSubmit = (data:Inputs) => {
        console.log('Formulario enviado', data);
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
                        {...register("name", {required: "El nombre es requerido"} )}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder={TextProps.namePlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor="lastname" className='block text-sm font-medium text-gray-700 mb-2'>
                        Lastname
                    </label>
                    <input 
                        type="text" 
                        id='lastname'
                        {...register('lastname')}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu apellido"
                    />
                </div>

                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                        Email
                    </label>
                    <input 
                        type="email" 
                        id='email'
                        {...register('email')}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu Email"
                    />
                </div>

                <div>
                    <label htmlFor="comment" className='block text-sm font-medium text-gray-700 mb-2'>
                        Comentario
                    </label>
                    <textarea 
                        id='comment'
                        {...register('comment')}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        placeholder="Escribe tu comentario"
                        rows={4}
                    ></textarea>
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
