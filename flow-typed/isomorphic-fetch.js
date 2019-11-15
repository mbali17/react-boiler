// @flow strict-local
// npm definition of isomorphic-fetch doesn't capture the either/or type of the json method
// E.g., if call succeeded, json yields Promise<T>, if failed, Promise<Error>

declare module 'isomorphic-fetch' {
  declare type BaseFetchError = {| message: string |};
  declare export type FetchErrorVariant = BaseFetchError | {| error: BaseFetchError |};
  declare export type FetchError = { ok: false, status: number, json: () => Promise<FetchErrorVariant> };
  declare export type FetchSuccess = { ok: true, status: number, json<T>(): Promise<T> };
  declare export type FetchResponse = FetchSuccess | FetchError;
  declare module.exports: (input: string | Request | URL, init?: RequestOptions) => Promise<FetchResponse>;
}
