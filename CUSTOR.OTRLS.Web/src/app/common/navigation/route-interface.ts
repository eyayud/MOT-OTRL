export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    iconType: string;
    collapse?: string;
    children?: RouteInfo[];
}


