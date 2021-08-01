import { MultiPolygon, Polygon } from '@turf/helpers';
import { BBox2d } from '@turf/helpers/dist/js/lib/geojson';

export interface IConfig {
  get: <T>(setting: string) => T;
  has: (setting: string) => boolean;
}

export interface Coordinate {
  lon: number;
  lat: number;
}

export interface IInput {
  footprint: Polygon | MultiPolygon;
  bbox: BBox2d | true;
  zoomLevel: number;
}

export interface IGpkgConfig {
  name: string;
  path: string;
  tableName: string;
  resampling: string;
  tilingScheme: string;
}
