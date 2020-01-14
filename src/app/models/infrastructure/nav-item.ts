export class NavItem {
    name: string;
    icon?: string;
    path?: string;
    visible: boolean;

    constructor(name: string, icon?: string, path?: string, visible?: boolean) {
        this.name = name;
        this.icon = icon;
        this.path = path;
        this.visible = visible !== undefined ? visible : true;
    }
}
