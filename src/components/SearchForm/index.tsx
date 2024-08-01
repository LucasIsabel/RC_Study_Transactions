import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TransactionsContext } from '../../contexts/Transaction';
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

  const { fetchTransactions } = useContext(TransactionsContext);

  const handleSearchTransactions = async (data: SearchFormSchema) => {
    if (data?.query) {
      await fetchTransactions(data?.query);
    }
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
