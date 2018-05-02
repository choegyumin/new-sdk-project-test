///<reference path="../node_modules/@types/lodash/index.d.ts"/>

// Dictionary type
interface Dictionary<T> {
  [key: string]: T;
}

// Nilable type
type Nilable<T> = T | null | undefined;

// Global modules with @types
interface LoDashMixins {}
interface LoDashCustomStatic extends _.LoDashStatic, LoDashMixins {}
declare const _: LoDashCustomStatic;
