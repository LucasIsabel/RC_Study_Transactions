import { styled } from 'styled-components';

export const TransactionContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 1.4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.colors['gray-700']};

    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }

    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;

interface PriceHighlightProps {
  variant?: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) =>
    variant === 'income' ? theme.colors['green-300'] : theme.colors['red-300']};
`;
