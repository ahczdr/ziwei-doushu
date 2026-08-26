import { LOCATION_PROVINCES, type LocationNode } from './location-data';

export interface DistrictInfo {
  name: string;
  code: string;
  longitude: number;
}

export interface CityInfo {
  name: string;
  code: string;
  longitude: number;
  districts: DistrictInfo[];
}

export interface ProvinceInfo {
  name: string;
  code: string;
  longitude: number;
  cities: CityInfo[];
}

function toDistrict(node: LocationNode): DistrictInfo {
  return { name: node.name, code: node.code, longitude: node.longitude };
}

function toCity(node: LocationNode): CityInfo {
  return {
    name: node.name,
    code: node.code,
    longitude: node.longitude,
    districts: node.children.map(toDistrict),
  };
}

export const PROVINCES: ProvinceInfo[] = LOCATION_PROVINCES.map((province) => ({
  name: province.name,
  code: province.code,
  longitude: province.longitude,
  cities: province.children.map(toCity),
}));

export function findProvince(name: string): ProvinceInfo | undefined {
  return PROVINCES.find((province) => province.name === name);
}

export function findCity(provinceName: string, cityName: string): CityInfo | undefined {
  return findProvince(provinceName)?.cities.find((city) => city.name === cityName);
}

export function findDistrict(provinceName: string, cityName: string, districtName: string): DistrictInfo | undefined {
  return findCity(provinceName, cityName)?.districts.find((district) => district.name === districtName);
}
