import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanComponentDeactivate } from '../models/component.model';

@Injectable({
    providedIn: 'root'
})
export class PendingChangesGuard implements CanDeactivate<CanComponentDeactivate> {

    canDeactivate(component: CanComponentDeactivate): boolean {
        return component.canDeactivate()
            ? true
            : confirm('Há alterações não salvas. Deseja realmente sair?');
    }
}
