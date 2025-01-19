
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model memberships
 * 
 */
export type memberships = $Result.DefaultSelection<Prisma.$membershipsPayload>
/**
 * Model workspaces
 * 
 */
export type workspaces = $Result.DefaultSelection<Prisma.$workspacesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberships`: Exposes CRUD operations for the **memberships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Memberships
    * const memberships = await prisma.memberships.findMany()
    * ```
    */
  get memberships(): Prisma.membershipsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaces`: Exposes CRUD operations for the **workspaces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspaces.findMany()
    * ```
    */
  get workspaces(): Prisma.workspacesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    memberships: 'memberships',
    workspaces: 'workspaces'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "memberships" | "workspaces"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      memberships: {
        payload: Prisma.$membershipsPayload<ExtArgs>
        fields: Prisma.membershipsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.membershipsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.membershipsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          findFirst: {
            args: Prisma.membershipsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.membershipsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          findMany: {
            args: Prisma.membershipsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>[]
          }
          create: {
            args: Prisma.membershipsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          createMany: {
            args: Prisma.membershipsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.membershipsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>[]
          }
          delete: {
            args: Prisma.membershipsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          update: {
            args: Prisma.membershipsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          deleteMany: {
            args: Prisma.membershipsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.membershipsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.membershipsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>[]
          }
          upsert: {
            args: Prisma.membershipsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$membershipsPayload>
          }
          aggregate: {
            args: Prisma.MembershipsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberships>
          }
          groupBy: {
            args: Prisma.membershipsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MembershipsGroupByOutputType>[]
          }
          count: {
            args: Prisma.membershipsCountArgs<ExtArgs>
            result: $Utils.Optional<MembershipsCountAggregateOutputType> | number
          }
        }
      }
      workspaces: {
        payload: Prisma.$workspacesPayload<ExtArgs>
        fields: Prisma.workspacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findFirst: {
            args: Prisma.workspacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findMany: {
            args: Prisma.workspacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          create: {
            args: Prisma.workspacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          createMany: {
            args: Prisma.workspacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          delete: {
            args: Prisma.workspacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          update: {
            args: Prisma.workspacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          deleteMany: {
            args: Prisma.workspacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          upsert: {
            args: Prisma.workspacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          aggregate: {
            args: Prisma.WorkspacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaces>
          }
          groupBy: {
            args: Prisma.workspacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    memberships?: membershipsOmit
    workspaces?: workspacesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    memberships: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | UsersCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipsWhereInput
  }


  /**
   * Count Type WorkspacesCountOutputType
   */

  export type WorkspacesCountOutputType = {
    memberships: number
  }

  export type WorkspacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | WorkspacesCountOutputTypeCountMembershipsArgs
  }

  // Custom InputTypes
  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspacesCountOutputType
     */
    select?: WorkspacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    password: string | null
    country: string | null
    stripeCustomerId: string | null
    hasVerifiedIdentity: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    username: string | null
    password: string | null
    country: string | null
    stripeCustomerId: string | null
    hasVerifiedIdentity: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    createdAt: number
    username: number
    password: number
    country: number
    stripeCustomerId: number
    hasVerifiedIdentity: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
    country?: true
    stripeCustomerId?: true
    hasVerifiedIdentity?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
    country?: true
    stripeCustomerId?: true
    hasVerifiedIdentity?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    createdAt?: true
    username?: true
    password?: true
    country?: true
    stripeCustomerId?: true
    hasVerifiedIdentity?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    createdAt: Date
    username: string
    password: string
    country: string
    stripeCustomerId: string | null
    hasVerifiedIdentity: boolean
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    country?: boolean
    stripeCustomerId?: boolean
    hasVerifiedIdentity?: boolean
    memberships?: boolean | users$membershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    country?: boolean
    stripeCustomerId?: boolean
    hasVerifiedIdentity?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    country?: boolean
    stripeCustomerId?: boolean
    hasVerifiedIdentity?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    username?: boolean
    password?: boolean
    country?: boolean
    stripeCustomerId?: boolean
    hasVerifiedIdentity?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "username" | "password" | "country" | "stripeCustomerId" | "hasVerifiedIdentity", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | users$membershipsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      memberships: Prisma.$membershipsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      username: string
      password: string
      country: string
      stripeCustomerId: string | null
      hasVerifiedIdentity: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends users$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, users$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly country: FieldRef<"users", 'String'>
    readonly stripeCustomerId: FieldRef<"users", 'String'>
    readonly hasVerifiedIdentity: FieldRef<"users", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }

  /**
   * users.memberships
   */
  export type users$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    where?: membershipsWhereInput
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    cursor?: membershipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model memberships
   */

  export type AggregateMemberships = {
    _count: MembershipsCountAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  export type MembershipsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    workspaceId: string | null
  }

  export type MembershipsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    workspaceId: string | null
  }

  export type MembershipsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    workspaceId: number
    _all: number
  }


  export type MembershipsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    workspaceId?: true
  }

  export type MembershipsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    workspaceId?: true
  }

  export type MembershipsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    workspaceId?: true
    _all?: true
  }

  export type MembershipsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memberships to aggregate.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned memberships
    **/
    _count?: true | MembershipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MembershipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MembershipsMaxAggregateInputType
  }

  export type GetMembershipsAggregateType<T extends MembershipsAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberships[P]>
      : GetScalarType<T[P], AggregateMemberships[P]>
  }




  export type membershipsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: membershipsWhereInput
    orderBy?: membershipsOrderByWithAggregationInput | membershipsOrderByWithAggregationInput[]
    by: MembershipsScalarFieldEnum[] | MembershipsScalarFieldEnum
    having?: membershipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MembershipsCountAggregateInputType | true
    _min?: MembershipsMinAggregateInputType
    _max?: MembershipsMaxAggregateInputType
  }

  export type MembershipsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    workspaceId: string | null
    _count: MembershipsCountAggregateOutputType | null
    _min: MembershipsMinAggregateOutputType | null
    _max: MembershipsMaxAggregateOutputType | null
  }

  type GetMembershipsGroupByPayload<T extends membershipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MembershipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MembershipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
            : GetScalarType<T[P], MembershipsGroupByOutputType[P]>
        }
      >
    >


  export type membershipsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    workspaceId?: boolean
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type membershipsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    workspaceId?: boolean
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type membershipsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    workspaceId?: boolean
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }, ExtArgs["result"]["memberships"]>

  export type membershipsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    workspaceId?: boolean
  }

  export type membershipsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "workspaceId", ExtArgs["result"]["memberships"]>
  export type membershipsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }
  export type membershipsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }
  export type membershipsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | memberships$userArgs<ExtArgs>
    workspace?: boolean | memberships$workspaceArgs<ExtArgs>
  }

  export type $membershipsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "memberships"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
      workspace: Prisma.$workspacesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
      workspaceId: string | null
    }, ExtArgs["result"]["memberships"]>
    composites: {}
  }

  type membershipsGetPayload<S extends boolean | null | undefined | membershipsDefaultArgs> = $Result.GetResult<Prisma.$membershipsPayload, S>

  type membershipsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<membershipsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MembershipsCountAggregateInputType | true
    }

  export interface membershipsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['memberships'], meta: { name: 'memberships' } }
    /**
     * Find zero or one Memberships that matches the filter.
     * @param {membershipsFindUniqueArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends membershipsFindUniqueArgs>(args: SelectSubset<T, membershipsFindUniqueArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Memberships that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {membershipsFindUniqueOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends membershipsFindUniqueOrThrowArgs>(args: SelectSubset<T, membershipsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindFirstArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends membershipsFindFirstArgs>(args?: SelectSubset<T, membershipsFindFirstArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Memberships that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindFirstOrThrowArgs} args - Arguments to find a Memberships
     * @example
     * // Get one Memberships
     * const memberships = await prisma.memberships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends membershipsFindFirstOrThrowArgs>(args?: SelectSubset<T, membershipsFindFirstOrThrowArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Memberships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Memberships
     * const memberships = await prisma.memberships.findMany()
     * 
     * // Get first 10 Memberships
     * const memberships = await prisma.memberships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const membershipsWithIdOnly = await prisma.memberships.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends membershipsFindManyArgs>(args?: SelectSubset<T, membershipsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Memberships.
     * @param {membershipsCreateArgs} args - Arguments to create a Memberships.
     * @example
     * // Create one Memberships
     * const Memberships = await prisma.memberships.create({
     *   data: {
     *     // ... data to create a Memberships
     *   }
     * })
     * 
     */
    create<T extends membershipsCreateArgs>(args: SelectSubset<T, membershipsCreateArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Memberships.
     * @param {membershipsCreateManyArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const memberships = await prisma.memberships.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends membershipsCreateManyArgs>(args?: SelectSubset<T, membershipsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Memberships and returns the data saved in the database.
     * @param {membershipsCreateManyAndReturnArgs} args - Arguments to create many Memberships.
     * @example
     * // Create many Memberships
     * const memberships = await prisma.memberships.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Memberships and only return the `id`
     * const membershipsWithIdOnly = await prisma.memberships.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends membershipsCreateManyAndReturnArgs>(args?: SelectSubset<T, membershipsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Memberships.
     * @param {membershipsDeleteArgs} args - Arguments to delete one Memberships.
     * @example
     * // Delete one Memberships
     * const Memberships = await prisma.memberships.delete({
     *   where: {
     *     // ... filter to delete one Memberships
     *   }
     * })
     * 
     */
    delete<T extends membershipsDeleteArgs>(args: SelectSubset<T, membershipsDeleteArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Memberships.
     * @param {membershipsUpdateArgs} args - Arguments to update one Memberships.
     * @example
     * // Update one Memberships
     * const memberships = await prisma.memberships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends membershipsUpdateArgs>(args: SelectSubset<T, membershipsUpdateArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Memberships.
     * @param {membershipsDeleteManyArgs} args - Arguments to filter Memberships to delete.
     * @example
     * // Delete a few Memberships
     * const { count } = await prisma.memberships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends membershipsDeleteManyArgs>(args?: SelectSubset<T, membershipsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Memberships
     * const memberships = await prisma.memberships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends membershipsUpdateManyArgs>(args: SelectSubset<T, membershipsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Memberships and returns the data updated in the database.
     * @param {membershipsUpdateManyAndReturnArgs} args - Arguments to update many Memberships.
     * @example
     * // Update many Memberships
     * const memberships = await prisma.memberships.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Memberships and only return the `id`
     * const membershipsWithIdOnly = await prisma.memberships.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends membershipsUpdateManyAndReturnArgs>(args: SelectSubset<T, membershipsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Memberships.
     * @param {membershipsUpsertArgs} args - Arguments to update or create a Memberships.
     * @example
     * // Update or create a Memberships
     * const memberships = await prisma.memberships.upsert({
     *   create: {
     *     // ... data to create a Memberships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Memberships we want to update
     *   }
     * })
     */
    upsert<T extends membershipsUpsertArgs>(args: SelectSubset<T, membershipsUpsertArgs<ExtArgs>>): Prisma__membershipsClient<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsCountArgs} args - Arguments to filter Memberships to count.
     * @example
     * // Count the number of Memberships
     * const count = await prisma.memberships.count({
     *   where: {
     *     // ... the filter for the Memberships we want to count
     *   }
     * })
    **/
    count<T extends membershipsCountArgs>(
      args?: Subset<T, membershipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MembershipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MembershipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MembershipsAggregateArgs>(args: Subset<T, MembershipsAggregateArgs>): Prisma.PrismaPromise<GetMembershipsAggregateType<T>>

    /**
     * Group by Memberships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {membershipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends membershipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: membershipsGroupByArgs['orderBy'] }
        : { orderBy?: membershipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, membershipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the memberships model
   */
  readonly fields: membershipsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for memberships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__membershipsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends memberships$userArgs<ExtArgs> = {}>(args?: Subset<T, memberships$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    workspace<T extends memberships$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, memberships$workspaceArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the memberships model
   */ 
  interface membershipsFieldRefs {
    readonly id: FieldRef<"memberships", 'String'>
    readonly createdAt: FieldRef<"memberships", 'DateTime'>
    readonly updatedAt: FieldRef<"memberships", 'DateTime'>
    readonly userId: FieldRef<"memberships", 'String'>
    readonly workspaceId: FieldRef<"memberships", 'String'>
  }
    

  // Custom InputTypes
  /**
   * memberships findUnique
   */
  export type membershipsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships findUniqueOrThrow
   */
  export type membershipsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships findFirst
   */
  export type membershipsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships findFirstOrThrow
   */
  export type membershipsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of memberships.
     */
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships findMany
   */
  export type membershipsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter, which memberships to fetch.
     */
    where?: membershipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of memberships to fetch.
     */
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing memberships.
     */
    cursor?: membershipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` memberships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` memberships.
     */
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * memberships create
   */
  export type membershipsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The data needed to create a memberships.
     */
    data?: XOR<membershipsCreateInput, membershipsUncheckedCreateInput>
  }

  /**
   * memberships createMany
   */
  export type membershipsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many memberships.
     */
    data: membershipsCreateManyInput | membershipsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * memberships createManyAndReturn
   */
  export type membershipsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * The data used to create many memberships.
     */
    data: membershipsCreateManyInput | membershipsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * memberships update
   */
  export type membershipsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The data needed to update a memberships.
     */
    data: XOR<membershipsUpdateInput, membershipsUncheckedUpdateInput>
    /**
     * Choose, which memberships to update.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships updateMany
   */
  export type membershipsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update memberships.
     */
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyInput>
    /**
     * Filter which memberships to update
     */
    where?: membershipsWhereInput
  }

  /**
   * memberships updateManyAndReturn
   */
  export type membershipsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * The data used to update memberships.
     */
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyInput>
    /**
     * Filter which memberships to update
     */
    where?: membershipsWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * memberships upsert
   */
  export type membershipsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * The filter to search for the memberships to update in case it exists.
     */
    where: membershipsWhereUniqueInput
    /**
     * In case the memberships found by the `where` argument doesn't exist, create a new memberships with this data.
     */
    create: XOR<membershipsCreateInput, membershipsUncheckedCreateInput>
    /**
     * In case the memberships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<membershipsUpdateInput, membershipsUncheckedUpdateInput>
  }

  /**
   * memberships delete
   */
  export type membershipsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    /**
     * Filter which memberships to delete.
     */
    where: membershipsWhereUniqueInput
  }

  /**
   * memberships deleteMany
   */
  export type membershipsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which memberships to delete
     */
    where?: membershipsWhereInput
  }

  /**
   * memberships.user
   */
  export type memberships$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * memberships.workspace
   */
  export type memberships$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
  }

  /**
   * memberships without action
   */
  export type membershipsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
  }


  /**
   * Model workspaces
   */

  export type AggregateWorkspaces = {
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  export type WorkspacesMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subdomain: string | null
    reference: string | null
  }

  export type WorkspacesMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    subdomain: string | null
    reference: string | null
  }

  export type WorkspacesCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    subdomain: number
    reference: number
    _all: number
  }


  export type WorkspacesMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    reference?: true
  }

  export type WorkspacesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    reference?: true
  }

  export type WorkspacesCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    subdomain?: true
    reference?: true
    _all?: true
  }

  export type WorkspacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to aggregate.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacesMaxAggregateInputType
  }

  export type GetWorkspacesAggregateType<T extends WorkspacesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaces[P]>
      : GetScalarType<T[P], AggregateWorkspaces[P]>
  }




  export type workspacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithAggregationInput | workspacesOrderByWithAggregationInput[]
    by: WorkspacesScalarFieldEnum[] | WorkspacesScalarFieldEnum
    having?: workspacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacesCountAggregateInputType | true
    _min?: WorkspacesMinAggregateInputType
    _max?: WorkspacesMaxAggregateInputType
  }

  export type WorkspacesGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    subdomain: string
    reference: string
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  type GetWorkspacesGroupByPayload<T extends workspacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
        }
      >
    >


  export type workspacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    reference?: boolean
    memberships?: boolean | workspaces$membershipsArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    reference?: boolean
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    reference?: boolean
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subdomain?: boolean
    reference?: boolean
  }

  export type workspacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "subdomain" | "reference", ExtArgs["result"]["workspaces"]>
  export type workspacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    memberships?: boolean | workspaces$membershipsArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workspacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type workspacesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workspacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspaces"
    objects: {
      memberships: Prisma.$membershipsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      subdomain: string
      reference: string
    }, ExtArgs["result"]["workspaces"]>
    composites: {}
  }

  type workspacesGetPayload<S extends boolean | null | undefined | workspacesDefaultArgs> = $Result.GetResult<Prisma.$workspacesPayload, S>

  type workspacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacesCountAggregateInputType | true
    }

  export interface workspacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspaces'], meta: { name: 'workspaces' } }
    /**
     * Find zero or one Workspaces that matches the filter.
     * @param {workspacesFindUniqueArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacesFindUniqueArgs>(args: SelectSubset<T, workspacesFindUniqueArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Workspaces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacesFindUniqueOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacesFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacesFindFirstArgs>(args?: SelectSubset<T, workspacesFindFirstArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Workspaces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacesFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspaces.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspaces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspacesFindManyArgs>(args?: SelectSubset<T, workspacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Workspaces.
     * @param {workspacesCreateArgs} args - Arguments to create a Workspaces.
     * @example
     * // Create one Workspaces
     * const Workspaces = await prisma.workspaces.create({
     *   data: {
     *     // ... data to create a Workspaces
     *   }
     * })
     * 
     */
    create<T extends workspacesCreateArgs>(args: SelectSubset<T, workspacesCreateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Workspaces.
     * @param {workspacesCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacesCreateManyArgs>(args?: SelectSubset<T, workspacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {workspacesCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacesCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Workspaces.
     * @param {workspacesDeleteArgs} args - Arguments to delete one Workspaces.
     * @example
     * // Delete one Workspaces
     * const Workspaces = await prisma.workspaces.delete({
     *   where: {
     *     // ... filter to delete one Workspaces
     *   }
     * })
     * 
     */
    delete<T extends workspacesDeleteArgs>(args: SelectSubset<T, workspacesDeleteArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Workspaces.
     * @param {workspacesUpdateArgs} args - Arguments to update one Workspaces.
     * @example
     * // Update one Workspaces
     * const workspaces = await prisma.workspaces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacesUpdateArgs>(args: SelectSubset<T, workspacesUpdateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {workspacesDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspaces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacesDeleteManyArgs>(args?: SelectSubset<T, workspacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacesUpdateManyArgs>(args: SelectSubset<T, workspacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {workspacesUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspacesUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Workspaces.
     * @param {workspacesUpsertArgs} args - Arguments to update or create a Workspaces.
     * @example
     * // Update or create a Workspaces
     * const workspaces = await prisma.workspaces.upsert({
     *   create: {
     *     // ... data to create a Workspaces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspaces we want to update
     *   }
     * })
     */
    upsert<T extends workspacesUpsertArgs>(args: SelectSubset<T, workspacesUpsertArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspaces.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspacesCountArgs>(
      args?: Subset<T, workspacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspacesAggregateArgs>(args: Subset<T, WorkspacesAggregateArgs>): Prisma.PrismaPromise<GetWorkspacesAggregateType<T>>

    /**
     * Group by Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workspacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacesGroupByArgs['orderBy'] }
        : { orderBy?: workspacesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workspacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspaces model
   */
  readonly fields: workspacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspaces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    memberships<T extends workspaces$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$membershipsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workspaces model
   */ 
  interface workspacesFieldRefs {
    readonly id: FieldRef<"workspaces", 'String'>
    readonly createdAt: FieldRef<"workspaces", 'DateTime'>
    readonly updatedAt: FieldRef<"workspaces", 'DateTime'>
    readonly subdomain: FieldRef<"workspaces", 'String'>
    readonly reference: FieldRef<"workspaces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * workspaces findUnique
   */
  export type workspacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findUniqueOrThrow
   */
  export type workspacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findFirst
   */
  export type workspacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findFirstOrThrow
   */
  export type workspacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findMany
   */
  export type workspacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces create
   */
  export type workspacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to create a workspaces.
     */
    data: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
  }

  /**
   * workspaces createMany
   */
  export type workspacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces createManyAndReturn
   */
  export type workspacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces update
   */
  export type workspacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to update a workspaces.
     */
    data: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
    /**
     * Choose, which workspaces to update.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces updateMany
   */
  export type workspacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
  }

  /**
   * workspaces updateManyAndReturn
   */
  export type workspacesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
  }

  /**
   * workspaces upsert
   */
  export type workspacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The filter to search for the workspaces to update in case it exists.
     */
    where: workspacesWhereUniqueInput
    /**
     * In case the workspaces found by the `where` argument doesn't exist, create a new workspaces with this data.
     */
    create: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
    /**
     * In case the workspaces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
  }

  /**
   * workspaces delete
   */
  export type workspacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter which workspaces to delete.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces deleteMany
   */
  export type workspacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspacesWhereInput
  }

  /**
   * workspaces.memberships
   */
  export type workspaces$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the memberships
     */
    select?: membershipsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the memberships
     */
    omit?: membershipsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: membershipsInclude<ExtArgs> | null
    where?: membershipsWhereInput
    orderBy?: membershipsOrderByWithRelationInput | membershipsOrderByWithRelationInput[]
    cursor?: membershipsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MembershipsScalarFieldEnum | MembershipsScalarFieldEnum[]
  }

  /**
   * workspaces without action
   */
  export type workspacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    username: 'username',
    password: 'password',
    country: 'country',
    stripeCustomerId: 'stripeCustomerId',
    hasVerifiedIdentity: 'hasVerifiedIdentity'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MembershipsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    workspaceId: 'workspaceId'
  };

  export type MembershipsScalarFieldEnum = (typeof MembershipsScalarFieldEnum)[keyof typeof MembershipsScalarFieldEnum]


  export const WorkspacesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    subdomain: 'subdomain',
    reference: 'reference'
  };

  export type WorkspacesScalarFieldEnum = (typeof WorkspacesScalarFieldEnum)[keyof typeof WorkspacesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    country?: StringFilter<"users"> | string
    stripeCustomerId?: StringNullableFilter<"users"> | string | null
    hasVerifiedIdentity?: BoolFilter<"users"> | boolean
    memberships?: MembershipsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    hasVerifiedIdentity?: SortOrder
    memberships?: membershipsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    createdAt?: DateTimeFilter<"users"> | Date | string
    password?: StringFilter<"users"> | string
    country?: StringFilter<"users"> | string
    stripeCustomerId?: StringNullableFilter<"users"> | string | null
    hasVerifiedIdentity?: BoolFilter<"users"> | boolean
    memberships?: MembershipsListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    hasVerifiedIdentity?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    country?: StringWithAggregatesFilter<"users"> | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"users"> | string | null
    hasVerifiedIdentity?: BoolWithAggregatesFilter<"users"> | boolean
  }

  export type membershipsWhereInput = {
    AND?: membershipsWhereInput | membershipsWhereInput[]
    OR?: membershipsWhereInput[]
    NOT?: membershipsWhereInput | membershipsWhereInput[]
    id?: UuidFilter<"memberships"> | string
    createdAt?: DateTimeFilter<"memberships"> | Date | string
    updatedAt?: DateTimeFilter<"memberships"> | Date | string
    userId?: UuidNullableFilter<"memberships"> | string | null
    workspaceId?: UuidNullableFilter<"memberships"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    workspace?: XOR<WorkspacesNullableScalarRelationFilter, workspacesWhereInput> | null
  }

  export type membershipsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    workspaceId?: SortOrderInput | SortOrder
    user?: usersOrderByWithRelationInput
    workspace?: workspacesOrderByWithRelationInput
  }

  export type membershipsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: membershipsWhereInput | membershipsWhereInput[]
    OR?: membershipsWhereInput[]
    NOT?: membershipsWhereInput | membershipsWhereInput[]
    createdAt?: DateTimeFilter<"memberships"> | Date | string
    updatedAt?: DateTimeFilter<"memberships"> | Date | string
    userId?: UuidNullableFilter<"memberships"> | string | null
    workspaceId?: UuidNullableFilter<"memberships"> | string | null
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    workspace?: XOR<WorkspacesNullableScalarRelationFilter, workspacesWhereInput> | null
  }, "id">

  export type membershipsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    workspaceId?: SortOrderInput | SortOrder
    _count?: membershipsCountOrderByAggregateInput
    _max?: membershipsMaxOrderByAggregateInput
    _min?: membershipsMinOrderByAggregateInput
  }

  export type membershipsScalarWhereWithAggregatesInput = {
    AND?: membershipsScalarWhereWithAggregatesInput | membershipsScalarWhereWithAggregatesInput[]
    OR?: membershipsScalarWhereWithAggregatesInput[]
    NOT?: membershipsScalarWhereWithAggregatesInput | membershipsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"memberships"> | string
    createdAt?: DateTimeWithAggregatesFilter<"memberships"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"memberships"> | Date | string
    userId?: UuidNullableWithAggregatesFilter<"memberships"> | string | null
    workspaceId?: UuidNullableWithAggregatesFilter<"memberships"> | string | null
  }

  export type workspacesWhereInput = {
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    createdAt?: DateTimeFilter<"workspaces"> | Date | string
    updatedAt?: DateTimeFilter<"workspaces"> | Date | string
    subdomain?: StringFilter<"workspaces"> | string
    reference?: StringFilter<"workspaces"> | string
    memberships?: MembershipsListRelationFilter
  }

  export type workspacesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    reference?: SortOrder
    memberships?: membershipsOrderByRelationAggregateInput
  }

  export type workspacesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    subdomain?: string
    reference?: string
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    createdAt?: DateTimeFilter<"workspaces"> | Date | string
    updatedAt?: DateTimeFilter<"workspaces"> | Date | string
    memberships?: MembershipsListRelationFilter
  }, "id" | "subdomain" | "reference">

  export type workspacesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    reference?: SortOrder
    _count?: workspacesCountOrderByAggregateInput
    _max?: workspacesMaxOrderByAggregateInput
    _min?: workspacesMinOrderByAggregateInput
  }

  export type workspacesScalarWhereWithAggregatesInput = {
    AND?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    OR?: workspacesScalarWhereWithAggregatesInput[]
    NOT?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workspaces"> | string
    createdAt?: DateTimeWithAggregatesFilter<"workspaces"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"workspaces"> | Date | string
    subdomain?: StringWithAggregatesFilter<"workspaces"> | string
    reference?: StringWithAggregatesFilter<"workspaces"> | string
  }

  export type usersCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    country?: string
    stripeCustomerId?: string | null
    hasVerifiedIdentity?: boolean
    memberships?: membershipsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    country?: string
    stripeCustomerId?: string | null
    hasVerifiedIdentity?: boolean
    memberships?: membershipsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
    memberships?: membershipsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
    memberships?: membershipsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    country?: string
    stripeCustomerId?: string | null
    hasVerifiedIdentity?: boolean
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
  }

  export type membershipsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: usersCreateNestedOneWithoutMembershipsInput
    workspace?: workspacesCreateNestedOneWithoutMembershipsInput
  }

  export type membershipsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    workspaceId?: string | null
  }

  export type membershipsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutMembershipsNestedInput
    workspace?: workspacesUpdateOneWithoutMembershipsNestedInput
  }

  export type membershipsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membershipsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    workspaceId?: string | null
  }

  export type membershipsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type membershipsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspacesCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    reference: string
    memberships?: membershipsCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    reference: string
    memberships?: membershipsUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    memberships?: membershipsUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    memberships?: membershipsUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    reference: string
  }

  export type workspacesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
  }

  export type workspacesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MembershipsListRelationFilter = {
    every?: membershipsWhereInput
    some?: membershipsWhereInput
    none?: membershipsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type membershipsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stripeCustomerId?: SortOrder
    hasVerifiedIdentity?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stripeCustomerId?: SortOrder
    hasVerifiedIdentity?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    username?: SortOrder
    password?: SortOrder
    country?: SortOrder
    stripeCustomerId?: SortOrder
    hasVerifiedIdentity?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type WorkspacesNullableScalarRelationFilter = {
    is?: workspacesWhereInput | null
    isNot?: workspacesWhereInput | null
  }

  export type membershipsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
  }

  export type membershipsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
  }

  export type membershipsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    workspaceId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type workspacesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    reference?: SortOrder
  }

  export type workspacesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    reference?: SortOrder
  }

  export type workspacesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subdomain?: SortOrder
    reference?: SortOrder
  }

  export type membershipsCreateNestedManyWithoutUserInput = {
    create?: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput> | membershipsCreateWithoutUserInput[] | membershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUserInput | membershipsCreateOrConnectWithoutUserInput[]
    createMany?: membershipsCreateManyUserInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type membershipsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput> | membershipsCreateWithoutUserInput[] | membershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUserInput | membershipsCreateOrConnectWithoutUserInput[]
    createMany?: membershipsCreateManyUserInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type membershipsUpdateManyWithoutUserNestedInput = {
    create?: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput> | membershipsCreateWithoutUserInput[] | membershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUserInput | membershipsCreateOrConnectWithoutUserInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutUserInput | membershipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: membershipsCreateManyUserInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutUserInput | membershipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutUserInput | membershipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type membershipsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput> | membershipsCreateWithoutUserInput[] | membershipsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutUserInput | membershipsCreateOrConnectWithoutUserInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutUserInput | membershipsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: membershipsCreateManyUserInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutUserInput | membershipsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutUserInput | membershipsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMembershipsInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<workspacesCreateWithoutMembershipsInput, workspacesUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutMembershipsInput
    connect?: workspacesWhereUniqueInput
  }

  export type usersUpdateOneWithoutMembershipsNestedInput = {
    create?: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: usersCreateOrConnectWithoutMembershipsInput
    upsert?: usersUpsertWithoutMembershipsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutMembershipsInput, usersUpdateWithoutMembershipsInput>, usersUncheckedUpdateWithoutMembershipsInput>
  }

  export type workspacesUpdateOneWithoutMembershipsNestedInput = {
    create?: XOR<workspacesCreateWithoutMembershipsInput, workspacesUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutMembershipsInput
    upsert?: workspacesUpsertWithoutMembershipsInput
    disconnect?: workspacesWhereInput | boolean
    delete?: workspacesWhereInput | boolean
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutMembershipsInput, workspacesUpdateWithoutMembershipsInput>, workspacesUncheckedUpdateWithoutMembershipsInput>
  }

  export type membershipsCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput> | membershipsCreateWithoutWorkspaceInput[] | membershipsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutWorkspaceInput | membershipsCreateOrConnectWithoutWorkspaceInput[]
    createMany?: membershipsCreateManyWorkspaceInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type membershipsUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput> | membershipsCreateWithoutWorkspaceInput[] | membershipsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutWorkspaceInput | membershipsCreateOrConnectWithoutWorkspaceInput[]
    createMany?: membershipsCreateManyWorkspaceInputEnvelope
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
  }

  export type membershipsUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput> | membershipsCreateWithoutWorkspaceInput[] | membershipsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutWorkspaceInput | membershipsCreateOrConnectWithoutWorkspaceInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutWorkspaceInput | membershipsUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: membershipsCreateManyWorkspaceInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutWorkspaceInput | membershipsUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutWorkspaceInput | membershipsUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type membershipsUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput> | membershipsCreateWithoutWorkspaceInput[] | membershipsUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: membershipsCreateOrConnectWithoutWorkspaceInput | membershipsCreateOrConnectWithoutWorkspaceInput[]
    upsert?: membershipsUpsertWithWhereUniqueWithoutWorkspaceInput | membershipsUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: membershipsCreateManyWorkspaceInputEnvelope
    set?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    disconnect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    delete?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    connect?: membershipsWhereUniqueInput | membershipsWhereUniqueInput[]
    update?: membershipsUpdateWithWhereUniqueWithoutWorkspaceInput | membershipsUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: membershipsUpdateManyWithWhereWithoutWorkspaceInput | membershipsUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type membershipsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace?: workspacesCreateNestedOneWithoutMembershipsInput
  }

  export type membershipsUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId?: string | null
  }

  export type membershipsCreateOrConnectWithoutUserInput = {
    where: membershipsWhereUniqueInput
    create: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput>
  }

  export type membershipsCreateManyUserInputEnvelope = {
    data: membershipsCreateManyUserInput | membershipsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type membershipsUpsertWithWhereUniqueWithoutUserInput = {
    where: membershipsWhereUniqueInput
    update: XOR<membershipsUpdateWithoutUserInput, membershipsUncheckedUpdateWithoutUserInput>
    create: XOR<membershipsCreateWithoutUserInput, membershipsUncheckedCreateWithoutUserInput>
  }

  export type membershipsUpdateWithWhereUniqueWithoutUserInput = {
    where: membershipsWhereUniqueInput
    data: XOR<membershipsUpdateWithoutUserInput, membershipsUncheckedUpdateWithoutUserInput>
  }

  export type membershipsUpdateManyWithWhereWithoutUserInput = {
    where: membershipsScalarWhereInput
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyWithoutUserInput>
  }

  export type membershipsScalarWhereInput = {
    AND?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
    OR?: membershipsScalarWhereInput[]
    NOT?: membershipsScalarWhereInput | membershipsScalarWhereInput[]
    id?: UuidFilter<"memberships"> | string
    createdAt?: DateTimeFilter<"memberships"> | Date | string
    updatedAt?: DateTimeFilter<"memberships"> | Date | string
    userId?: UuidNullableFilter<"memberships"> | string | null
    workspaceId?: UuidNullableFilter<"memberships"> | string | null
  }

  export type usersCreateWithoutMembershipsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    country?: string
    stripeCustomerId?: string | null
    hasVerifiedIdentity?: boolean
  }

  export type usersUncheckedCreateWithoutMembershipsInput = {
    id?: string
    createdAt?: Date | string
    username: string
    password: string
    country?: string
    stripeCustomerId?: string | null
    hasVerifiedIdentity?: boolean
  }

  export type usersCreateOrConnectWithoutMembershipsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
  }

  export type workspacesCreateWithoutMembershipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    reference: string
  }

  export type workspacesUncheckedCreateWithoutMembershipsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    subdomain: string
    reference: string
  }

  export type workspacesCreateOrConnectWithoutMembershipsInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutMembershipsInput, workspacesUncheckedCreateWithoutMembershipsInput>
  }

  export type usersUpsertWithoutMembershipsInput = {
    update: XOR<usersUpdateWithoutMembershipsInput, usersUncheckedUpdateWithoutMembershipsInput>
    create: XOR<usersCreateWithoutMembershipsInput, usersUncheckedCreateWithoutMembershipsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutMembershipsInput, usersUncheckedUpdateWithoutMembershipsInput>
  }

  export type usersUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    hasVerifiedIdentity?: BoolFieldUpdateOperationsInput | boolean
  }

  export type workspacesUpsertWithoutMembershipsInput = {
    update: XOR<workspacesUpdateWithoutMembershipsInput, workspacesUncheckedUpdateWithoutMembershipsInput>
    create: XOR<workspacesCreateWithoutMembershipsInput, workspacesUncheckedCreateWithoutMembershipsInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutMembershipsInput, workspacesUncheckedUpdateWithoutMembershipsInput>
  }

  export type workspacesUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
  }

  export type workspacesUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subdomain?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
  }

  export type membershipsCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: usersCreateNestedOneWithoutMembershipsInput
  }

  export type membershipsUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type membershipsCreateOrConnectWithoutWorkspaceInput = {
    where: membershipsWhereUniqueInput
    create: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput>
  }

  export type membershipsCreateManyWorkspaceInputEnvelope = {
    data: membershipsCreateManyWorkspaceInput | membershipsCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type membershipsUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: membershipsWhereUniqueInput
    update: XOR<membershipsUpdateWithoutWorkspaceInput, membershipsUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<membershipsCreateWithoutWorkspaceInput, membershipsUncheckedCreateWithoutWorkspaceInput>
  }

  export type membershipsUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: membershipsWhereUniqueInput
    data: XOR<membershipsUpdateWithoutWorkspaceInput, membershipsUncheckedUpdateWithoutWorkspaceInput>
  }

  export type membershipsUpdateManyWithWhereWithoutWorkspaceInput = {
    where: membershipsScalarWhereInput
    data: XOR<membershipsUpdateManyMutationInput, membershipsUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type membershipsCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId?: string | null
  }

  export type membershipsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: workspacesUpdateOneWithoutMembershipsNestedInput
  }

  export type membershipsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membershipsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membershipsCreateManyWorkspaceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type membershipsUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutMembershipsNestedInput
  }

  export type membershipsUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type membershipsUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}