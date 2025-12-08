import { Pipe, PipeTransform } from '@angular/core';
import { MapService } from '../../core/services/map.service';

@Pipe({
  name: 'registryMap'
})
export class RegistryMapPipe implements PipeTransform {

  constructor(private registry: MapService) { }

  transform(
    key: any,
    mapName: string,
    prop?: string,
    fallback: any = null
  ): any {
    const map = this.registry.getMap(mapName);

    if (!map) return fallback;

    const value = map[key];

    if (value === undefined || value === null) return fallback;

    if (!prop) return value;

    if (typeof value !== 'object') return fallback;

    return value[prop] ?? fallback;
  }
}
