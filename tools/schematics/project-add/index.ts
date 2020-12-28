import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: any): Rule {
  return chain([
    externalSchematic('@nrwl/angular', 'application', {
      name: schema.name,
      style: 'scss',
      routing: true,
    }),
    externalSchematic('@nrwl/nest', 'application', {
      name: schema.name + '-node',
    }),
  ]);
}
