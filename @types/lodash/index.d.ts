// Lodash has its own community types.
// They can be installed with `npm install @types/lodash --save-dev`.
declare module "lodash" {
  export function random(
    lower: number,
    upper?: number,
    floating?: boolean
  ): number;
}
