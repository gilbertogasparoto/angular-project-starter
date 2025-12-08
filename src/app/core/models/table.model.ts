export type ColumnType = 'text' | 'date' | 'number' | 'currency' | 'boolean' | 'custom';

export interface iTableColumn {
    label?: string;
    field?: string;
    size?: string;
    align?: 'left' | 'center' | 'right';
    sortable?: boolean;
    type?: ColumnType;
    currency?: string;
    dateFormat?: string;
}