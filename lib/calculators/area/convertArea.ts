import { AREA_CONSTANTS } from './areaConstants';

export function pyeongToSquareMeters(pyeong: number): number {
  return pyeong * AREA_CONSTANTS.SQUARE_METERS_PER_PYEONG;
}

export function squareMetersToPyeong(squareMeters: number): number {
  return squareMeters * AREA_CONSTANTS.PYEONG_PER_SQUARE_METER;
}

export function squareFeetToSquareMeters(squareFeet: number): number {
  return squareFeet * AREA_CONSTANTS.SQUARE_METERS_PER_SQUARE_FOOT;
}

export function squareMetersToSquareFeet(squareMeters: number): number {
  return squareMeters * AREA_CONSTANTS.SQUARE_FEET_PER_SQUARE_METER;
}

export function acresToSquareMeters(acres: number): number {
  return acres * AREA_CONSTANTS.SQUARE_METERS_PER_ACRE;
}

export function squareMetersToAcres(squareMeters: number): number {
  return squareMeters / AREA_CONSTANTS.SQUARE_METERS_PER_ACRE;
}

export function hectaresToSquareMeters(hectares: number): number {
  return hectares * AREA_CONSTANTS.SQUARE_METERS_PER_HECTARE;
}

export function squareMetersToHectares(squareMeters: number): number {
  return squareMeters / AREA_CONSTANTS.SQUARE_METERS_PER_HECTARE;
}

export function squareYardsToSquareMeters(squareYards: number): number {
  return squareYards * AREA_CONSTANTS.SQUARE_METERS_PER_SQUARE_YARD;
}

export function squareMetersToSquareYards(squareMeters: number): number {
  return squareMeters / AREA_CONSTANTS.SQUARE_METERS_PER_SQUARE_YARD;
}