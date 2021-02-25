ng generate @datorama/akita:store --name=dept --no-interactive --dry-run <
ng generate @datorama/akita:feature --name=dept --project=system --dirName=domain/dept --no-interactive --dry-run <


前提条件:
本地 redis  127.0.0.1:6379
keycloak cofco

nx workspace-schematic project-add --path=system --name=dept --feature=domain --type=angular --no-interactive 