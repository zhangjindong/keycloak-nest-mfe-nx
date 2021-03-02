ng generate @datorama/akita:store --name=dept --no-interactive --dry-run <
ng generate @datorama/akita:feature --name=dept --project=system --dirName=domain/dept --no-interactive --dry-run <


前提条件:
本地 redis  127.0.0.1:6379
keycloak cofco
创建领域功能
nx workspace-schematic project-add --path=web/share --name=menu --feature=domain --type=angular --dry-run
nx workspace-schematic project-add --path=web/share --name=menu --feature=domain --type=angular --no-interactive --dry-run
创建组件
nx generate @schematics/angular:component --name=menu-sider --project=web-share-menu-feature-menu-sider --no-interactive