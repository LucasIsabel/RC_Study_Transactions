import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :focus {
            outline: none;
            box-shadow: 0 0 0 2px ${({ theme }) => theme.colors['gray-300']};
    }

    body {
        background-color: ${({ theme }) => theme.colors['gray-800']};
        color: ${({ theme }) => theme.colors['gray-300']};
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Roboto', sans-serif;
    }

`;
