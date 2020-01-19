import { Observable } from 'rxjs';

export class NavItem {
    name: string;
    icon?: string;
    path?: string;
    action?: () => void;
    visible?: boolean | Observable<boolean>;

    constructor({ name, icon, path, action, visible }: NavItem) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.action = action;
        this.visible = visible !== undefined ? visible : true;
    }
}
