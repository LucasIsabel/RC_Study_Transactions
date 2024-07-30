import { ReactNode, createContext, useEffect, useState } from 'react';

export interface TransactionProps {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContext {
  transactions: TransactionProps[];
  createTransaction?: (transaction: TransactionProps) => void;
}

export const TransactionsContext = createContext({} as TransactionsContext);

export const TransactionsProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const handleFetchData = async () => {
    const data = await fetch('http://localhost:3333/transactions');
    const response = await data.json();
    setTransactions(response);
  };

  const handleCreateTransactions = () => {
    // Implement the createTransaction function here
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, createTransaction: handleCreateTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
