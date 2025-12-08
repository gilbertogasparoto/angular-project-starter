import { Inject, Injectable, Optional } from '@angular/core';
import { MAP_REGISTRY_TOKEN } from '../tokens/map-registry.token';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  constructor(@Optional() @Inject(MAP_REGISTRY_TOKEN) private registry: Record<string, any> = {}) { }

  register(name: string, map: Record<any, any>) {
    this.registry[name] = map;
  }

  getMap(name: string): Record<any, any> | undefined {
    return this.registry[name];
  }

  getProp(name: string, key: any, prop: string, fallback?: any) {
    const map = this.getMap(name);
    if (!map) return fallback;
    const item = map[key];
    if (!item) return fallback;
    return item[prop] ?? fallback;
  }
}
