import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { priceformatter } from '../../helpers/formatter';
import { useSummary } from '../../hooks/useSummary';
import { SummaryCard, SummaryContainer } from './style';

export function Summary() {
  const { summary } = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceformatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceformatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green" className="highlight-background">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceformatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
