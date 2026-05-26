import { AREA_CONSTANTS, type AreaInputUnit, type AreaResult } from './areaConstants';
import {
  acresToSquareMeters,
  hectaresToSquareMeters,
  pyeongToSquareMeters,
  squareFeetToSquareMeters,
  squareMetersToAcres,
  squareMetersToHectares,
  squareMetersToPyeong,
  squareMetersToSquareFeet,
  squareMetersToSquareYards,
  squareYardsToSquareMeters,
} from './convertArea';

type CalculateAreaParams =
  | {
      unit: Extract<AreaInputUnit, 'sqm'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'pyeong'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'sqft'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'acre'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'hectare'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'sqyd'>;
      value: number;
    }
  | {
      unit: Extract<AreaInputUnit, 'widthHeight'>;
      width: number;
      height: number;
    };

function round(value: number, digits = 2): number {
  const multiplier = 10 ** digits;
  return Math.round(value * multiplier) / multiplier;
}

export function calculateAreaResults(params: CalculateAreaParams): AreaResult {
  let squareMeters = 0;
  let inputLabel = '';

  if (params.unit === 'sqm') {
    squareMeters = params.value;
    inputLabel = `${params.value}㎡`;
  }

  if (params.unit === 'pyeong') {
    squareMeters = pyeongToSquareMeters(params.value);
    inputLabel = `${params.value}평`;
  }

  if (params.unit === 'sqft') {
    squareMeters = squareFeetToSquareMeters(params.value);
    inputLabel = `${params.value} sq ft`;
  }

  if (params.unit === 'acre') {
    squareMeters = acresToSquareMeters(params.value);
    inputLabel = `${params.value} acres`;
  }

  if (params.unit === 'hectare') {
    squareMeters = hectaresToSquareMeters(params.value);
    inputLabel = `${params.value} ha`;
  }

  if (params.unit === 'sqyd') {
    squareMeters = squareYardsToSquareMeters(params.value);
    inputLabel = `${params.value} sq yd`;
  }

  if (params.unit === 'widthHeight') {
    squareMeters = params.width * params.height;
    inputLabel = `${params.width}m × ${params.height}m`;
  }

  const pyeong = squareMetersToPyeong(squareMeters);
  const squareFeet = squareMetersToSquareFeet(squareMeters);
  const acres = squareMetersToAcres(squareMeters);
  const hectares = squareMetersToHectares(squareMeters);
  const squareYards = squareMetersToSquareYards(squareMeters);
  const squareSideMeters = Math.sqrt(squareMeters);
  const parkingSpaces = squareMeters / AREA_CONSTANTS.STANDARD_PARKING_AREA_SQM;

  return {
    inputLabel,
    squareMeters: round(squareMeters, 2),
    pyeong: round(pyeong, 2),
    squareFeet: round(squareFeet, 2),
    acres: round(acres, 4),
    hectares: round(hectares, 4),
    squareYards: round(squareYards, 2),
    squareSideMeters: round(squareSideMeters, 2),
    parkingSpaces: round(parkingSpaces, 2),
    carSpaces: Math.round(parkingSpaces),
  };
}