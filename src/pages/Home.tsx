import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { Summary } from '../components/Summary';
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles';
export function Home() {
  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            <tr>
              <td width="50%">Desenolvimento de site</td>
              <td>
                <PriceHighlight variant="income"> R$ 9.000,00 </PriceHighlight>
              </td>
              <td> Venda </td>
              <td> 13/04/2024 </td>
            </tr>
            <tr>
              <td width="50%">Desenolvimento de site</td>
              <td>
                <PriceHighlight variant="outcome">R$ 12.000,00 </PriceHighlight>
              </td>
              <td> Venda </td>
              <td> 17/04/2024 </td>
            </tr>
            <tr>
              <td width="50%">Desenolvimento de site</td>
              <td>
                <PriceHighlight variant="income"> R$ 12.000,00 </PriceHighlight>
              </td>
              <td> Venda </td>
              <td> 25/04/2024 </td>
            </tr>
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
}
