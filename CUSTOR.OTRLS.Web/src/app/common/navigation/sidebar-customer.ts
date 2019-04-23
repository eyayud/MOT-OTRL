import {RouteInfo} from './route-interface';

export const CUSTOMER_ROUTES: RouteInfo[] =
  [{
    path: 'main/customer/dashboard',
    title: 'mainMenu.Home',
    type: 'link',
    iconType: 'dashboard'
  },
    {
      path: 'main/customer/profile',
      title: 'mainMenu.BusinessProfile',
      type: 'dropDown',
      iconType: 'people',
      children: [{
        path: 'main/customer/profile',
        title: 'mainMenu.InvestorProfile',
        type: 'link',
        iconType: 'account_circle',
      }, {
        path: '/main/customer/manager-list',
        title: 'mainMenu.associate',
        type: 'link',
        iconType: 'people',
      },
        {
          path: '/main/customer/manager-list',
          title: 'mainMenu.Services',
          type: 'link',
          iconType: 'view_list',
        }]

    }, {
    path: '/about',
    title: 'mainMenu.About',
    type: 'link',
    iconType: 'info'
  }
  ];
