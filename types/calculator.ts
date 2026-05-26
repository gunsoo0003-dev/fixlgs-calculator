export type CalculatorStatus = 'active' | 'coming-soon';

export type CalculatorItem = {
  title: string;
  description: string;
  href: string;
  status: CalculatorStatus;
  badge: string;
};