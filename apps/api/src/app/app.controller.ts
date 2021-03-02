import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Public } from '@mfe/api/share/keycloak-app';
import { of } from 'rxjs';
import { Contract } from '@mfe/system-platform/contract/domain';
import { Menu } from '@mfe/web/share/menu/domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @Public()
  getData(): any {
    return this.appService.getData();
  }

  @Get('menu')
  @Public()
  getMenus() {
    const menus: Menu[] = [
      {
        id: '$^QvGZMTViZuQ%3D$^',
        name: '系统管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '系统管理',
        system: 'system-platform-web',
        orderNum: 1,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-05-13',
        createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
        createdByName: '系统管理员',
        modifiedAt: null,
        modifiedBy: '52dc5b9b-b1f1-4c40-ad40-e4f9cc4a2767',
        modifiedByName: '测试CY',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^88NOcn4sXos%3D$^',
            name: '应用管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/application',
            descMenu: '应用管理',
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^jKv4%2BJjHZ6o%3D$^',
            name: '菜单管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/menus',
            descMenu: '菜单管理',
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^9NV0SMCu%2BP8%3D$^',
            name: '角色管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/roles',
            descMenu: '角色管理',
            system: 'system-platform-web',
            orderNum: 3,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^mCNz9NJAbjQ%3D$^',
            name: '用户管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/user',
            descMenu: '用户管理',
            system: 'system-platform-web',
            orderNum: 4,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^Yj3hK9FYhgs%3D$^',
            name: '用户组管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/group',
            descMenu: '用户组管理',
            system: 'system-platform-web',
            orderNum: 7,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-13',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^5a2yh%2Fv%2BA24%3D$^',
            name: '字典管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/dict',
            descMenu: '字典管理',
            system: 'system-platform-web',
            orderNum: 8,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-13',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^zDHoRlnQtzc%3D$^',
            name: '参数配置管理',
            icon: null,
            parentId: '$^QvGZMTViZuQ%3D$^',
            forwardUrl: '/params-manage',
            descMenu: '参数配置管理',
            system: 'system-platform-web',
            orderNum: 9,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^Am1uQc55Udk%3D$^',
        name: '新闻管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: null,
        system: 'system-platform-web',
        orderNum: 2,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-08-29',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 上海妆佳电子商务有限公司',
        modifiedAt: null,
        modifiedBy: null,
        modifiedByName: null,
        hierarchy: 1,
        subMenus: [
          {
            id: '$^e6PQl8lfXY4%3D$^',
            name: '新闻列表',
            icon: null,
            parentId: '$^Am1uQc55Udk%3D$^',
            forwardUrl: '/news',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-29',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^EZuGAjWpkfA%3D$^',
        name: '配置管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '合同管理',
        system: 'system-platform-web',
        orderNum: 3,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-15',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^deFPVh84VVg%3D$^',
            name: '设置合同模板',
            icon: null,
            parentId: '$^EZuGAjWpkfA%3D$^',
            forwardUrl: 'contractTemplate',
            descMenu: '设置合同模板',
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-15',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^NFy6Lfy4DWg%3D$^',
            name: '机构合作协议模版配置',
            icon: null,
            parentId: '$^EZuGAjWpkfA%3D$^',
            forwardUrl: '/cooperationagreement',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^A1hoEUQuD08%3D$^',
            name: '机构合同模板配置',
            icon: null,
            parentId: '$^EZuGAjWpkfA%3D$^',
            forwardUrl: '/organ-contractTemplate',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-25',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^e6Iyw%2BrWMVI%3D$^',
            name: '资金方参数配置',
            icon: null,
            parentId: '$^EZuGAjWpkfA%3D$^',
            forwardUrl: '/financeing-rate',
            descMenu: '设置融资率、融资利率等',
            system: 'system-platform-web',
            orderNum: 3,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^ZxF5ETrZqhE%3D$^',
        name: '机构管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '机构管理',
        system: 'system-platform-web',
        orderNum: 4,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-05-12',
        createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
        createdByName: '系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^Y4%2F1ACTdVls%3D$^',
            name: '平台方管理',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/corps/platform-side',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-15',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^dSNuE%2BAPMNg%3D$^',
            name: '资金方管理',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/corps/money-side',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-05',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^pPBbU84W8wA%3D$^',
            name: '第三方管理',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/corps/third-side',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 3,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-05',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^nhQVPTiBeIE%3D$^',
            name: '非粮信债务人管理',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/corps/nonGrainCreditDebtor',
            descMenu: '非粮信债务人管理',
            system: 'system-platform-web',
            orderNum: 5,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-24',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^4%2FHZvb5Y31Y%3D$^',
            name: '企业管理',
            icon: '',
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/access',
            descMenu: '企业管理',
            system: 'system-platform-web',
            orderNum: 5,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^wdMyGB3Z5rM%3D$^',
            name: '机构用户',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/user',
            descMenu: '机构用户',
            system: 'system-platform-web',
            orderNum: 6,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-05-12',
            createdBy: 'e5b7dfd9-878b-4b37-8027-b208c9c59763',
            createdByName: '系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^2YoP3KHAss8%3D$^',
            name: 'CFCA信息',
            icon: null,
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/cfca',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 7,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-15',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^4897utiNwYI%3D$^',
            name: '财务管理',
            icon: '',
            parentId: '$^ZxF5ETrZqhE%3D$^',
            forwardUrl: '/finance-bank',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 8,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-07-12',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^XQLv3Z9igi4%3D$^',
        name: '业务单据管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '业务单据查询',
        system: 'system-platform-web',
        orderNum: 6,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-21',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^zEbpZtESAdo%3D$^',
            name: '融资授信管理',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: '/financing-credit-management',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^uZ1n2qYcRgM%3D$^',
            name: '粮信列表',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: 'credible',
            descMenu: '粮信列表',
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^zGi4CuUKO9g%3D$^',
            name: '融资列表',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: 'negotiable',
            descMenu: '融资列表',
            system: 'system-platform-web',
            orderNum: 3,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^kwauRZI3u2M%3D$^',
            name: '发票列表',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: 'invoice',
            descMenu: '发票列表',
            system: 'system-platform-web',
            orderNum: 4,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^6q0eSVpSxzo%3D$^',
            name: '验真失败发票列表',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: 'invoice/loser',
            descMenu: '查验异常发票列表',
            system: 'system-platform-web',
            orderNum: 5,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^Zm2SGC2L%2BbE%3D$^',
            name: '基础合同列表',
            icon: null,
            parentId: '$^XQLv3Z9igi4%3D$^',
            forwardUrl: 'contract',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 6,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^4IjuT94Nt%2Fc%3D$^',
        name: '清算管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '清算管理',
        system: 'system-platform-web',
        orderNum: 6,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-21',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 系统管理员',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^bZaUJMpwZtw%3D$^',
            name: '清分清单列表',
            icon: null,
            parentId: '$^4IjuT94Nt%2Fc%3D$^',
            forwardUrl: '/settlement',
            descMenu: '清分清单列表',
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^7mbxef%2Fy04Y%3D$^',
            name: '逾期清分清单列表',
            icon: null,
            parentId: '$^4IjuT94Nt%2Fc%3D$^',
            forwardUrl: '/settlement/overdue-list',
            descMenu: '逾期清分清单列表',
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^kXFUNvICRsk%3D$^',
        name: '资金分簿管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '资金分簿管理',
        system: 'system-platform-web',
        orderNum: 8,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-21',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 系统管理员',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^6vvI2bLZNhs%3D$^',
            name: '资金分簿参数设置',
            icon: null,
            parentId: '$^kXFUNvICRsk%3D$^',
            forwardUrl: '/capital-manage-list',
            descMenu: '资金分簿参数设置',
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^T%2BIfEThCbes%3D$^',
            name: '会员注册',
            icon: null,
            parentId: '$^kXFUNvICRsk%3D$^',
            forwardUrl: '/capital',
            descMenu: '会员注册',
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^LlAh6iUl8vM%3D$^',
            name: '会员注销',
            icon: null,
            parentId: '$^kXFUNvICRsk%3D$^',
            forwardUrl: '/capital-cancellation',
            descMenu: '会员注销',
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^gL7JqtukbS4%3D$^',
        name: '资金分簿交易管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '资金分簿交易管理',
        system: 'system-platform-web',
        orderNum: 10,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-21',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 系统管理员',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^jgsp%2B4r1kjs%3D$^',
            name: '平台出金',
            icon: null,
            parentId: '$^gL7JqtukbS4%3D$^',
            forwardUrl: '/platform-gold',
            descMenu: '平台出金',
            system: 'system-platform-web',
            orderNum: 1,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^J1G%2F3Bg6Tac%3D$^',
            name: '平台转账',
            icon: null,
            parentId: '$^gL7JqtukbS4%3D$^',
            forwardUrl: '/platform-transfer',
            descMenu: '平台转账',
            system: 'system-platform-web',
            orderNum: 2,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-21',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^bp0szo20u3w%3D$^',
            name: '资金分簿余额查询',
            icon: null,
            parentId: '$^gL7JqtukbS4%3D$^',
            forwardUrl: '/capital-search',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 3,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
          {
            id: '$^l2pGRE6Vq58%3D$^',
            name: '资金分簿交易明细查询',
            icon: null,
            parentId: '$^gL7JqtukbS4%3D$^',
            forwardUrl: '/capital-detail',
            descMenu: '资金分簿交易明细查询',
            system: 'system-platform-web',
            orderNum: 4,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-08-27',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^kPpkYKcbdFE%3D$^',
        name: '意见反馈',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: null,
        system: 'system-platform-web',
        orderNum: 11,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-11-03',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 上海妆佳电子商务有限公司',
        modifiedAt: null,
        modifiedBy: null,
        modifiedByName: null,
        hierarchy: 1,
        subMenus: [
          {
            id: '$^GKLDZnsQ%2BOI%3D$^',
            name: '意见反馈列表',
            icon: null,
            parentId: '$^kPpkYKcbdFE%3D$^',
            forwardUrl: '/feedback',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-11-03',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 上海妆佳电子商务有限公司',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
      {
        id: '$^nWZa%2Fo%2FDS5M%3D$^',
        name: '日志管理',
        icon: null,
        parentId: null,
        forwardUrl: null,
        descMenu: '日志管理',
        system: 'system-platform-web',
        orderNum: 12,
        remark: null,
        del: false,
        tenantId: null,
        createdAt: '2020-06-15',
        createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        createdByName: '系统管理员 系统管理员',
        modifiedAt: null,
        modifiedBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
        modifiedByName: '系统管理员 上海妆佳电子商务有限公司',
        hierarchy: 1,
        subMenus: [
          {
            id: '$^mG1iE4onF%2FE%3D$^',
            name: '日志列表',
            icon: null,
            parentId: '$^nWZa%2Fo%2FDS5M%3D$^',
            forwardUrl: 'activeLog',
            descMenu: null,
            system: 'system-platform-web',
            orderNum: 0,
            remark: null,
            del: false,
            tenantId: null,
            createdAt: '2020-06-15',
            createdBy: '82bedacc-2ddd-4a61-814d-05dbb0fab421',
            createdByName: '系统管理员 系统管理员',
            modifiedAt: null,
            modifiedBy: null,
            modifiedByName: null,
            hierarchy: 1,
            subMenus: null,
          },
        ],
      },
    ];
    return of(menus);
  }

  @Get('contract')
  @Public()
  getContract() {
    const contracts: Contract[] = [
      {
        id: '$^Nqa45D7oxDc%3D$^',
        partyAoid: null,
        partyAname: null,
        partyBoid: null,
        partyBname: null,
        contractNo: 'string',
        contractName: 'string',
        signDate: new Date('2020-05-27T03:40:06'),
        expireDate: new Date('2020-05-27T03:40:06'),
        contractAmt: null,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^bx9UJae%2BBkI%3D$^',
        partyAoid: '88F521E880794F6386E815D2A54152AA',
        partyAname: '中国华粮物流集团富锦粮库有限公司',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102260001',
        contractName: '33',
        signDate: new Date('2021-02-26T00:00:00'),
        expireDate: new Date('2021-03-14T00:00:00'),
        contractAmt: 44,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^2Zl8NlGdx%2BM%3D$^',
        partyAoid: '88F521E880794F6386E815D2A54152AA',
        partyAname: '中国华粮物流集团富锦粮库有限公司',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102250001',
        contractName: '基础合同',
        signDate: new Date('2021-02-25T00:00:00'),
        expireDate: new Date('2021-03-14T00:00:00'),
        contractAmt: 33,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^v68J2%2FrtkKs%3D$^',
        partyAoid: '88F521E880794F6386E815D2A54152AA',
        partyAname: '中国华粮物流集团富锦粮库有限公司',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102240001',
        contractName: '基础合同',
        signDate: new Date('2021-02-24T00:00:00'),
        expireDate: new Date('2021-03-07T00:00:00'),
        contractAmt: 33,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^TSXjG7UGTes%3D$^',
        partyAoid: '628361EE8F57493687E7E83709CCC968',
        partyAname: '非粮信债务人0802',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102230005',
        contractName: '77',
        signDate: new Date('2021-02-23T00:00:00'),
        expireDate: new Date('2021-02-24T00:00:00'),
        contractAmt: 33,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^39ckzTl%2FEDI%3D$^',
        partyAoid: '8A9645BE3F1140BA8C122F5EE9C87296',
        partyAname: '核心企业01-子公司1',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102230004',
        contractName: '77',
        signDate: new Date('2021-02-23T00:00:00'),
        expireDate: new Date('2021-02-25T00:00:00'),
        contractAmt: 666,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^vyYKUugkPUA%3D$^',
        partyAoid: '0DB9DDDC64A544DF9DE411D2ADD01E3D',
        partyAname: '喝围尼骗魏输甸产移氯',
        partyBoid: 'BE592C0CEA0A499EBABC6543895E284D',
        partyBname: '喝带跪蒂（缠武）鳙跪波酵魏输移氯',
        contractNo: 'HT202102230003',
        contractName: '粮信合同1',
        signDate: new Date('2021-02-23T00:00:00'),
        expireDate: new Date('2022-02-23T00:00:00'),
        contractAmt: 100000,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^Q%2F7VXYd8M4s%3D$^',
        partyAoid: '628361EE8F57493687E7E83709CCC968',
        partyAname: '非粮信债务人0802',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102230002',
        contractName: '77',
        signDate: new Date('2021-02-23T00:00:00'),
        expireDate: new Date('2021-02-26T00:00:00'),
        contractAmt: 33,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^UyAKGPSV%2Fjs%3D$^',
        partyAoid: '88F521E880794F6386E815D2A54152AA',
        partyAname: '中国华粮物流集团富锦粮库有限公司',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102230001',
        contractName: '基础合同',
        signDate: new Date('2021-02-23T00:00:00'),
        expireDate: new Date('2021-03-14T00:00:00'),
        contractAmt: 33,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
      {
        id: '$^5SjIgvs5SOc%3D$^',
        partyAoid: 'E1393411EE954230AD6B3B732D315212',
        partyAname: '中粮资本（天津）商业保理有限公司',
        partyBoid: null,
        partyBname: null,
        contractNo: 'HT202102220013',
        contractName: '保理合同',
        signDate: new Date('2021-02-22T00:00:00'),
        expireDate: new Date('2021-03-14T00:00:00'),
        contractAmt: 555,
        receivcode: null,
        invoicecode: null,
        creditcode: null,
      },
    ];
    return of(contracts);
  }
}
