export class PagedResult<T> {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
}
