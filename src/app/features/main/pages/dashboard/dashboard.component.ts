import { Component } from '@angular/core';
import { SevenPaceService } from '../../../../core/services/api/7pace.service';
import { BudgetStatus, iBudget, budgetStatusMap } from '../../../../core/models/budget.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  budgets: iBudget[] = [];
  loading: boolean = true;
  selectedStatuses: BudgetStatus[] = [BudgetStatus.OnTrack, BudgetStatus.AtRisk, BudgetStatus.Over];
  budgetStatusMap = budgetStatusMap;
  budgetStatusValues = Object.values(BudgetStatus);

  constructor(private sevenPaceService: SevenPaceService) { }

  percentComplete(budget: iBudget): number {
    if (budget.Planned === 0) {
      return 0;
    }
    return Math.round((budget.Tracked / budget.Planned) * 100);
  }

  getBudgetStatus(budget: iBudget): BudgetStatus {
    if (this.percentComplete(budget) <= 80) {
      return BudgetStatus.OnTrack;
    } else if (this.percentComplete(budget) > 80 && this.percentComplete(budget) <= 100) {
      return BudgetStatus.AtRisk;
    } else {
      return BudgetStatus.Over;
    }
  }

  ngOnInit(): void {
    this.sevenPaceService.getBudgets().subscribe(budgets => {
      this.budgets = budgets.value || [];
      this.loading = false;
    });
  }

  hoursConversor(value: number): number {
    return Math.round(value / 3600);
  }

  leftHours(budget: iBudget): number {
    return this.hoursConversor(budget.Planned - budget.Tracked);
  }

  get filteredBudgets(): iBudget[] {
    return this.budgets.filter(budget => {
      const status = this.getBudgetStatus(budget);
      return this.selectedStatuses.includes(status);
    });
  }

  toggleStatusFilter(status: BudgetStatus): void {
    const index = this.selectedStatuses.indexOf(status);
    if (index > -1) {
      this.selectedStatuses.splice(index, 1);
    } else {
      this.selectedStatuses.push(status);
    }
  }

  isStatusSelected(status: BudgetStatus): boolean {
    return this.selectedStatuses.includes(status);
  }
}
