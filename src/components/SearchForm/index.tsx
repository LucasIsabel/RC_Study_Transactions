import { MagnifyingGlass } from 'phosphor-react';
import { ButtonContainer } from '../Buttons/style';
import { SearchFormContainer } from './style';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <ButtonContainer>
        <MagnifyingGlass />
        Buscar
      </ButtonContainer>
    </SearchFormContainer>
  );
}
