import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

export interface TransactionProps {
  id?: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContext {
  transactions: TransactionProps[];
  createTransaction: (transaction: TransactionProps) => void;
  fetchTransactions: (query: string) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContext);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const fetchTransactions = async (query?: string) => {
    const response = await api.get(`/transactions`, {
      params: {
        description: query,
        _sort: 'createdAt',
        _order: 'desc',
      },
    });
    setTransactions(response.data);
  };

  const createTransaction = async (data: TransactionProps) => {
    const response = await api.post('/transactions', data);
    setTransactions((prev) => [...prev, response.data]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        createTransaction,
        fetchTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
