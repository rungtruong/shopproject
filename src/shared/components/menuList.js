import {ROUTE, PERMISSION} from "../../utils/systemconst";

let MENU = [
    {
        name: "Dashboard",
        url: ROUTE.DASHBOARD,
        isGroup: false,
        childs: [],
        icon: "fa-tachometer-alt",
        flag: PERMISSION.DASHBOARD_VIEW
    },
    {
        name: "Shop",
        url: "shop",
        isGroup: false,
        childs: [],
        icon: "fa-store",
        flag: PERMISSION.DASHBOARD_VIEW
    },
    {
        name: "QLSV",
        url: "qlsv",
        isGroup: false,
        childs: [],
        icon: "fa-user-friends",
        flag: PERMISSION.DASHBOARD_VIEW
    },
    {
        name: "User",
        url: "user",
        isGroup: true,
        childs: [
            {
                name: "System Users",
                icon: "fa fa-user-circle",
                url: "shop",
                flag: ""
            },
            {
                name: "Store Owner Users",
                icon: "fa fa-user-circle",
                url: "a",
                flag: ""
            },
            {
                name: "School Admin Users",
                icon: "fa fa-user-circle",
                url: "a",
                flag: ""
            }
        ],
        icon: "fa-users",
        flag: PERMISSION.DASHBOARD_VIEW
    }
];

export default MENU;