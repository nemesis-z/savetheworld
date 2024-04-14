/* eslint-disable @typescript-eslint/no-explicit-any, no-var, @typescript-eslint/consistent-type-imports */

declare type ANY = any;

declare type Query = Partial<Record<string, string | string[]>>;

declare type Route = {
  path: string;
  name: string;
  query: Query;
  params: Record<string, string | undefined>;
};

interface ObjectConstructor {
  entries<T>(o: T): [keyof T, T[keyof T]][];
  keys<T extends object>(o: T): (keyof T)[];
}

interface Array<T> {
  includes(searchElement: ANY, fromIndex?: number): searchElement is T;
}
