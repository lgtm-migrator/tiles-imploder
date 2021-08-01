export const DEFAULT_SERVER_PORT = 80;

export const IGNORED_OUTGOING_TRACE_ROUTES = [/^.*\/v1\/metrics.*$/];
export const IGNORED_INCOMING_TRACE_ROUTES = [/^.*\/docs.*$/];

export const SERVICE_NAME = 'ts-server-boilerplate';

export enum Services {
  LOGGER = 'ILogger',
  CONFIG = 'IConfig',
  TRACER = 'TRACER',
  METER = 'METER',
}

export const MIN_PIXEL_RESOLUTION = 0.703125;
export const TILE_AXIS_SIZE = 256;
export const COORDINATE_SYSTEM = {
  maxLat: 90,
  minLat: -90,
  maxLon: 180,
  minLon: -180,
};