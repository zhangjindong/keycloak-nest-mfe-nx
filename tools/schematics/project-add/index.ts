import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  let schematics = [];
  if (schema.type.toLocaleLowerCase() == 'angular') {
    // ng generate @datorama/akita:feature --name=dept --project=system --dirName=domain/dept --no-interactive --dry-run <
    // ng generate @nrwl/angular:library --name=user --directory=system-platform --no-interactive --dry-run

    if (schema.feature.toLocaleLowerCase() == 'domain') {
      if(!!schema.feature && !!schema.name && !!schema.path)schematics.push(
        externalSchematic('@nrwl/angular', 'library', {
          name: 'domain',
          directory: schema.path + '/' + schema.name,
          style: 'scss',
          routing: true,
          noInteractive: true,
        })
      );
      if(!!schema.feature && !!schema.name && !!schema.path) schematics.push(
        externalSchematic('@datorama/akita', 'feature', {
          name: schema.name,
          dirName: 'state'   ,
          project:
            schema.path.replace(/\//g, '-') + '-' + schema.name + '-domain',
          noInteractive: true,
        })
      );
    }else if (schema.feature.toLocaleLowerCase() != 'domain') {
     if(!!schema.feature && !!schema.name && !!schema.path) schematics.push(
        externalSchematic('@nrwl/angular', 'library', {
          name: 'feature-' + schema.feature,
          directory: schema.path + '/' + schema.name,
          style: 'scss',
          routing: true,
          noInteractive: true,
        })
      );
    }
  }
  if (schema.type.toLocaleLowerCase() == 'api') {
    if(!!schema.name) schematics.push(
      externalSchematic('@nrwl/nest', 'application', {
        name: schema.name + '-node',
      })
    );
  }
  return chain(schematics);
}
