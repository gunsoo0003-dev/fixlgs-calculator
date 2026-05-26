import type { AreaInputUnit } from '@/lib/calculators/area/areaConstants';

export type AreaPreset = {
  label: string;
  value: number;
  unit: Exclude<AreaInputUnit, 'widthHeight'>;
};

export const koreanAreaPresets: AreaPreset[] = [
  { label: '10㎡', value: 10, unit: 'sqm' },
  { label: '20㎡', value: 20, unit: 'sqm' },
  { label: '33㎡', value: 33, unit: 'sqm' },
  { label: '50㎡', value: 50, unit: 'sqm' },
  { label: '59㎡', value: 59, unit: 'sqm' },
  { label: '84㎡', value: 84, unit: 'sqm' },
  { label: '100㎡', value: 100, unit: 'sqm' },
  { label: '200㎡', value: 200, unit: 'sqm' },
  { label: '10평', value: 10, unit: 'pyeong' },
  { label: '30평', value: 30, unit: 'pyeong' },
  { label: '50평', value: 50, unit: 'pyeong' },
  { label: '100평', value: 100, unit: 'pyeong' },
];