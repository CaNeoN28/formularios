import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useForm } from 'react-hook-form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submit = (dados) => {
    console.log(dados)
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            {...register('nome', {
              required: "O nome não pode estar em branco",
              minLength: {
                value: 5,
                message: "O nome deve possuir mais de 5 caracteres"
              },
            })} />
          {errors.nome && <span>
            O nome está inválido!
            {console.log(errors)}
          </span>}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type='email' id="email" {...register('email', {
            required: true
          })} />
        </div>
        <button>
          Cadastrar
        </button>
      </form>
    </>
  )
}
