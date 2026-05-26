export const AREA_CONSTANTS = {
  SQUARE_METERS_PER_PYEONG: 3.3058,
  PYEONG_PER_SQUARE_METER: 1 / 3.3058,

  SQUARE_FEET_PER_SQUARE_METER: 10.7639,
  SQUARE_METERS_PER_SQUARE_FOOT: 0.092903,

  SQUARE_METERS_PER_ACRE: 4046.8564224,
  SQUARE_METERS_PER_HECTARE: 10000,
  SQUARE_METERS_PER_SQUARE_YARD: 0.83612736,

  STANDARD_PARKING_WIDTH_M: 2.5,
  STANDARD_PARKING_LENGTH_M: 5.0,
  STANDARD_PARKING_AREA_SQM: 12.5,
} as const;

export type AreaInputUnit =
  | 'sqm'
  | 'pyeong'
  | 'widthHeight'
  | 'sqft'
  | 'acre'
  | 'hectare'
  | 'sqyd';

export type AreaResult = {
  inputLabel: string;
  squareMeters: number;
  pyeong: number;
  squareFeet: number;
  acres: number;
  hectares: number;
  squareYards: number;
  squareSideMeters: number;
  parkingSpaces: number;
  carSpaces: number;
};