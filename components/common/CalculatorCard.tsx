import Link from 'next/link';

import type { CalculatorItem } from '@/types/calculator';

type CalculatorCardProps = {
  item: CalculatorItem;
};

export default function CalculatorCard({ item }: CalculatorCardProps) {
  const isActive = item.status === 'active';

  const cardContent = (
    <article className={`calculator-card ${isActive ? 'is-active' : 'is-coming-soon'}`}>
      <div className="calculator-card-top">
        <span className={`calculator-card-badge ${isActive ? 'active' : 'soon'}`}>
          {item.badge}
        </span>
      </div>

      <h3 className="calculator-card-title">{item.title}</h3>
      <p className="calculator-card-description">{item.description}</p>

      <div className="calculator-card-footer">
        <span>{isActive ? '계산기 열기' : '추가 예정'}</span>
        <span aria-hidden="true">→</span>
      </div>
    </article>
  );

  if (!isActive) {
    return cardContent;
  }

  return (
    <Link href={item.href} className="calculator-card-link">
      {cardContent}
    </Link>
  );
}