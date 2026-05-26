import type { CalculatorItem } from '@/types/calculator';

export const calculatorList: CalculatorItem[] = [
  {
    title: '평수/면적 체감 계산기',
    description:
      '㎡, 평, 가로×세로 면적을 기준값으로 환산하고 일반형 주차면과 승용차 주차공간 기준까지 함께 확인합니다.',
    href: '/area-calculator',
    status: 'active',
    badge: '사용 가능',
  },
];