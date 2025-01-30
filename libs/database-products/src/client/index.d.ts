
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Pricing
 * 
 */
export type Pricing = $Result.DefaultSelection<Prisma.$PricingPayload>
/**
 * Model PricingFee
 * 
 */
export type PricingFee = $Result.DefaultSelection<Prisma.$PricingFeePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const chargeType: {
  one_time: 'one_time',
  recurring: 'recurring'
};

export type chargeType = (typeof chargeType)[keyof typeof chargeType]


export const packageType: {
  flat: 'flat',
  package: 'package'
};

export type packageType = (typeof packageType)[keyof typeof packageType]

}

export type chargeType = $Enums.chargeType

export const chargeType: typeof $Enums.chargeType

export type packageType = $Enums.packageType

export const packageType: typeof $Enums.packageType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricing`: Exposes CRUD operations for the **Pricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pricings
    * const pricings = await prisma.pricing.findMany()
    * ```
    */
  get pricing(): Prisma.PricingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingFee`: Exposes CRUD operations for the **PricingFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingFees
    * const pricingFees = await prisma.pricingFee.findMany()
    * ```
    */
  get pricingFee(): Prisma.PricingFeeDelegate<ExtArgs, ClientOptions>;
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
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    Category: 'Category',
    Product: 'Product',
    Pricing: 'Pricing',
    PricingFee: 'PricingFee'
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
      modelProps: "category" | "product" | "pricing" | "pricingFee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Pricing: {
        payload: Prisma.$PricingPayload<ExtArgs>
        fields: Prisma.PricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          findFirst: {
            args: Prisma.PricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          findMany: {
            args: Prisma.PricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>[]
          }
          create: {
            args: Prisma.PricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          createMany: {
            args: Prisma.PricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>[]
          }
          delete: {
            args: Prisma.PricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          update: {
            args: Prisma.PricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          deleteMany: {
            args: Prisma.PricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>[]
          }
          upsert: {
            args: Prisma.PricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingPayload>
          }
          aggregate: {
            args: Prisma.PricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricing>
          }
          groupBy: {
            args: Prisma.PricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingCountArgs<ExtArgs>
            result: $Utils.Optional<PricingCountAggregateOutputType> | number
          }
        }
      }
      PricingFee: {
        payload: Prisma.$PricingFeePayload<ExtArgs>
        fields: Prisma.PricingFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          findFirst: {
            args: Prisma.PricingFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          findMany: {
            args: Prisma.PricingFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>[]
          }
          create: {
            args: Prisma.PricingFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          createMany: {
            args: Prisma.PricingFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PricingFeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>[]
          }
          delete: {
            args: Prisma.PricingFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          update: {
            args: Prisma.PricingFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          deleteMany: {
            args: Prisma.PricingFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PricingFeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>[]
          }
          upsert: {
            args: Prisma.PricingFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingFeePayload>
          }
          aggregate: {
            args: Prisma.PricingFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingFee>
          }
          groupBy: {
            args: Prisma.PricingFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingFeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingFeeCountArgs<ExtArgs>
            result: $Utils.Optional<PricingFeeCountAggregateOutputType> | number
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
    category?: CategoryOmit
    product?: ProductOmit
    pricing?: PricingOmit
    pricingFee?: PricingFeeOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    pricings: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricings?: boolean | ProductCountOutputTypeCountPricingsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountPricingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingWhereInput
  }


  /**
   * Count Type PricingCountOutputType
   */

  export type PricingCountOutputType = {
    fees: number
  }

  export type PricingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fees?: boolean | PricingCountOutputTypeCountFeesArgs
  }

  // Custom InputTypes
  /**
   * PricingCountOutputType without action
   */
  export type PricingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingCountOutputType
     */
    select?: PricingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PricingCountOutputType without action
   */
  export type PricingCountOutputTypeCountFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingFeeWhereInput
  }


  /**
   * Count Type PricingFeeCountOutputType
   */

  export type PricingFeeCountOutputType = {
    pricings: number
  }

  export type PricingFeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricings?: boolean | PricingFeeCountOutputTypeCountPricingsArgs
  }

  // Custom InputTypes
  /**
   * PricingFeeCountOutputType without action
   */
  export type PricingFeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFeeCountOutputType
     */
    select?: PricingFeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PricingFeeCountOutputType without action
   */
  export type PricingFeeCountOutputTypeCountPricingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    workspaceId: string | null
    userId: string | null
    name: string | null
    description: string | null
    published: boolean | null
    slug: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    workspaceId: string | null
    userId: string | null
    name: string | null
    description: string | null
    published: boolean | null
    slug: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    createdAt: number
    workspaceId: number
    userId: number
    name: number
    description: number
    published: number
    slug: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    slug?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    slug?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    slug?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    createdAt: Date
    workspaceId: string
    userId: string
    name: string
    description: string
    published: boolean
    slug: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    slug?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    slug?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    slug?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "workspaceId" | "userId" | "name" | "description" | "published" | "slug", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      workspaceId: string
      userId: string
      name: string
      description: string
      published: boolean
      slug: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly workspaceId: FieldRef<"Category", 'String'>
    readonly userId: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly published: FieldRef<"Category", 'Boolean'>
    readonly slug: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    workspaceId: string | null
    userId: string | null
    name: string | null
    description: string | null
    published: boolean | null
    categoryId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    workspaceId: string | null
    userId: string | null
    name: string | null
    description: string | null
    published: boolean | null
    categoryId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    createdAt: number
    workspaceId: number
    userId: number
    name: number
    description: number
    published: number
    categoryId: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    createdAt?: true
    workspaceId?: true
    userId?: true
    name?: true
    description?: true
    published?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    createdAt: Date
    workspaceId: string
    userId: string
    name: string
    description: string
    published: boolean
    categoryId: string | null
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    categoryId?: boolean
    pricings?: boolean | Product$pricingsArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    categoryId?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    categoryId?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    createdAt?: boolean
    workspaceId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    published?: boolean
    categoryId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "workspaceId" | "userId" | "name" | "description" | "published" | "categoryId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricings?: boolean | Product$pricingsArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      pricings: Prisma.$PricingPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      workspaceId: string
      userId: string
      name: string
      description: string
      published: boolean
      categoryId: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pricings<T extends Product$pricingsArgs<ExtArgs> = {}>(args?: Subset<T, Product$pricingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly workspaceId: FieldRef<"Product", 'String'>
    readonly userId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly published: FieldRef<"Product", 'Boolean'>
    readonly categoryId: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    limit?: number
  }

  /**
   * Product.pricings
   */
  export type Product$pricingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    where?: PricingWhereInput
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    cursor?: PricingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Pricing
   */

  export type AggregatePricing = {
    _count: PricingCountAggregateOutputType | null
    _avg: PricingAvgAggregateOutputType | null
    _sum: PricingSumAggregateOutputType | null
    _min: PricingMinAggregateOutputType | null
    _max: PricingMaxAggregateOutputType | null
  }

  export type PricingAvgAggregateOutputType = {
    amount: number | null
  }

  export type PricingSumAggregateOutputType = {
    amount: bigint | null
  }

  export type PricingMinAggregateOutputType = {
    id: string | null
    amount: bigint | null
    charge_type: $Enums.chargeType | null
    package_type: $Enums.packageType | null
    workspaceId: string | null
    userId: string | null
    createdAt: Date | null
    productId: string | null
  }

  export type PricingMaxAggregateOutputType = {
    id: string | null
    amount: bigint | null
    charge_type: $Enums.chargeType | null
    package_type: $Enums.packageType | null
    workspaceId: string | null
    userId: string | null
    createdAt: Date | null
    productId: string | null
  }

  export type PricingCountAggregateOutputType = {
    id: number
    amount: number
    charge_type: number
    package_type: number
    workspaceId: number
    userId: number
    createdAt: number
    productId: number
    _all: number
  }


  export type PricingAvgAggregateInputType = {
    amount?: true
  }

  export type PricingSumAggregateInputType = {
    amount?: true
  }

  export type PricingMinAggregateInputType = {
    id?: true
    amount?: true
    charge_type?: true
    package_type?: true
    workspaceId?: true
    userId?: true
    createdAt?: true
    productId?: true
  }

  export type PricingMaxAggregateInputType = {
    id?: true
    amount?: true
    charge_type?: true
    package_type?: true
    workspaceId?: true
    userId?: true
    createdAt?: true
    productId?: true
  }

  export type PricingCountAggregateInputType = {
    id?: true
    amount?: true
    charge_type?: true
    package_type?: true
    workspaceId?: true
    userId?: true
    createdAt?: true
    productId?: true
    _all?: true
  }

  export type PricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pricing to aggregate.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pricings
    **/
    _count?: true | PricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingMaxAggregateInputType
  }

  export type GetPricingAggregateType<T extends PricingAggregateArgs> = {
        [P in keyof T & keyof AggregatePricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricing[P]>
      : GetScalarType<T[P], AggregatePricing[P]>
  }




  export type PricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingWhereInput
    orderBy?: PricingOrderByWithAggregationInput | PricingOrderByWithAggregationInput[]
    by: PricingScalarFieldEnum[] | PricingScalarFieldEnum
    having?: PricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingCountAggregateInputType | true
    _avg?: PricingAvgAggregateInputType
    _sum?: PricingSumAggregateInputType
    _min?: PricingMinAggregateInputType
    _max?: PricingMaxAggregateInputType
  }

  export type PricingGroupByOutputType = {
    id: string
    amount: bigint
    charge_type: $Enums.chargeType
    package_type: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt: Date
    productId: string | null
    _count: PricingCountAggregateOutputType | null
    _avg: PricingAvgAggregateOutputType | null
    _sum: PricingSumAggregateOutputType | null
    _min: PricingMinAggregateOutputType | null
    _max: PricingMaxAggregateOutputType | null
  }

  type GetPricingGroupByPayload<T extends PricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingGroupByOutputType[P]>
            : GetScalarType<T[P], PricingGroupByOutputType[P]>
        }
      >
    >


  export type PricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    charge_type?: boolean
    package_type?: boolean
    workspaceId?: boolean
    userId?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | Pricing$productArgs<ExtArgs>
    fees?: boolean | Pricing$feesArgs<ExtArgs>
    _count?: boolean | PricingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricing"]>

  export type PricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    charge_type?: boolean
    package_type?: boolean
    workspaceId?: boolean
    userId?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | Pricing$productArgs<ExtArgs>
  }, ExtArgs["result"]["pricing"]>

  export type PricingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    charge_type?: boolean
    package_type?: boolean
    workspaceId?: boolean
    userId?: boolean
    createdAt?: boolean
    productId?: boolean
    product?: boolean | Pricing$productArgs<ExtArgs>
  }, ExtArgs["result"]["pricing"]>

  export type PricingSelectScalar = {
    id?: boolean
    amount?: boolean
    charge_type?: boolean
    package_type?: boolean
    workspaceId?: boolean
    userId?: boolean
    createdAt?: boolean
    productId?: boolean
  }

  export type PricingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "charge_type" | "package_type" | "workspaceId" | "userId" | "createdAt" | "productId", ExtArgs["result"]["pricing"]>
  export type PricingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Pricing$productArgs<ExtArgs>
    fees?: boolean | Pricing$feesArgs<ExtArgs>
    _count?: boolean | PricingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PricingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Pricing$productArgs<ExtArgs>
  }
  export type PricingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Pricing$productArgs<ExtArgs>
  }

  export type $PricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pricing"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
      fees: Prisma.$PricingFeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: bigint
      charge_type: $Enums.chargeType
      package_type: $Enums.packageType
      workspaceId: string
      userId: string
      createdAt: Date
      productId: string | null
    }, ExtArgs["result"]["pricing"]>
    composites: {}
  }

  type PricingGetPayload<S extends boolean | null | undefined | PricingDefaultArgs> = $Result.GetResult<Prisma.$PricingPayload, S>

  type PricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingCountAggregateInputType | true
    }

  export interface PricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pricing'], meta: { name: 'Pricing' } }
    /**
     * Find zero or one Pricing that matches the filter.
     * @param {PricingFindUniqueArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingFindUniqueArgs>(args: SelectSubset<T, PricingFindUniqueArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pricing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingFindUniqueOrThrowArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindFirstArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingFindFirstArgs>(args?: SelectSubset<T, PricingFindFirstArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindFirstOrThrowArgs} args - Arguments to find a Pricing
     * @example
     * // Get one Pricing
     * const pricing = await prisma.pricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pricings
     * const pricings = await prisma.pricing.findMany()
     * 
     * // Get first 10 Pricings
     * const pricings = await prisma.pricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingWithIdOnly = await prisma.pricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingFindManyArgs>(args?: SelectSubset<T, PricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pricing.
     * @param {PricingCreateArgs} args - Arguments to create a Pricing.
     * @example
     * // Create one Pricing
     * const Pricing = await prisma.pricing.create({
     *   data: {
     *     // ... data to create a Pricing
     *   }
     * })
     * 
     */
    create<T extends PricingCreateArgs>(args: SelectSubset<T, PricingCreateArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pricings.
     * @param {PricingCreateManyArgs} args - Arguments to create many Pricings.
     * @example
     * // Create many Pricings
     * const pricing = await prisma.pricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingCreateManyArgs>(args?: SelectSubset<T, PricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pricings and returns the data saved in the database.
     * @param {PricingCreateManyAndReturnArgs} args - Arguments to create many Pricings.
     * @example
     * // Create many Pricings
     * const pricing = await prisma.pricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pricings and only return the `id`
     * const pricingWithIdOnly = await prisma.pricing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pricing.
     * @param {PricingDeleteArgs} args - Arguments to delete one Pricing.
     * @example
     * // Delete one Pricing
     * const Pricing = await prisma.pricing.delete({
     *   where: {
     *     // ... filter to delete one Pricing
     *   }
     * })
     * 
     */
    delete<T extends PricingDeleteArgs>(args: SelectSubset<T, PricingDeleteArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pricing.
     * @param {PricingUpdateArgs} args - Arguments to update one Pricing.
     * @example
     * // Update one Pricing
     * const pricing = await prisma.pricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingUpdateArgs>(args: SelectSubset<T, PricingUpdateArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pricings.
     * @param {PricingDeleteManyArgs} args - Arguments to filter Pricings to delete.
     * @example
     * // Delete a few Pricings
     * const { count } = await prisma.pricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingDeleteManyArgs>(args?: SelectSubset<T, PricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pricings
     * const pricing = await prisma.pricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingUpdateManyArgs>(args: SelectSubset<T, PricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pricings and returns the data updated in the database.
     * @param {PricingUpdateManyAndReturnArgs} args - Arguments to update many Pricings.
     * @example
     * // Update many Pricings
     * const pricing = await prisma.pricing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pricings and only return the `id`
     * const pricingWithIdOnly = await prisma.pricing.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pricing.
     * @param {PricingUpsertArgs} args - Arguments to update or create a Pricing.
     * @example
     * // Update or create a Pricing
     * const pricing = await prisma.pricing.upsert({
     *   create: {
     *     // ... data to create a Pricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pricing we want to update
     *   }
     * })
     */
    upsert<T extends PricingUpsertArgs>(args: SelectSubset<T, PricingUpsertArgs<ExtArgs>>): Prisma__PricingClient<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingCountArgs} args - Arguments to filter Pricings to count.
     * @example
     * // Count the number of Pricings
     * const count = await prisma.pricing.count({
     *   where: {
     *     // ... the filter for the Pricings we want to count
     *   }
     * })
    **/
    count<T extends PricingCountArgs>(
      args?: Subset<T, PricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingAggregateArgs>(args: Subset<T, PricingAggregateArgs>): Prisma.PrismaPromise<GetPricingAggregateType<T>>

    /**
     * Group by Pricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingGroupByArgs} args - Group by arguments.
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
      T extends PricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingGroupByArgs['orderBy'] }
        : { orderBy?: PricingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pricing model
   */
  readonly fields: PricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Pricing$productArgs<ExtArgs> = {}>(args?: Subset<T, Pricing$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    fees<T extends Pricing$feesArgs<ExtArgs> = {}>(args?: Subset<T, Pricing$feesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Pricing model
   */ 
  interface PricingFieldRefs {
    readonly id: FieldRef<"Pricing", 'String'>
    readonly amount: FieldRef<"Pricing", 'BigInt'>
    readonly charge_type: FieldRef<"Pricing", 'chargeType'>
    readonly package_type: FieldRef<"Pricing", 'packageType'>
    readonly workspaceId: FieldRef<"Pricing", 'String'>
    readonly userId: FieldRef<"Pricing", 'String'>
    readonly createdAt: FieldRef<"Pricing", 'DateTime'>
    readonly productId: FieldRef<"Pricing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pricing findUnique
   */
  export type PricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing findUniqueOrThrow
   */
  export type PricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing findFirst
   */
  export type PricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pricings.
     */
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing findFirstOrThrow
   */
  export type PricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter, which Pricing to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pricings.
     */
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing findMany
   */
  export type PricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter, which Pricings to fetch.
     */
    where?: PricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pricings to fetch.
     */
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pricings.
     */
    cursor?: PricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pricings.
     */
    skip?: number
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * Pricing create
   */
  export type PricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * The data needed to create a Pricing.
     */
    data: XOR<PricingCreateInput, PricingUncheckedCreateInput>
  }

  /**
   * Pricing createMany
   */
  export type PricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pricings.
     */
    data: PricingCreateManyInput | PricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pricing createManyAndReturn
   */
  export type PricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * The data used to create many Pricings.
     */
    data: PricingCreateManyInput | PricingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pricing update
   */
  export type PricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * The data needed to update a Pricing.
     */
    data: XOR<PricingUpdateInput, PricingUncheckedUpdateInput>
    /**
     * Choose, which Pricing to update.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing updateMany
   */
  export type PricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pricings.
     */
    data: XOR<PricingUpdateManyMutationInput, PricingUncheckedUpdateManyInput>
    /**
     * Filter which Pricings to update
     */
    where?: PricingWhereInput
    limit?: number
  }

  /**
   * Pricing updateManyAndReturn
   */
  export type PricingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * The data used to update Pricings.
     */
    data: XOR<PricingUpdateManyMutationInput, PricingUncheckedUpdateManyInput>
    /**
     * Filter which Pricings to update
     */
    where?: PricingWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pricing upsert
   */
  export type PricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * The filter to search for the Pricing to update in case it exists.
     */
    where: PricingWhereUniqueInput
    /**
     * In case the Pricing found by the `where` argument doesn't exist, create a new Pricing with this data.
     */
    create: XOR<PricingCreateInput, PricingUncheckedCreateInput>
    /**
     * In case the Pricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingUpdateInput, PricingUncheckedUpdateInput>
  }

  /**
   * Pricing delete
   */
  export type PricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    /**
     * Filter which Pricing to delete.
     */
    where: PricingWhereUniqueInput
  }

  /**
   * Pricing deleteMany
   */
  export type PricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pricings to delete
     */
    where?: PricingWhereInput
    limit?: number
  }

  /**
   * Pricing.product
   */
  export type Pricing$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Pricing.fees
   */
  export type Pricing$feesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    where?: PricingFeeWhereInput
    orderBy?: PricingFeeOrderByWithRelationInput | PricingFeeOrderByWithRelationInput[]
    cursor?: PricingFeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingFeeScalarFieldEnum | PricingFeeScalarFieldEnum[]
  }

  /**
   * Pricing without action
   */
  export type PricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
  }


  /**
   * Model PricingFee
   */

  export type AggregatePricingFee = {
    _count: PricingFeeCountAggregateOutputType | null
    _avg: PricingFeeAvgAggregateOutputType | null
    _sum: PricingFeeSumAggregateOutputType | null
    _min: PricingFeeMinAggregateOutputType | null
    _max: PricingFeeMaxAggregateOutputType | null
  }

  export type PricingFeeAvgAggregateOutputType = {
    total: Decimal | null
  }

  export type PricingFeeSumAggregateOutputType = {
    total: Decimal | null
  }

  export type PricingFeeMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    total: Decimal | null
  }

  export type PricingFeeMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    name: string | null
    description: string | null
    total: Decimal | null
  }

  export type PricingFeeCountAggregateOutputType = {
    id: number
    createdAt: number
    name: number
    description: number
    total: number
    _all: number
  }


  export type PricingFeeAvgAggregateInputType = {
    total?: true
  }

  export type PricingFeeSumAggregateInputType = {
    total?: true
  }

  export type PricingFeeMinAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    total?: true
  }

  export type PricingFeeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    total?: true
  }

  export type PricingFeeCountAggregateInputType = {
    id?: true
    createdAt?: true
    name?: true
    description?: true
    total?: true
    _all?: true
  }

  export type PricingFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingFee to aggregate.
     */
    where?: PricingFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingFees to fetch.
     */
    orderBy?: PricingFeeOrderByWithRelationInput | PricingFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingFees
    **/
    _count?: true | PricingFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingFeeMaxAggregateInputType
  }

  export type GetPricingFeeAggregateType<T extends PricingFeeAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingFee[P]>
      : GetScalarType<T[P], AggregatePricingFee[P]>
  }




  export type PricingFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingFeeWhereInput
    orderBy?: PricingFeeOrderByWithAggregationInput | PricingFeeOrderByWithAggregationInput[]
    by: PricingFeeScalarFieldEnum[] | PricingFeeScalarFieldEnum
    having?: PricingFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingFeeCountAggregateInputType | true
    _avg?: PricingFeeAvgAggregateInputType
    _sum?: PricingFeeSumAggregateInputType
    _min?: PricingFeeMinAggregateInputType
    _max?: PricingFeeMaxAggregateInputType
  }

  export type PricingFeeGroupByOutputType = {
    id: string
    createdAt: Date
    name: string
    description: string | null
    total: Decimal
    _count: PricingFeeCountAggregateOutputType | null
    _avg: PricingFeeAvgAggregateOutputType | null
    _sum: PricingFeeSumAggregateOutputType | null
    _min: PricingFeeMinAggregateOutputType | null
    _max: PricingFeeMaxAggregateOutputType | null
  }

  type GetPricingFeeGroupByPayload<T extends PricingFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingFeeGroupByOutputType[P]>
            : GetScalarType<T[P], PricingFeeGroupByOutputType[P]>
        }
      >
    >


  export type PricingFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    total?: boolean
    pricings?: boolean | PricingFee$pricingsArgs<ExtArgs>
    _count?: boolean | PricingFeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingFee"]>

  export type PricingFeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    total?: boolean
  }, ExtArgs["result"]["pricingFee"]>

  export type PricingFeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    total?: boolean
  }, ExtArgs["result"]["pricingFee"]>

  export type PricingFeeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    name?: boolean
    description?: boolean
    total?: boolean
  }

  export type PricingFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "name" | "description" | "total", ExtArgs["result"]["pricingFee"]>
  export type PricingFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricings?: boolean | PricingFee$pricingsArgs<ExtArgs>
    _count?: boolean | PricingFeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PricingFeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PricingFeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PricingFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingFee"
    objects: {
      pricings: Prisma.$PricingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      name: string
      description: string | null
      total: Prisma.Decimal
    }, ExtArgs["result"]["pricingFee"]>
    composites: {}
  }

  type PricingFeeGetPayload<S extends boolean | null | undefined | PricingFeeDefaultArgs> = $Result.GetResult<Prisma.$PricingFeePayload, S>

  type PricingFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingFeeCountAggregateInputType | true
    }

  export interface PricingFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingFee'], meta: { name: 'PricingFee' } }
    /**
     * Find zero or one PricingFee that matches the filter.
     * @param {PricingFeeFindUniqueArgs} args - Arguments to find a PricingFee
     * @example
     * // Get one PricingFee
     * const pricingFee = await prisma.pricingFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingFeeFindUniqueArgs>(args: SelectSubset<T, PricingFeeFindUniqueArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PricingFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingFeeFindUniqueOrThrowArgs} args - Arguments to find a PricingFee
     * @example
     * // Get one PricingFee
     * const pricingFee = await prisma.pricingFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PricingFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeFindFirstArgs} args - Arguments to find a PricingFee
     * @example
     * // Get one PricingFee
     * const pricingFee = await prisma.pricingFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingFeeFindFirstArgs>(args?: SelectSubset<T, PricingFeeFindFirstArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PricingFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeFindFirstOrThrowArgs} args - Arguments to find a PricingFee
     * @example
     * // Get one PricingFee
     * const pricingFee = await prisma.pricingFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PricingFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingFees
     * const pricingFees = await prisma.pricingFee.findMany()
     * 
     * // Get first 10 PricingFees
     * const pricingFees = await prisma.pricingFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingFeeWithIdOnly = await prisma.pricingFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingFeeFindManyArgs>(args?: SelectSubset<T, PricingFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PricingFee.
     * @param {PricingFeeCreateArgs} args - Arguments to create a PricingFee.
     * @example
     * // Create one PricingFee
     * const PricingFee = await prisma.pricingFee.create({
     *   data: {
     *     // ... data to create a PricingFee
     *   }
     * })
     * 
     */
    create<T extends PricingFeeCreateArgs>(args: SelectSubset<T, PricingFeeCreateArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PricingFees.
     * @param {PricingFeeCreateManyArgs} args - Arguments to create many PricingFees.
     * @example
     * // Create many PricingFees
     * const pricingFee = await prisma.pricingFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingFeeCreateManyArgs>(args?: SelectSubset<T, PricingFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PricingFees and returns the data saved in the database.
     * @param {PricingFeeCreateManyAndReturnArgs} args - Arguments to create many PricingFees.
     * @example
     * // Create many PricingFees
     * const pricingFee = await prisma.pricingFee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PricingFees and only return the `id`
     * const pricingFeeWithIdOnly = await prisma.pricingFee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PricingFeeCreateManyAndReturnArgs>(args?: SelectSubset<T, PricingFeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PricingFee.
     * @param {PricingFeeDeleteArgs} args - Arguments to delete one PricingFee.
     * @example
     * // Delete one PricingFee
     * const PricingFee = await prisma.pricingFee.delete({
     *   where: {
     *     // ... filter to delete one PricingFee
     *   }
     * })
     * 
     */
    delete<T extends PricingFeeDeleteArgs>(args: SelectSubset<T, PricingFeeDeleteArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PricingFee.
     * @param {PricingFeeUpdateArgs} args - Arguments to update one PricingFee.
     * @example
     * // Update one PricingFee
     * const pricingFee = await prisma.pricingFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingFeeUpdateArgs>(args: SelectSubset<T, PricingFeeUpdateArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PricingFees.
     * @param {PricingFeeDeleteManyArgs} args - Arguments to filter PricingFees to delete.
     * @example
     * // Delete a few PricingFees
     * const { count } = await prisma.pricingFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingFeeDeleteManyArgs>(args?: SelectSubset<T, PricingFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingFees
     * const pricingFee = await prisma.pricingFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingFeeUpdateManyArgs>(args: SelectSubset<T, PricingFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingFees and returns the data updated in the database.
     * @param {PricingFeeUpdateManyAndReturnArgs} args - Arguments to update many PricingFees.
     * @example
     * // Update many PricingFees
     * const pricingFee = await prisma.pricingFee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PricingFees and only return the `id`
     * const pricingFeeWithIdOnly = await prisma.pricingFee.updateManyAndReturn({
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
    updateManyAndReturn<T extends PricingFeeUpdateManyAndReturnArgs>(args: SelectSubset<T, PricingFeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PricingFee.
     * @param {PricingFeeUpsertArgs} args - Arguments to update or create a PricingFee.
     * @example
     * // Update or create a PricingFee
     * const pricingFee = await prisma.pricingFee.upsert({
     *   create: {
     *     // ... data to create a PricingFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingFee we want to update
     *   }
     * })
     */
    upsert<T extends PricingFeeUpsertArgs>(args: SelectSubset<T, PricingFeeUpsertArgs<ExtArgs>>): Prisma__PricingFeeClient<$Result.GetResult<Prisma.$PricingFeePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PricingFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeCountArgs} args - Arguments to filter PricingFees to count.
     * @example
     * // Count the number of PricingFees
     * const count = await prisma.pricingFee.count({
     *   where: {
     *     // ... the filter for the PricingFees we want to count
     *   }
     * })
    **/
    count<T extends PricingFeeCountArgs>(
      args?: Subset<T, PricingFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingFeeAggregateArgs>(args: Subset<T, PricingFeeAggregateArgs>): Prisma.PrismaPromise<GetPricingFeeAggregateType<T>>

    /**
     * Group by PricingFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingFeeGroupByArgs} args - Group by arguments.
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
      T extends PricingFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingFeeGroupByArgs['orderBy'] }
        : { orderBy?: PricingFeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingFee model
   */
  readonly fields: PricingFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pricings<T extends PricingFee$pricingsArgs<ExtArgs> = {}>(args?: Subset<T, PricingFee$pricingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the PricingFee model
   */ 
  interface PricingFeeFieldRefs {
    readonly id: FieldRef<"PricingFee", 'String'>
    readonly createdAt: FieldRef<"PricingFee", 'DateTime'>
    readonly name: FieldRef<"PricingFee", 'String'>
    readonly description: FieldRef<"PricingFee", 'String'>
    readonly total: FieldRef<"PricingFee", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PricingFee findUnique
   */
  export type PricingFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter, which PricingFee to fetch.
     */
    where: PricingFeeWhereUniqueInput
  }

  /**
   * PricingFee findUniqueOrThrow
   */
  export type PricingFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter, which PricingFee to fetch.
     */
    where: PricingFeeWhereUniqueInput
  }

  /**
   * PricingFee findFirst
   */
  export type PricingFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter, which PricingFee to fetch.
     */
    where?: PricingFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingFees to fetch.
     */
    orderBy?: PricingFeeOrderByWithRelationInput | PricingFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingFees.
     */
    cursor?: PricingFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingFees.
     */
    distinct?: PricingFeeScalarFieldEnum | PricingFeeScalarFieldEnum[]
  }

  /**
   * PricingFee findFirstOrThrow
   */
  export type PricingFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter, which PricingFee to fetch.
     */
    where?: PricingFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingFees to fetch.
     */
    orderBy?: PricingFeeOrderByWithRelationInput | PricingFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingFees.
     */
    cursor?: PricingFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingFees.
     */
    distinct?: PricingFeeScalarFieldEnum | PricingFeeScalarFieldEnum[]
  }

  /**
   * PricingFee findMany
   */
  export type PricingFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter, which PricingFees to fetch.
     */
    where?: PricingFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingFees to fetch.
     */
    orderBy?: PricingFeeOrderByWithRelationInput | PricingFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingFees.
     */
    cursor?: PricingFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingFees.
     */
    skip?: number
    distinct?: PricingFeeScalarFieldEnum | PricingFeeScalarFieldEnum[]
  }

  /**
   * PricingFee create
   */
  export type PricingFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingFee.
     */
    data: XOR<PricingFeeCreateInput, PricingFeeUncheckedCreateInput>
  }

  /**
   * PricingFee createMany
   */
  export type PricingFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingFees.
     */
    data: PricingFeeCreateManyInput | PricingFeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingFee createManyAndReturn
   */
  export type PricingFeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * The data used to create many PricingFees.
     */
    data: PricingFeeCreateManyInput | PricingFeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingFee update
   */
  export type PricingFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingFee.
     */
    data: XOR<PricingFeeUpdateInput, PricingFeeUncheckedUpdateInput>
    /**
     * Choose, which PricingFee to update.
     */
    where: PricingFeeWhereUniqueInput
  }

  /**
   * PricingFee updateMany
   */
  export type PricingFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingFees.
     */
    data: XOR<PricingFeeUpdateManyMutationInput, PricingFeeUncheckedUpdateManyInput>
    /**
     * Filter which PricingFees to update
     */
    where?: PricingFeeWhereInput
    limit?: number
  }

  /**
   * PricingFee updateManyAndReturn
   */
  export type PricingFeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * The data used to update PricingFees.
     */
    data: XOR<PricingFeeUpdateManyMutationInput, PricingFeeUncheckedUpdateManyInput>
    /**
     * Filter which PricingFees to update
     */
    where?: PricingFeeWhereInput
    limit?: number
  }

  /**
   * PricingFee upsert
   */
  export type PricingFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingFee to update in case it exists.
     */
    where: PricingFeeWhereUniqueInput
    /**
     * In case the PricingFee found by the `where` argument doesn't exist, create a new PricingFee with this data.
     */
    create: XOR<PricingFeeCreateInput, PricingFeeUncheckedCreateInput>
    /**
     * In case the PricingFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingFeeUpdateInput, PricingFeeUncheckedUpdateInput>
  }

  /**
   * PricingFee delete
   */
  export type PricingFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
    /**
     * Filter which PricingFee to delete.
     */
    where: PricingFeeWhereUniqueInput
  }

  /**
   * PricingFee deleteMany
   */
  export type PricingFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingFees to delete
     */
    where?: PricingFeeWhereInput
    limit?: number
  }

  /**
   * PricingFee.pricings
   */
  export type PricingFee$pricingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pricing
     */
    select?: PricingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pricing
     */
    omit?: PricingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingInclude<ExtArgs> | null
    where?: PricingWhereInput
    orderBy?: PricingOrderByWithRelationInput | PricingOrderByWithRelationInput[]
    cursor?: PricingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingScalarFieldEnum | PricingScalarFieldEnum[]
  }

  /**
   * PricingFee without action
   */
  export type PricingFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingFee
     */
    select?: PricingFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingFee
     */
    omit?: PricingFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingFeeInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    workspaceId: 'workspaceId',
    userId: 'userId',
    name: 'name',
    description: 'description',
    published: 'published',
    slug: 'slug'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    workspaceId: 'workspaceId',
    userId: 'userId',
    name: 'name',
    description: 'description',
    published: 'published',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const PricingScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    charge_type: 'charge_type',
    package_type: 'package_type',
    workspaceId: 'workspaceId',
    userId: 'userId',
    createdAt: 'createdAt',
    productId: 'productId'
  };

  export type PricingScalarFieldEnum = (typeof PricingScalarFieldEnum)[keyof typeof PricingScalarFieldEnum]


  export const PricingFeeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    name: 'name',
    description: 'description',
    total: 'total'
  };

  export type PricingFeeScalarFieldEnum = (typeof PricingFeeScalarFieldEnum)[keyof typeof PricingFeeScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'chargeType'
   */
  export type EnumchargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'chargeType'>
    


  /**
   * Reference to a field of type 'chargeType[]'
   */
  export type ListEnumchargeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'chargeType[]'>
    


  /**
   * Reference to a field of type 'packageType'
   */
  export type EnumpackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'packageType'>
    


  /**
   * Reference to a field of type 'packageType[]'
   */
  export type ListEnumpackageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'packageType[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: UuidFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    workspaceId?: UuidFilter<"Category"> | string
    userId?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    published?: BoolFilter<"Category"> | boolean
    slug?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    slug?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    workspaceId?: UuidFilter<"Category"> | string
    userId?: UuidFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringFilter<"Category"> | string
    published?: BoolFilter<"Category"> | boolean
    products?: ProductListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    slug?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    workspaceId?: UuidWithAggregatesFilter<"Category"> | string
    userId?: UuidWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringWithAggregatesFilter<"Category"> | string
    published?: BoolWithAggregatesFilter<"Category"> | boolean
    slug?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: UuidFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    workspaceId?: UuidFilter<"Product"> | string
    userId?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    published?: BoolFilter<"Product"> | boolean
    categoryId?: UuidNullableFilter<"Product"> | string | null
    pricings?: PricingListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    pricings?: PricingOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    createdAt?: DateTimeFilter<"Product"> | Date | string
    workspaceId?: UuidFilter<"Product"> | string
    userId?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    published?: BoolFilter<"Product"> | boolean
    categoryId?: UuidNullableFilter<"Product"> | string | null
    pricings?: PricingListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Product"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    workspaceId?: UuidWithAggregatesFilter<"Product"> | string
    userId?: UuidWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    published?: BoolWithAggregatesFilter<"Product"> | boolean
    categoryId?: UuidNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type PricingWhereInput = {
    AND?: PricingWhereInput | PricingWhereInput[]
    OR?: PricingWhereInput[]
    NOT?: PricingWhereInput | PricingWhereInput[]
    id?: UuidFilter<"Pricing"> | string
    amount?: BigIntFilter<"Pricing"> | bigint | number
    charge_type?: EnumchargeTypeFilter<"Pricing"> | $Enums.chargeType
    package_type?: EnumpackageTypeFilter<"Pricing"> | $Enums.packageType
    workspaceId?: UuidFilter<"Pricing"> | string
    userId?: UuidFilter<"Pricing"> | string
    createdAt?: DateTimeFilter<"Pricing"> | Date | string
    productId?: UuidNullableFilter<"Pricing"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    fees?: PricingFeeListRelationFilter
  }

  export type PricingOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    charge_type?: SortOrder
    package_type?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    fees?: PricingFeeOrderByRelationAggregateInput
  }

  export type PricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingWhereInput | PricingWhereInput[]
    OR?: PricingWhereInput[]
    NOT?: PricingWhereInput | PricingWhereInput[]
    amount?: BigIntFilter<"Pricing"> | bigint | number
    charge_type?: EnumchargeTypeFilter<"Pricing"> | $Enums.chargeType
    package_type?: EnumpackageTypeFilter<"Pricing"> | $Enums.packageType
    workspaceId?: UuidFilter<"Pricing"> | string
    userId?: UuidFilter<"Pricing"> | string
    createdAt?: DateTimeFilter<"Pricing"> | Date | string
    productId?: UuidNullableFilter<"Pricing"> | string | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
    fees?: PricingFeeListRelationFilter
  }, "id">

  export type PricingOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    charge_type?: SortOrder
    package_type?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrderInput | SortOrder
    _count?: PricingCountOrderByAggregateInput
    _avg?: PricingAvgOrderByAggregateInput
    _max?: PricingMaxOrderByAggregateInput
    _min?: PricingMinOrderByAggregateInput
    _sum?: PricingSumOrderByAggregateInput
  }

  export type PricingScalarWhereWithAggregatesInput = {
    AND?: PricingScalarWhereWithAggregatesInput | PricingScalarWhereWithAggregatesInput[]
    OR?: PricingScalarWhereWithAggregatesInput[]
    NOT?: PricingScalarWhereWithAggregatesInput | PricingScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Pricing"> | string
    amount?: BigIntWithAggregatesFilter<"Pricing"> | bigint | number
    charge_type?: EnumchargeTypeWithAggregatesFilter<"Pricing"> | $Enums.chargeType
    package_type?: EnumpackageTypeWithAggregatesFilter<"Pricing"> | $Enums.packageType
    workspaceId?: UuidWithAggregatesFilter<"Pricing"> | string
    userId?: UuidWithAggregatesFilter<"Pricing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pricing"> | Date | string
    productId?: UuidNullableWithAggregatesFilter<"Pricing"> | string | null
  }

  export type PricingFeeWhereInput = {
    AND?: PricingFeeWhereInput | PricingFeeWhereInput[]
    OR?: PricingFeeWhereInput[]
    NOT?: PricingFeeWhereInput | PricingFeeWhereInput[]
    id?: UuidFilter<"PricingFee"> | string
    createdAt?: DateTimeFilter<"PricingFee"> | Date | string
    name?: StringFilter<"PricingFee"> | string
    description?: StringNullableFilter<"PricingFee"> | string | null
    total?: DecimalFilter<"PricingFee"> | Decimal | DecimalJsLike | number | string
    pricings?: PricingListRelationFilter
  }

  export type PricingFeeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    total?: SortOrder
    pricings?: PricingOrderByRelationAggregateInput
  }

  export type PricingFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PricingFeeWhereInput | PricingFeeWhereInput[]
    OR?: PricingFeeWhereInput[]
    NOT?: PricingFeeWhereInput | PricingFeeWhereInput[]
    createdAt?: DateTimeFilter<"PricingFee"> | Date | string
    name?: StringFilter<"PricingFee"> | string
    description?: StringNullableFilter<"PricingFee"> | string | null
    total?: DecimalFilter<"PricingFee"> | Decimal | DecimalJsLike | number | string
    pricings?: PricingListRelationFilter
  }, "id">

  export type PricingFeeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    total?: SortOrder
    _count?: PricingFeeCountOrderByAggregateInput
    _avg?: PricingFeeAvgOrderByAggregateInput
    _max?: PricingFeeMaxOrderByAggregateInput
    _min?: PricingFeeMinOrderByAggregateInput
    _sum?: PricingFeeSumOrderByAggregateInput
  }

  export type PricingFeeScalarWhereWithAggregatesInput = {
    AND?: PricingFeeScalarWhereWithAggregatesInput | PricingFeeScalarWhereWithAggregatesInput[]
    OR?: PricingFeeScalarWhereWithAggregatesInput[]
    NOT?: PricingFeeScalarWhereWithAggregatesInput | PricingFeeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"PricingFee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PricingFee"> | Date | string
    name?: StringWithAggregatesFilter<"PricingFee"> | string
    description?: StringNullableWithAggregatesFilter<"PricingFee"> | string | null
    total?: DecimalWithAggregatesFilter<"PricingFee"> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    slug: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    slug: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    slug: string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    pricings?: PricingCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    categoryId?: string | null
    pricings?: PricingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    pricings?: PricingUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    pricings?: PricingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    categoryId?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingCreateInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutPricingsInput
    fees?: PricingFeeCreateNestedManyWithoutPricingsInput
  }

  export type PricingUncheckedCreateInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    productId?: string | null
    fees?: PricingFeeUncheckedCreateNestedManyWithoutPricingsInput
  }

  export type PricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutPricingsNestedInput
    fees?: PricingFeeUpdateManyWithoutPricingsNestedInput
  }

  export type PricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
    fees?: PricingFeeUncheckedUpdateManyWithoutPricingsNestedInput
  }

  export type PricingCreateManyInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    productId?: string | null
  }

  export type PricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingFeeCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description?: string | null
    total?: Decimal | DecimalJsLike | number | string
    pricings?: PricingCreateNestedManyWithoutFeesInput
  }

  export type PricingFeeUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description?: string | null
    total?: Decimal | DecimalJsLike | number | string
    pricings?: PricingUncheckedCreateNestedManyWithoutFeesInput
  }

  export type PricingFeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricings?: PricingUpdateManyWithoutFeesNestedInput
  }

  export type PricingFeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pricings?: PricingUncheckedUpdateManyWithoutFeesNestedInput
  }

  export type PricingFeeCreateManyInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description?: string | null
    total?: Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    slug?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    slug?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    slug?: SortOrder
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

  export type PricingListRelationFilter = {
    every?: PricingWhereInput
    some?: PricingWhereInput
    none?: PricingWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PricingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    published?: SortOrder
    categoryId?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type EnumchargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.chargeType | EnumchargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumchargeTypeFilter<$PrismaModel> | $Enums.chargeType
  }

  export type EnumpackageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.packageType | EnumpackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpackageTypeFilter<$PrismaModel> | $Enums.packageType
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type PricingFeeListRelationFilter = {
    every?: PricingFeeWhereInput
    some?: PricingFeeWhereInput
    none?: PricingFeeWhereInput
  }

  export type PricingFeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PricingCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    charge_type?: SortOrder
    package_type?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type PricingAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PricingMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    charge_type?: SortOrder
    package_type?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type PricingMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    charge_type?: SortOrder
    package_type?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    productId?: SortOrder
  }

  export type PricingSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type EnumchargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.chargeType | EnumchargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumchargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.chargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumchargeTypeFilter<$PrismaModel>
    _max?: NestedEnumchargeTypeFilter<$PrismaModel>
  }

  export type EnumpackageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.packageType | EnumpackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpackageTypeWithAggregatesFilter<$PrismaModel> | $Enums.packageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpackageTypeFilter<$PrismaModel>
    _max?: NestedEnumpackageTypeFilter<$PrismaModel>
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type PricingFeeAvgOrderByAggregateInput = {
    total?: SortOrder
  }

  export type PricingFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type PricingFeeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    total?: SortOrder
  }

  export type PricingFeeSumOrderByAggregateInput = {
    total?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PricingCreateNestedManyWithoutProductInput = {
    create?: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput> | PricingCreateWithoutProductInput[] | PricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutProductInput | PricingCreateOrConnectWithoutProductInput[]
    createMany?: PricingCreateManyProductInputEnvelope
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PricingUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput> | PricingCreateWithoutProductInput[] | PricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutProductInput | PricingCreateOrConnectWithoutProductInput[]
    createMany?: PricingCreateManyProductInputEnvelope
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
  }

  export type PricingUpdateManyWithoutProductNestedInput = {
    create?: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput> | PricingCreateWithoutProductInput[] | PricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutProductInput | PricingCreateOrConnectWithoutProductInput[]
    upsert?: PricingUpsertWithWhereUniqueWithoutProductInput | PricingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PricingCreateManyProductInputEnvelope
    set?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    disconnect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    delete?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    update?: PricingUpdateWithWhereUniqueWithoutProductInput | PricingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PricingUpdateManyWithWhereWithoutProductInput | PricingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PricingScalarWhereInput | PricingScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PricingUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput> | PricingCreateWithoutProductInput[] | PricingUncheckedCreateWithoutProductInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutProductInput | PricingCreateOrConnectWithoutProductInput[]
    upsert?: PricingUpsertWithWhereUniqueWithoutProductInput | PricingUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: PricingCreateManyProductInputEnvelope
    set?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    disconnect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    delete?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    update?: PricingUpdateWithWhereUniqueWithoutProductInput | PricingUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: PricingUpdateManyWithWhereWithoutProductInput | PricingUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: PricingScalarWhereInput | PricingScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutPricingsInput = {
    create?: XOR<ProductCreateWithoutPricingsInput, ProductUncheckedCreateWithoutPricingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricingsInput
    connect?: ProductWhereUniqueInput
  }

  export type PricingFeeCreateNestedManyWithoutPricingsInput = {
    create?: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput> | PricingFeeCreateWithoutPricingsInput[] | PricingFeeUncheckedCreateWithoutPricingsInput[]
    connectOrCreate?: PricingFeeCreateOrConnectWithoutPricingsInput | PricingFeeCreateOrConnectWithoutPricingsInput[]
    connect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
  }

  export type PricingFeeUncheckedCreateNestedManyWithoutPricingsInput = {
    create?: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput> | PricingFeeCreateWithoutPricingsInput[] | PricingFeeUncheckedCreateWithoutPricingsInput[]
    connectOrCreate?: PricingFeeCreateOrConnectWithoutPricingsInput | PricingFeeCreateOrConnectWithoutPricingsInput[]
    connect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type EnumchargeTypeFieldUpdateOperationsInput = {
    set?: $Enums.chargeType
  }

  export type EnumpackageTypeFieldUpdateOperationsInput = {
    set?: $Enums.packageType
  }

  export type ProductUpdateOneWithoutPricingsNestedInput = {
    create?: XOR<ProductCreateWithoutPricingsInput, ProductUncheckedCreateWithoutPricingsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutPricingsInput
    upsert?: ProductUpsertWithoutPricingsInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutPricingsInput, ProductUpdateWithoutPricingsInput>, ProductUncheckedUpdateWithoutPricingsInput>
  }

  export type PricingFeeUpdateManyWithoutPricingsNestedInput = {
    create?: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput> | PricingFeeCreateWithoutPricingsInput[] | PricingFeeUncheckedCreateWithoutPricingsInput[]
    connectOrCreate?: PricingFeeCreateOrConnectWithoutPricingsInput | PricingFeeCreateOrConnectWithoutPricingsInput[]
    upsert?: PricingFeeUpsertWithWhereUniqueWithoutPricingsInput | PricingFeeUpsertWithWhereUniqueWithoutPricingsInput[]
    set?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    disconnect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    delete?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    connect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    update?: PricingFeeUpdateWithWhereUniqueWithoutPricingsInput | PricingFeeUpdateWithWhereUniqueWithoutPricingsInput[]
    updateMany?: PricingFeeUpdateManyWithWhereWithoutPricingsInput | PricingFeeUpdateManyWithWhereWithoutPricingsInput[]
    deleteMany?: PricingFeeScalarWhereInput | PricingFeeScalarWhereInput[]
  }

  export type PricingFeeUncheckedUpdateManyWithoutPricingsNestedInput = {
    create?: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput> | PricingFeeCreateWithoutPricingsInput[] | PricingFeeUncheckedCreateWithoutPricingsInput[]
    connectOrCreate?: PricingFeeCreateOrConnectWithoutPricingsInput | PricingFeeCreateOrConnectWithoutPricingsInput[]
    upsert?: PricingFeeUpsertWithWhereUniqueWithoutPricingsInput | PricingFeeUpsertWithWhereUniqueWithoutPricingsInput[]
    set?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    disconnect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    delete?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    connect?: PricingFeeWhereUniqueInput | PricingFeeWhereUniqueInput[]
    update?: PricingFeeUpdateWithWhereUniqueWithoutPricingsInput | PricingFeeUpdateWithWhereUniqueWithoutPricingsInput[]
    updateMany?: PricingFeeUpdateManyWithWhereWithoutPricingsInput | PricingFeeUpdateManyWithWhereWithoutPricingsInput[]
    deleteMany?: PricingFeeScalarWhereInput | PricingFeeScalarWhereInput[]
  }

  export type PricingCreateNestedManyWithoutFeesInput = {
    create?: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput> | PricingCreateWithoutFeesInput[] | PricingUncheckedCreateWithoutFeesInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutFeesInput | PricingCreateOrConnectWithoutFeesInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
  }

  export type PricingUncheckedCreateNestedManyWithoutFeesInput = {
    create?: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput> | PricingCreateWithoutFeesInput[] | PricingUncheckedCreateWithoutFeesInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutFeesInput | PricingCreateOrConnectWithoutFeesInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PricingUpdateManyWithoutFeesNestedInput = {
    create?: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput> | PricingCreateWithoutFeesInput[] | PricingUncheckedCreateWithoutFeesInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutFeesInput | PricingCreateOrConnectWithoutFeesInput[]
    upsert?: PricingUpsertWithWhereUniqueWithoutFeesInput | PricingUpsertWithWhereUniqueWithoutFeesInput[]
    set?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    disconnect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    delete?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    update?: PricingUpdateWithWhereUniqueWithoutFeesInput | PricingUpdateWithWhereUniqueWithoutFeesInput[]
    updateMany?: PricingUpdateManyWithWhereWithoutFeesInput | PricingUpdateManyWithWhereWithoutFeesInput[]
    deleteMany?: PricingScalarWhereInput | PricingScalarWhereInput[]
  }

  export type PricingUncheckedUpdateManyWithoutFeesNestedInput = {
    create?: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput> | PricingCreateWithoutFeesInput[] | PricingUncheckedCreateWithoutFeesInput[]
    connectOrCreate?: PricingCreateOrConnectWithoutFeesInput | PricingCreateOrConnectWithoutFeesInput[]
    upsert?: PricingUpsertWithWhereUniqueWithoutFeesInput | PricingUpsertWithWhereUniqueWithoutFeesInput[]
    set?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    disconnect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    delete?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    connect?: PricingWhereUniqueInput | PricingWhereUniqueInput[]
    update?: PricingUpdateWithWhereUniqueWithoutFeesInput | PricingUpdateWithWhereUniqueWithoutFeesInput[]
    updateMany?: PricingUpdateManyWithWhereWithoutFeesInput | PricingUpdateManyWithWhereWithoutFeesInput[]
    deleteMany?: PricingScalarWhereInput | PricingScalarWhereInput[]
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumchargeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.chargeType | EnumchargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumchargeTypeFilter<$PrismaModel> | $Enums.chargeType
  }

  export type NestedEnumpackageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.packageType | EnumpackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpackageTypeFilter<$PrismaModel> | $Enums.packageType
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumchargeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.chargeType | EnumchargeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.chargeType[] | ListEnumchargeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumchargeTypeWithAggregatesFilter<$PrismaModel> | $Enums.chargeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumchargeTypeFilter<$PrismaModel>
    _max?: NestedEnumchargeTypeFilter<$PrismaModel>
  }

  export type NestedEnumpackageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.packageType | EnumpackageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.packageType[] | ListEnumpackageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumpackageTypeWithAggregatesFilter<$PrismaModel> | $Enums.packageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpackageTypeFilter<$PrismaModel>
    _max?: NestedEnumpackageTypeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    pricings?: PricingCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    pricings?: PricingUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: UuidFilter<"Product"> | string
    createdAt?: DateTimeFilter<"Product"> | Date | string
    workspaceId?: UuidFilter<"Product"> | string
    userId?: UuidFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    published?: BoolFilter<"Product"> | boolean
    categoryId?: UuidNullableFilter<"Product"> | string | null
  }

  export type PricingCreateWithoutProductInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    fees?: PricingFeeCreateNestedManyWithoutPricingsInput
  }

  export type PricingUncheckedCreateWithoutProductInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    fees?: PricingFeeUncheckedCreateNestedManyWithoutPricingsInput
  }

  export type PricingCreateOrConnectWithoutProductInput = {
    where: PricingWhereUniqueInput
    create: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput>
  }

  export type PricingCreateManyProductInputEnvelope = {
    data: PricingCreateManyProductInput | PricingCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    slug: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    slug: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type PricingUpsertWithWhereUniqueWithoutProductInput = {
    where: PricingWhereUniqueInput
    update: XOR<PricingUpdateWithoutProductInput, PricingUncheckedUpdateWithoutProductInput>
    create: XOR<PricingCreateWithoutProductInput, PricingUncheckedCreateWithoutProductInput>
  }

  export type PricingUpdateWithWhereUniqueWithoutProductInput = {
    where: PricingWhereUniqueInput
    data: XOR<PricingUpdateWithoutProductInput, PricingUncheckedUpdateWithoutProductInput>
  }

  export type PricingUpdateManyWithWhereWithoutProductInput = {
    where: PricingScalarWhereInput
    data: XOR<PricingUpdateManyMutationInput, PricingUncheckedUpdateManyWithoutProductInput>
  }

  export type PricingScalarWhereInput = {
    AND?: PricingScalarWhereInput | PricingScalarWhereInput[]
    OR?: PricingScalarWhereInput[]
    NOT?: PricingScalarWhereInput | PricingScalarWhereInput[]
    id?: UuidFilter<"Pricing"> | string
    amount?: BigIntFilter<"Pricing"> | bigint | number
    charge_type?: EnumchargeTypeFilter<"Pricing"> | $Enums.chargeType
    package_type?: EnumpackageTypeFilter<"Pricing"> | $Enums.packageType
    workspaceId?: UuidFilter<"Pricing"> | string
    userId?: UuidFilter<"Pricing"> | string
    createdAt?: DateTimeFilter<"Pricing"> | Date | string
    productId?: UuidNullableFilter<"Pricing"> | string | null
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateWithoutPricingsInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    category?: CategoryCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutPricingsInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
    categoryId?: string | null
  }

  export type ProductCreateOrConnectWithoutPricingsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPricingsInput, ProductUncheckedCreateWithoutPricingsInput>
  }

  export type PricingFeeCreateWithoutPricingsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description?: string | null
    total?: Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeUncheckedCreateWithoutPricingsInput = {
    id?: string
    createdAt?: Date | string
    name: string
    description?: string | null
    total?: Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeCreateOrConnectWithoutPricingsInput = {
    where: PricingFeeWhereUniqueInput
    create: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput>
  }

  export type ProductUpsertWithoutPricingsInput = {
    update: XOR<ProductUpdateWithoutPricingsInput, ProductUncheckedUpdateWithoutPricingsInput>
    create: XOR<ProductCreateWithoutPricingsInput, ProductUncheckedCreateWithoutPricingsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutPricingsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutPricingsInput, ProductUncheckedUpdateWithoutPricingsInput>
  }

  export type ProductUpdateWithoutPricingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    category?: CategoryUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutPricingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingFeeUpsertWithWhereUniqueWithoutPricingsInput = {
    where: PricingFeeWhereUniqueInput
    update: XOR<PricingFeeUpdateWithoutPricingsInput, PricingFeeUncheckedUpdateWithoutPricingsInput>
    create: XOR<PricingFeeCreateWithoutPricingsInput, PricingFeeUncheckedCreateWithoutPricingsInput>
  }

  export type PricingFeeUpdateWithWhereUniqueWithoutPricingsInput = {
    where: PricingFeeWhereUniqueInput
    data: XOR<PricingFeeUpdateWithoutPricingsInput, PricingFeeUncheckedUpdateWithoutPricingsInput>
  }

  export type PricingFeeUpdateManyWithWhereWithoutPricingsInput = {
    where: PricingFeeScalarWhereInput
    data: XOR<PricingFeeUpdateManyMutationInput, PricingFeeUncheckedUpdateManyWithoutPricingsInput>
  }

  export type PricingFeeScalarWhereInput = {
    AND?: PricingFeeScalarWhereInput | PricingFeeScalarWhereInput[]
    OR?: PricingFeeScalarWhereInput[]
    NOT?: PricingFeeScalarWhereInput | PricingFeeScalarWhereInput[]
    id?: UuidFilter<"PricingFee"> | string
    createdAt?: DateTimeFilter<"PricingFee"> | Date | string
    name?: StringFilter<"PricingFee"> | string
    description?: StringNullableFilter<"PricingFee"> | string | null
    total?: DecimalFilter<"PricingFee"> | Decimal | DecimalJsLike | number | string
  }

  export type PricingCreateWithoutFeesInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    product?: ProductCreateNestedOneWithoutPricingsInput
  }

  export type PricingUncheckedCreateWithoutFeesInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
    productId?: string | null
  }

  export type PricingCreateOrConnectWithoutFeesInput = {
    where: PricingWhereUniqueInput
    create: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput>
  }

  export type PricingUpsertWithWhereUniqueWithoutFeesInput = {
    where: PricingWhereUniqueInput
    update: XOR<PricingUpdateWithoutFeesInput, PricingUncheckedUpdateWithoutFeesInput>
    create: XOR<PricingCreateWithoutFeesInput, PricingUncheckedCreateWithoutFeesInput>
  }

  export type PricingUpdateWithWhereUniqueWithoutFeesInput = {
    where: PricingWhereUniqueInput
    data: XOR<PricingUpdateWithoutFeesInput, PricingUncheckedUpdateWithoutFeesInput>
  }

  export type PricingUpdateManyWithWhereWithoutFeesInput = {
    where: PricingScalarWhereInput
    data: XOR<PricingUpdateManyMutationInput, PricingUncheckedUpdateManyWithoutFeesInput>
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    createdAt?: Date | string
    workspaceId: string
    userId: string
    name: string
    description: string
    published?: boolean
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    pricings?: PricingUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    pricings?: PricingUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PricingCreateManyProductInput = {
    id?: string
    amount?: bigint | number
    charge_type?: $Enums.chargeType
    package_type?: $Enums.packageType
    workspaceId: string
    userId: string
    createdAt?: Date | string
  }

  export type PricingUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fees?: PricingFeeUpdateManyWithoutPricingsNestedInput
  }

  export type PricingUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fees?: PricingFeeUncheckedUpdateManyWithoutPricingsNestedInput
  }

  export type PricingUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingFeeUpdateWithoutPricingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeUncheckedUpdateWithoutPricingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PricingFeeUncheckedUpdateManyWithoutPricingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PricingUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneWithoutPricingsNestedInput
  }

  export type PricingUncheckedUpdateWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PricingUncheckedUpdateManyWithoutFeesInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    charge_type?: EnumchargeTypeFieldUpdateOperationsInput | $Enums.chargeType
    package_type?: EnumpackageTypeFieldUpdateOperationsInput | $Enums.packageType
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: NullableStringFieldUpdateOperationsInput | string | null
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