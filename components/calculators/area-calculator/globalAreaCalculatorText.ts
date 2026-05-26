import type { AreaInputUnit } from '@/lib/calculators/area/areaConstants';

export type GlobalAreaUnit = Exclude<AreaInputUnit, 'widthHeight' | 'pyeong'>;

export type GlobalAreaPreset = {
  label: string;
  value: number;
  unit: GlobalAreaUnit;
};

export const globalAreaUnitOptions: {
  label: string;
  value: GlobalAreaUnit;
}[] = [
  { label: 'Square meters', value: 'sqm' },
  { label: 'Square feet', value: 'sqft' },
  { label: 'Acres', value: 'acre' },
  { label: 'Hectares', value: 'hectare' },
  { label: 'Square yards', value: 'sqyd' },
];

export const globalAreaPresets: GlobalAreaPreset[] = [
  { label: '500 sq ft Studio', value: 500, unit: 'sqft' },
  { label: '1,000 sq ft Apartment', value: 1000, unit: 'sqft' },
  { label: '2,000 sq ft House', value: 2000, unit: 'sqft' },
  { label: '1 Acre Lot', value: 1, unit: 'acre' },
  { label: '0.5 Hectare Land', value: 0.5, unit: 'hectare' },
  { label: '100 sqm Space', value: 100, unit: 'sqm' },
];