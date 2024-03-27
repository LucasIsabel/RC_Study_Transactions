import { styled } from 'styled-components';

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface SummaryProps {
  variant?: 'green';
}

export const SummaryCard = styled.div<SummaryProps>`
  background-color: ${({ theme }) => theme.colors['gray-600']};
  border-radius: 0.27rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  background-color: ${({ theme, variant }) =>
    variant === 'green' && theme.colors['green-500']};
`;
