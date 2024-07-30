import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${({ theme }) => theme.colors['gray-900']};
    color: ${({ theme }) => theme.colors['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 0.5rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors['green-300']};
    color: ${({ theme }) => theme.colors['green-300']};
    font-weight: bold;
    border-radius: 6px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme.colors['green-300']};
      border: 1px solid ${({ theme }) => theme.colors['green-500']};
      color: ${({ theme }) => theme.colors.white};
      transform: bacground-color 0.2s, border 0.2s, color 0.2s;
    }
  }
`;
