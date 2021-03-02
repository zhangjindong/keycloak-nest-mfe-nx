export interface Breadcrumb {
  label: string;
  url: string;
}

export function createBreadcrumb(params: Partial<Breadcrumb>) {
  return {} as Breadcrumb;
}
