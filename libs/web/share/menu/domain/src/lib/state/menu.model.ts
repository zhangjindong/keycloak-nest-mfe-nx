export interface Menu {
  id: number | string;
  createdAt: string;
  createdBy: string;
  createdByName: string;
  del: boolean;
  system: string;
  descMenu: string;
  forwardUrl: string;
  hierarchy: number;
  icon: string;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByName: string;
  name: string;
  orderNum: number;
  parentId: number | string;
  remark: string;
  tenantId: number | string;
  subMenus: Menu[];
}

export function createMenu(params: Partial<Menu>) {
  return {} as Menu;
}
