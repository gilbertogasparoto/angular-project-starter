export interface iBudget {
    Id: string,
    BudgetName: string,
    Planned: number,
    Tracked: number,
    Billed: number,
    Comment: string | null,
    Closed: boolean,
    ClosedDate: Date | null,
    CreatedDate: Date
}

export enum BudgetStatus {
    OnTrack = 'onTrack',
    AtRisk = 'atRisk',
    Over = 'over',
}

export type BudgetStatusMapType = { label: string; color: string }

export const budgetStatusMap: Record<BudgetStatus, BudgetStatusMapType> = {
    [BudgetStatus.OnTrack]: { label: 'Saudável', color: 'success' },
    [BudgetStatus.AtRisk]: { label: 'Em Alerta', color: 'warning' },
    [BudgetStatus.Over]: { label: 'Excedido', color: 'danger' }
}