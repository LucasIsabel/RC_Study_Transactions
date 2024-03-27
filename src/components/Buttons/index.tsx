import { ComponentProps } from 'react';
import { ButtonContainer } from './style';

type ButtonProps = {
  variant?: string;
  text: string;
} & ComponentProps<'button'>;

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer onClick={props.onClick} {...props}>
      {props.text}
    </ButtonContainer>
  );
}
