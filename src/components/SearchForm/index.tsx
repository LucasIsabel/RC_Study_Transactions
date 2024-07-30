import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ButtonContainer } from '../Buttons/style';
import { SearchFormContainer } from './style';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchema = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      query: '',
    },
  });

  const handleSearchTransactions = async (data: SearchFormSchema) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 10000));

    console.log('sending form');
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <ButtonContainer type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </ButtonContainer>
    </SearchFormContainer>
  );
}
