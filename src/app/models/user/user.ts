import { Profile } from './profile';
import { UserCurrency } from './user-currency';

export class User {
    id: number;
    username: string;
    profile: Profile;
    currencies: UserCurrency;
}