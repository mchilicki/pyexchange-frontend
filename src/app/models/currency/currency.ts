export class Currency {
    id: number;
    name: string;
    code: string;
    unit: number;
    // tslint:disable-next-line:variable-name
    sell_price?: number;
    // tslint:disable-next-line:variable-name
    purchase_price: number;
}
