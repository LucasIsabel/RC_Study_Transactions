import { HeaderContainer, HeaderContent } from './styles';
import Logo from '../../assets/logo.svg';
import { Button } from '../Buttons';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Dt Money" />
        <Button text="Nova transação" />
      </HeaderContent>
    </HeaderContainer>
  );
}
