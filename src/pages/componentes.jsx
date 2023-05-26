import { Input } from "@/components/Input";
import { Controller, useForm } from "react-hook-form";

export default function Componentes() {
  const { register, handleSubmit, control } = useForm()

  const submit = (dados) => {
    console.log(dados)
  }

  return (
    <>
      <h1>Componente Personalizado</h1>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="matricula"></label>
          <Controller
            name="matricula"
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              <Input
                type="number"
                id="matricula"
                {...field}
              />
            }
          />
        </div>
        <button>
          Cadastrar
        </button>
      </form>
    </>
  )
}