import * as Dialog from '@radix-ui/react-dialog';
import Logo from '../../assets/logo.svg';
import { Button } from '../Buttons';
import { NewTransactionModal } from '../NewTransactionModal';
import { HeaderContainer, HeaderContent } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={Logo} alt="Dt Money" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button text="Nova transação" />
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
