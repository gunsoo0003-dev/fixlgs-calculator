import type { Metadata } from 'next';

import AreaCalculatorPageContent from '@/components/calculators/area-calculator/AreaCalculatorPageContent';
import SiteFooter from '@/components/layout/SiteFooter';
import SiteHeader from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: '평수/면적 체감 계산기 | FIXLGS Calculator',
  description:
    '㎡, 평, 가로×세로 면적을 입력하면 정사각형 기준, 일반형 주차면 기준, 승용차 주차공간 기준으로 함께 환산합니다.',
};

export default function AreaCalculatorPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <AreaCalculatorPageContent />
      <SiteFooter />
    </div>
  );
}