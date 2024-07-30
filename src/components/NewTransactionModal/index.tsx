import { zodResolver } from '@hookform/resolvers/zod';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Close,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';

const transactionSchema = z.object({
  description: z.string().min(3),
  price: z.number(),
  category: z.string().min(3),
  type: z.enum(['income', 'outcome']).nullable(),
});

type TransactionSchema = z.infer<typeof transactionSchema>;

export function NewTransactionModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<TransactionSchema>({
    resolver: zodResolver(transactionSchema),
  });

  const handleFormSubmit = async (data: TransactionSchema) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 5000));
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Adicionar transação</Dialog.Title>
        <Close asChild>
          <X size={24} />
        </Close>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <input
            {...register('description')}
            type="text"
            placeholder="Descrição"
          />
          <input
            {...register('price', { valueAsNumber: true })}
            type="number"
            placeholder="Valor"
          />
          <input
            {...register('category')}
            type="text"
            placeholder="Categoria"
          />

          <Controller
            control={control}
            name="type"
            render={({ field: { onChange } }) => {
              return (
                <TransactionType onValueChange={onChange}>
                  <TransactionTypeButton value="income" variant="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton value="outcome" variant="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button disabled={isSubmitting} type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
