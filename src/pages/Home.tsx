import { useContext } from 'react';
import { Header } from '../components/Header';
import { SearchForm } from '../components/SearchForm';
import { Summary } from '../components/Summary';
import { TransactionsContext } from '../contexts/Transaction';
import { dateFormatter, priceformatter } from '../helpers/formatter';
import {
  PriceHighlight,
  TransactionContainer,
  TransactionTable,
} from './styles';

export function Home() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((trs) => (
              <tr key={trs.id}>
                <td width="50%">{trs.description}</td>
                <td>
                  <PriceHighlight variant={trs.type}>
                    {trs.type === 'outcome' && '- '}
                    {priceformatter.format(trs.price)}
                  </PriceHighlight>
                </td>
                <td> {trs.category} </td>
                <td> {dateFormatter.format(new Date(trs.createdAt))} </td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </>
  );
}
