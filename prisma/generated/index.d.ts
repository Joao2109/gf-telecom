
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
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>
/**
 * Model Agendamento
 * 
 */
export type Agendamento = $Result.DefaultSelection<Prisma.$AgendamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plano: {
  MB100: 'MB100',
  MB300: 'MB300',
  MB500: 'MB500'
};

export type Plano = (typeof Plano)[keyof typeof Plano]


export const Funcao: {
  ADMINISTRATIVO: 'ADMINISTRATIVO',
  TECNICO: 'TECNICO',
  GERENTE: 'GERENTE'
};

export type Funcao = (typeof Funcao)[keyof typeof Funcao]


export const Status: {
  AGENDADO: 'AGENDADO',
  CONCLUIDO: 'CONCLUIDO',
  CANCELADO: 'CANCELADO'
};

export type Status = (typeof Status)[keyof typeof Status]


export const StatusSala: {
  ABERTA: 'ABERTA',
  FECHADA: 'FECHADA'
};

export type StatusSala = (typeof StatusSala)[keyof typeof StatusSala]

}

export type Plano = $Enums.Plano

export const Plano: typeof $Enums.Plano

export type Funcao = $Enums.Funcao

export const Funcao: typeof $Enums.Funcao

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type StatusSala = $Enums.StatusSala

export const StatusSala: typeof $Enums.StatusSala

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
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
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agendamento`: Exposes CRUD operations for the **Agendamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agendamentos
    * const agendamentos = await prisma.agendamento.findMany()
    * ```
    */
  get agendamento(): Prisma.AgendamentoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Cliente: 'Cliente',
    Funcionario: 'Funcionario',
    Sala: 'Sala',
    Mensagem: 'Mensagem',
    Agendamento: 'Agendamento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "funcionario" | "sala" | "mensagem" | "agendamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
          }
        }
      }
      Agendamento: {
        payload: Prisma.$AgendamentoPayload<ExtArgs>
        fields: Prisma.AgendamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findFirst: {
            args: Prisma.AgendamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          findMany: {
            args: Prisma.AgendamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          create: {
            args: Prisma.AgendamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          createMany: {
            args: Prisma.AgendamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          delete: {
            args: Prisma.AgendamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          update: {
            args: Prisma.AgendamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          deleteMany: {
            args: Prisma.AgendamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>[]
          }
          upsert: {
            args: Prisma.AgendamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendamentoPayload>
          }
          aggregate: {
            args: Prisma.AgendamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgendamento>
          }
          groupBy: {
            args: Prisma.AgendamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendamentoCountArgs<ExtArgs>
            result: $Utils.Optional<AgendamentoCountAggregateOutputType> | number
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
    cliente?: ClienteOmit
    funcionario?: FuncionarioOmit
    sala?: SalaOmit
    mensagem?: MensagemOmit
    agendamento?: AgendamentoOmit
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
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    salas: number
    agendamentos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | ClienteCountOutputTypeCountSalasArgs
    agendamentos?: boolean | ClienteCountOutputTypeCountAgendamentosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountAgendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
  }


  /**
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    salas: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | FuncionarioCountOutputTypeCountSalasArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    mensagens: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | SalaCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    vencimento: number | null
  }

  export type ClienteSumAggregateOutputType = {
    vencimento: number | null
  }

  export type ClienteMinAggregateOutputType = {
    cpf: string | null
    senha: string | null
    nome: string | null
    tel: string | null
    email: string | null
    plano: $Enums.Plano | null
    vencimento: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    cpf: string | null
    senha: string | null
    nome: string | null
    tel: string | null
    email: string | null
    plano: $Enums.Plano | null
    vencimento: number | null
  }

  export type ClienteCountAggregateOutputType = {
    cpf: number
    senha: number
    nome: number
    tel: number
    email: number
    plano: number
    vencimento: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    vencimento?: true
  }

  export type ClienteSumAggregateInputType = {
    vencimento?: true
  }

  export type ClienteMinAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    plano?: true
    vencimento?: true
  }

  export type ClienteMaxAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    plano?: true
    vencimento?: true
  }

  export type ClienteCountAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    plano?: true
    vencimento?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    plano?: boolean
    vencimento?: boolean
    salas?: boolean | Cliente$salasArgs<ExtArgs>
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    plano?: boolean
    vencimento?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    plano?: boolean
    vencimento?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    plano?: boolean
    vencimento?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "senha" | "nome" | "tel" | "email" | "plano" | "vencimento", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Cliente$salasArgs<ExtArgs>
    agendamentos?: boolean | Cliente$agendamentosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      salas: Prisma.$SalaPayload<ExtArgs>[]
      agendamentos: Prisma.$AgendamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      senha: string
      nome: string
      tel: string
      email: string
      plano: $Enums.Plano
      vencimento: number
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cpf`
     * const clienteWithCpfOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends Cliente$salasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agendamentos<T extends Cliente$agendamentosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$agendamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly senha: FieldRef<"Cliente", 'String'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly tel: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly plano: FieldRef<"Cliente", 'Plano'>
    readonly vencimento: FieldRef<"Cliente", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.salas
   */
  export type Cliente$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Cliente.agendamentos
   */
  export type Cliente$agendamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    cursor?: AgendamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioMinAggregateOutputType = {
    cpf: string | null
    senha: string | null
    nome: string | null
    tel: string | null
    email: string | null
    funcao: $Enums.Funcao | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    cpf: string | null
    senha: string | null
    nome: string | null
    tel: string | null
    email: string | null
    funcao: $Enums.Funcao | null
  }

  export type FuncionarioCountAggregateOutputType = {
    cpf: number
    senha: number
    nome: number
    tel: number
    email: number
    funcao: number
    _all: number
  }


  export type FuncionarioMinAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    funcao?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    funcao?: true
  }

  export type FuncionarioCountAggregateInputType = {
    cpf?: true
    senha?: true
    nome?: true
    tel?: true
    email?: true
    funcao?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
    _count: FuncionarioCountAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    funcao?: boolean
    salas?: boolean | Funcionario$salasArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    funcao?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    funcao?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    cpf?: boolean
    senha?: boolean
    nome?: boolean
    tel?: boolean
    email?: boolean
    funcao?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cpf" | "senha" | "nome" | "tel" | "email" | "funcao", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Funcionario$salasArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      salas: Prisma.$SalaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cpf: string
      senha: string
      nome: string
      tel: string
      email: string
      funcao: $Enums.Funcao
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.findMany({ select: { cpf: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { cpf: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `cpf`
     * const funcionarioWithCpfOnly = await prisma.funcionario.updateManyAndReturn({
     *   select: { cpf: true },
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
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends Funcionario$salasArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly cpf: FieldRef<"Funcionario", 'String'>
    readonly senha: FieldRef<"Funcionario", 'String'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly tel: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly funcao: FieldRef<"Funcionario", 'Funcao'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.salas
   */
  export type Funcionario$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    clienteId: string | null
    funcionarioId: string | null
    status: $Enums.StatusSala | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    clienteId: string | null
    funcionarioId: string | null
    status: $Enums.StatusSala | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    nome: number
    clienteId: number
    funcionarioId: number
    status: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    nome?: true
    clienteId?: true
    funcionarioId?: true
    status?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    nome?: true
    clienteId?: true
    funcionarioId?: true
    status?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    nome?: true
    clienteId?: true
    funcionarioId?: true
    status?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    nome: string
    clienteId: string
    funcionarioId: string
    status: $Enums.StatusSala
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    clienteId?: boolean
    funcionarioId?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
    mensagens?: boolean | Sala$mensagensArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    clienteId?: boolean
    funcionarioId?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    clienteId?: boolean
    funcionarioId?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    nome?: boolean
    clienteId?: boolean
    funcionarioId?: boolean
    status?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "clienteId" | "funcionarioId" | "status", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
    mensagens?: boolean | Sala$mensagensArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    funcionario?: boolean | FuncionarioDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      funcionario: Prisma.$FuncionarioPayload<ExtArgs>
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      clienteId: string
      funcionarioId: string
      status: $Enums.StatusSala
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
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
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends FuncionarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionarioDefaultArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensagens<T extends Sala$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Sala$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'Int'>
    readonly nome: FieldRef<"Sala", 'String'>
    readonly clienteId: FieldRef<"Sala", 'String'>
    readonly funcionarioId: FieldRef<"Sala", 'String'>
    readonly status: FieldRef<"Sala", 'StatusSala'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.mensagens
   */
  export type Sala$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id: number | null
    salaId: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id: number | null
    salaId: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id: number | null
    msg: string | null
    salaId: number | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: number | null
    msg: string | null
    salaId: number | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    msg: number
    salaId: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id?: true
    salaId?: true
  }

  export type MensagemSumAggregateInputType = {
    id?: true
    salaId?: true
  }

  export type MensagemMinAggregateInputType = {
    id?: true
    msg?: true
    salaId?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    msg?: true
    salaId?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    msg?: true
    salaId?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: number
    msg: string
    salaId: number
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msg?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msg?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    msg?: boolean
    salaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    msg?: boolean
    salaId?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "msg" | "salaId", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      msg: string
      salaId: number
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
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
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'Int'>
    readonly msg: FieldRef<"Mensagem", 'String'>
    readonly salaId: FieldRef<"Mensagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
  }


  /**
   * Model Agendamento
   */

  export type AggregateAgendamento = {
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  export type AgendamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type AgendamentoSumAggregateOutputType = {
    id: number | null
  }

  export type AgendamentoMinAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    clienteCpf: string | null
    status: $Enums.Status | null
  }

  export type AgendamentoMaxAggregateOutputType = {
    id: number | null
    data: Date | null
    descricao: string | null
    clienteCpf: string | null
    status: $Enums.Status | null
  }

  export type AgendamentoCountAggregateOutputType = {
    id: number
    data: number
    descricao: number
    clienteCpf: number
    status: number
    _all: number
  }


  export type AgendamentoAvgAggregateInputType = {
    id?: true
  }

  export type AgendamentoSumAggregateInputType = {
    id?: true
  }

  export type AgendamentoMinAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    clienteCpf?: true
    status?: true
  }

  export type AgendamentoMaxAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    clienteCpf?: true
    status?: true
  }

  export type AgendamentoCountAggregateInputType = {
    id?: true
    data?: true
    descricao?: true
    clienteCpf?: true
    status?: true
    _all?: true
  }

  export type AgendamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamento to aggregate.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agendamentos
    **/
    _count?: true | AgendamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendamentoMaxAggregateInputType
  }

  export type GetAgendamentoAggregateType<T extends AgendamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateAgendamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgendamento[P]>
      : GetScalarType<T[P], AggregateAgendamento[P]>
  }




  export type AgendamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendamentoWhereInput
    orderBy?: AgendamentoOrderByWithAggregationInput | AgendamentoOrderByWithAggregationInput[]
    by: AgendamentoScalarFieldEnum[] | AgendamentoScalarFieldEnum
    having?: AgendamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendamentoCountAggregateInputType | true
    _avg?: AgendamentoAvgAggregateInputType
    _sum?: AgendamentoSumAggregateInputType
    _min?: AgendamentoMinAggregateInputType
    _max?: AgendamentoMaxAggregateInputType
  }

  export type AgendamentoGroupByOutputType = {
    id: number
    data: Date
    descricao: string
    clienteCpf: string
    status: $Enums.Status
    _count: AgendamentoCountAggregateOutputType | null
    _avg: AgendamentoAvgAggregateOutputType | null
    _sum: AgendamentoSumAggregateOutputType | null
    _min: AgendamentoMinAggregateOutputType | null
    _max: AgendamentoMaxAggregateOutputType | null
  }

  type GetAgendamentoGroupByPayload<T extends AgendamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
            : GetScalarType<T[P], AgendamentoGroupByOutputType[P]>
        }
      >
    >


  export type AgendamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    clienteCpf?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    clienteCpf?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    descricao?: boolean
    clienteCpf?: boolean
    status?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agendamento"]>

  export type AgendamentoSelectScalar = {
    id?: boolean
    data?: boolean
    descricao?: boolean
    clienteCpf?: boolean
    status?: boolean
  }

  export type AgendamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "descricao" | "clienteCpf" | "status", ExtArgs["result"]["agendamento"]>
  export type AgendamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type AgendamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $AgendamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agendamento"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Date
      descricao: string
      clienteCpf: string
      status: $Enums.Status
    }, ExtArgs["result"]["agendamento"]>
    composites: {}
  }

  type AgendamentoGetPayload<S extends boolean | null | undefined | AgendamentoDefaultArgs> = $Result.GetResult<Prisma.$AgendamentoPayload, S>

  type AgendamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendamentoCountAggregateInputType | true
    }

  export interface AgendamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agendamento'], meta: { name: 'Agendamento' } }
    /**
     * Find zero or one Agendamento that matches the filter.
     * @param {AgendamentoFindUniqueArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendamentoFindUniqueArgs>(args: SelectSubset<T, AgendamentoFindUniqueArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agendamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendamentoFindUniqueOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendamentoFindFirstArgs>(args?: SelectSubset<T, AgendamentoFindFirstArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agendamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindFirstOrThrowArgs} args - Arguments to find a Agendamento
     * @example
     * // Get one Agendamento
     * const agendamento = await prisma.agendamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agendamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agendamentos
     * const agendamentos = await prisma.agendamento.findMany()
     * 
     * // Get first 10 Agendamentos
     * const agendamentos = await prisma.agendamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendamentoFindManyArgs>(args?: SelectSubset<T, AgendamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agendamento.
     * @param {AgendamentoCreateArgs} args - Arguments to create a Agendamento.
     * @example
     * // Create one Agendamento
     * const Agendamento = await prisma.agendamento.create({
     *   data: {
     *     // ... data to create a Agendamento
     *   }
     * })
     * 
     */
    create<T extends AgendamentoCreateArgs>(args: SelectSubset<T, AgendamentoCreateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agendamentos.
     * @param {AgendamentoCreateManyArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendamentoCreateManyArgs>(args?: SelectSubset<T, AgendamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agendamentos and returns the data saved in the database.
     * @param {AgendamentoCreateManyAndReturnArgs} args - Arguments to create many Agendamentos.
     * @example
     * // Create many Agendamentos
     * const agendamento = await prisma.agendamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agendamento.
     * @param {AgendamentoDeleteArgs} args - Arguments to delete one Agendamento.
     * @example
     * // Delete one Agendamento
     * const Agendamento = await prisma.agendamento.delete({
     *   where: {
     *     // ... filter to delete one Agendamento
     *   }
     * })
     * 
     */
    delete<T extends AgendamentoDeleteArgs>(args: SelectSubset<T, AgendamentoDeleteArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agendamento.
     * @param {AgendamentoUpdateArgs} args - Arguments to update one Agendamento.
     * @example
     * // Update one Agendamento
     * const agendamento = await prisma.agendamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendamentoUpdateArgs>(args: SelectSubset<T, AgendamentoUpdateArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agendamentos.
     * @param {AgendamentoDeleteManyArgs} args - Arguments to filter Agendamentos to delete.
     * @example
     * // Delete a few Agendamentos
     * const { count } = await prisma.agendamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendamentoDeleteManyArgs>(args?: SelectSubset<T, AgendamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendamentoUpdateManyArgs>(args: SelectSubset<T, AgendamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agendamentos and returns the data updated in the database.
     * @param {AgendamentoUpdateManyAndReturnArgs} args - Arguments to update many Agendamentos.
     * @example
     * // Update many Agendamentos
     * const agendamento = await prisma.agendamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agendamentos and only return the `id`
     * const agendamentoWithIdOnly = await prisma.agendamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgendamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agendamento.
     * @param {AgendamentoUpsertArgs} args - Arguments to update or create a Agendamento.
     * @example
     * // Update or create a Agendamento
     * const agendamento = await prisma.agendamento.upsert({
     *   create: {
     *     // ... data to create a Agendamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agendamento we want to update
     *   }
     * })
     */
    upsert<T extends AgendamentoUpsertArgs>(args: SelectSubset<T, AgendamentoUpsertArgs<ExtArgs>>): Prisma__AgendamentoClient<$Result.GetResult<Prisma.$AgendamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agendamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoCountArgs} args - Arguments to filter Agendamentos to count.
     * @example
     * // Count the number of Agendamentos
     * const count = await prisma.agendamento.count({
     *   where: {
     *     // ... the filter for the Agendamentos we want to count
     *   }
     * })
    **/
    count<T extends AgendamentoCountArgs>(
      args?: Subset<T, AgendamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendamentoAggregateArgs>(args: Subset<T, AgendamentoAggregateArgs>): Prisma.PrismaPromise<GetAgendamentoAggregateType<T>>

    /**
     * Group by Agendamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendamentoGroupByArgs} args - Group by arguments.
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
      T extends AgendamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendamentoGroupByArgs['orderBy'] }
        : { orderBy?: AgendamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agendamento model
   */
  readonly fields: AgendamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agendamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agendamento model
   */
  interface AgendamentoFieldRefs {
    readonly id: FieldRef<"Agendamento", 'Int'>
    readonly data: FieldRef<"Agendamento", 'DateTime'>
    readonly descricao: FieldRef<"Agendamento", 'String'>
    readonly clienteCpf: FieldRef<"Agendamento", 'String'>
    readonly status: FieldRef<"Agendamento", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * Agendamento findUnique
   */
  export type AgendamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findUniqueOrThrow
   */
  export type AgendamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento findFirst
   */
  export type AgendamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findFirstOrThrow
   */
  export type AgendamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamento to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agendamentos.
     */
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento findMany
   */
  export type AgendamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter, which Agendamentos to fetch.
     */
    where?: AgendamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agendamentos to fetch.
     */
    orderBy?: AgendamentoOrderByWithRelationInput | AgendamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agendamentos.
     */
    cursor?: AgendamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agendamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agendamentos.
     */
    skip?: number
    distinct?: AgendamentoScalarFieldEnum | AgendamentoScalarFieldEnum[]
  }

  /**
   * Agendamento create
   */
  export type AgendamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Agendamento.
     */
    data: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
  }

  /**
   * Agendamento createMany
   */
  export type AgendamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agendamento createManyAndReturn
   */
  export type AgendamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Agendamentos.
     */
    data: AgendamentoCreateManyInput | AgendamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento update
   */
  export type AgendamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Agendamento.
     */
    data: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
    /**
     * Choose, which Agendamento to update.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento updateMany
   */
  export type AgendamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
  }

  /**
   * Agendamento updateManyAndReturn
   */
  export type AgendamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * The data used to update Agendamentos.
     */
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyInput>
    /**
     * Filter which Agendamentos to update
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agendamento upsert
   */
  export type AgendamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Agendamento to update in case it exists.
     */
    where: AgendamentoWhereUniqueInput
    /**
     * In case the Agendamento found by the `where` argument doesn't exist, create a new Agendamento with this data.
     */
    create: XOR<AgendamentoCreateInput, AgendamentoUncheckedCreateInput>
    /**
     * In case the Agendamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendamentoUpdateInput, AgendamentoUncheckedUpdateInput>
  }

  /**
   * Agendamento delete
   */
  export type AgendamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
    /**
     * Filter which Agendamento to delete.
     */
    where: AgendamentoWhereUniqueInput
  }

  /**
   * Agendamento deleteMany
   */
  export type AgendamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agendamentos to delete
     */
    where?: AgendamentoWhereInput
    /**
     * Limit how many Agendamentos to delete.
     */
    limit?: number
  }

  /**
   * Agendamento without action
   */
  export type AgendamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agendamento
     */
    select?: AgendamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agendamento
     */
    omit?: AgendamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendamentoInclude<ExtArgs> | null
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


  export const ClienteScalarFieldEnum: {
    cpf: 'cpf',
    senha: 'senha',
    nome: 'nome',
    tel: 'tel',
    email: 'email',
    plano: 'plano',
    vencimento: 'vencimento'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const FuncionarioScalarFieldEnum: {
    cpf: 'cpf',
    senha: 'senha',
    nome: 'nome',
    tel: 'tel',
    email: 'email',
    funcao: 'funcao'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    clienteId: 'clienteId',
    funcionarioId: 'funcionarioId',
    status: 'status'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    msg: 'msg',
    salaId: 'salaId'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


  export const AgendamentoScalarFieldEnum: {
    id: 'id',
    data: 'data',
    descricao: 'descricao',
    clienteCpf: 'clienteCpf',
    status: 'status'
  };

  export type AgendamentoScalarFieldEnum = (typeof AgendamentoScalarFieldEnum)[keyof typeof AgendamentoScalarFieldEnum]


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
   * Reference to a field of type 'Plano'
   */
  export type EnumPlanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plano'>
    


  /**
   * Reference to a field of type 'Plano[]'
   */
  export type ListEnumPlanoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plano[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Funcao'
   */
  export type EnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao'>
    


  /**
   * Reference to a field of type 'Funcao[]'
   */
  export type ListEnumFuncaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Funcao[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatusSala'
   */
  export type EnumStatusSalaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSala'>
    


  /**
   * Reference to a field of type 'StatusSala[]'
   */
  export type ListEnumStatusSalaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSala[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cpf?: StringFilter<"Cliente"> | string
    senha?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    tel?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    plano?: EnumPlanoFilter<"Cliente"> | $Enums.Plano
    vencimento?: FloatFilter<"Cliente"> | number
    salas?: SalaListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    plano?: SortOrder
    vencimento?: SortOrder
    salas?: SalaOrderByRelationAggregateInput
    agendamentos?: AgendamentoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    senha?: StringFilter<"Cliente"> | string
    nome?: StringFilter<"Cliente"> | string
    tel?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    plano?: EnumPlanoFilter<"Cliente"> | $Enums.Plano
    vencimento?: FloatFilter<"Cliente"> | number
    salas?: SalaListRelationFilter
    agendamentos?: AgendamentoListRelationFilter
  }, "cpf">

  export type ClienteOrderByWithAggregationInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    plano?: SortOrder
    vencimento?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    senha?: StringWithAggregatesFilter<"Cliente"> | string
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    tel?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    plano?: EnumPlanoWithAggregatesFilter<"Cliente"> | $Enums.Plano
    vencimento?: FloatWithAggregatesFilter<"Cliente"> | number
  }

  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    cpf?: StringFilter<"Funcionario"> | string
    senha?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    tel?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    funcao?: EnumFuncaoFilter<"Funcionario"> | $Enums.Funcao
    salas?: SalaListRelationFilter
  }

  export type FuncionarioOrderByWithRelationInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    funcao?: SortOrder
    salas?: SalaOrderByRelationAggregateInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    cpf?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    senha?: StringFilter<"Funcionario"> | string
    nome?: StringFilter<"Funcionario"> | string
    tel?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    funcao?: EnumFuncaoFilter<"Funcionario"> | $Enums.Funcao
    salas?: SalaListRelationFilter
  }, "cpf">

  export type FuncionarioOrderByWithAggregationInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    funcao?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    cpf?: StringWithAggregatesFilter<"Funcionario"> | string
    senha?: StringWithAggregatesFilter<"Funcionario"> | string
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    tel?: StringWithAggregatesFilter<"Funcionario"> | string
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    funcao?: EnumFuncaoWithAggregatesFilter<"Funcionario"> | $Enums.Funcao
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: IntFilter<"Sala"> | number
    nome?: StringFilter<"Sala"> | string
    clienteId?: StringFilter<"Sala"> | string
    funcionarioId?: StringFilter<"Sala"> | string
    status?: EnumStatusSalaFilter<"Sala"> | $Enums.StatusSala
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    mensagens?: MensagemListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    clienteId?: SortOrder
    funcionarioId?: SortOrder
    status?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    funcionario?: FuncionarioOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    nome?: StringFilter<"Sala"> | string
    clienteId?: StringFilter<"Sala"> | string
    funcionarioId?: StringFilter<"Sala"> | string
    status?: EnumStatusSalaFilter<"Sala"> | $Enums.StatusSala
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    funcionario?: XOR<FuncionarioScalarRelationFilter, FuncionarioWhereInput>
    mensagens?: MensagemListRelationFilter
  }, "id">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    clienteId?: SortOrder
    funcionarioId?: SortOrder
    status?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sala"> | number
    nome?: StringWithAggregatesFilter<"Sala"> | string
    clienteId?: StringWithAggregatesFilter<"Sala"> | string
    funcionarioId?: StringWithAggregatesFilter<"Sala"> | string
    status?: EnumStatusSalaWithAggregatesFilter<"Sala"> | $Enums.StatusSala
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    msg?: StringFilter<"Mensagem"> | string
    salaId?: IntFilter<"Mensagem"> | number
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    msg?: SortOrder
    salaId?: SortOrder
    sala?: SalaOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    msg?: StringFilter<"Mensagem"> | string
    salaId?: IntFilter<"Mensagem"> | number
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    msg?: SortOrder
    salaId?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _avg?: MensagemAvgOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
    _sum?: MensagemSumOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensagem"> | number
    msg?: StringWithAggregatesFilter<"Mensagem"> | string
    salaId?: IntWithAggregatesFilter<"Mensagem"> | number
  }

  export type AgendamentoWhereInput = {
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    id?: IntFilter<"Agendamento"> | number
    data?: DateTimeFilter<"Agendamento"> | Date | string
    descricao?: StringFilter<"Agendamento"> | string
    clienteCpf?: StringFilter<"Agendamento"> | string
    status?: EnumStatusFilter<"Agendamento"> | $Enums.Status
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type AgendamentoOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    clienteCpf?: SortOrder
    status?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
  }

  export type AgendamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AgendamentoWhereInput | AgendamentoWhereInput[]
    OR?: AgendamentoWhereInput[]
    NOT?: AgendamentoWhereInput | AgendamentoWhereInput[]
    data?: DateTimeFilter<"Agendamento"> | Date | string
    descricao?: StringFilter<"Agendamento"> | string
    clienteCpf?: StringFilter<"Agendamento"> | string
    status?: EnumStatusFilter<"Agendamento"> | $Enums.Status
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type AgendamentoOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    clienteCpf?: SortOrder
    status?: SortOrder
    _count?: AgendamentoCountOrderByAggregateInput
    _avg?: AgendamentoAvgOrderByAggregateInput
    _max?: AgendamentoMaxOrderByAggregateInput
    _min?: AgendamentoMinOrderByAggregateInput
    _sum?: AgendamentoSumOrderByAggregateInput
  }

  export type AgendamentoScalarWhereWithAggregatesInput = {
    AND?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    OR?: AgendamentoScalarWhereWithAggregatesInput[]
    NOT?: AgendamentoScalarWhereWithAggregatesInput | AgendamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Agendamento"> | number
    data?: DateTimeWithAggregatesFilter<"Agendamento"> | Date | string
    descricao?: StringWithAggregatesFilter<"Agendamento"> | string
    clienteCpf?: StringWithAggregatesFilter<"Agendamento"> | string
    status?: EnumStatusWithAggregatesFilter<"Agendamento"> | $Enums.Status
  }

  export type ClienteCreateInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    salas?: SalaCreateNestedManyWithoutClienteInput
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    salas?: SalaUncheckedCreateNestedManyWithoutClienteInput
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    salas?: SalaUpdateManyWithoutClienteNestedInput
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    salas?: SalaUncheckedUpdateManyWithoutClienteNestedInput
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
  }

  export type ClienteUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
  }

  export type ClienteUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
  }

  export type FuncionarioCreateInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
    salas?: SalaCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
    salas?: SalaUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    salas?: SalaUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
    salas?: SalaUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateManyInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
  }

  export type FuncionarioUpdateManyMutationInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
  }

  export type SalaCreateInput = {
    nome: string
    status: $Enums.StatusSala
    cliente: ClienteCreateNestedOneWithoutSalasInput
    funcionario: FuncionarioCreateNestedOneWithoutSalasInput
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    id?: number
    nome: string
    clienteId: string
    funcionarioId: string
    status: $Enums.StatusSala
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    cliente?: ClienteUpdateOneRequiredWithoutSalasNestedInput
    funcionario?: FuncionarioUpdateOneRequiredWithoutSalasNestedInput
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: number
    nome: string
    clienteId: string
    funcionarioId: string
    status: $Enums.StatusSala
  }

  export type SalaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
  }

  export type MensagemCreateInput = {
    msg: string
    sala: SalaCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: number
    msg: string
    salaId: number
  }

  export type MensagemUpdateInput = {
    msg?: StringFieldUpdateOperationsInput | string
    sala?: SalaUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    salaId?: IntFieldUpdateOperationsInput | number
  }

  export type MensagemCreateManyInput = {
    id?: number
    msg: string
    salaId: number
  }

  export type MensagemUpdateManyMutationInput = {
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
    salaId?: IntFieldUpdateOperationsInput | number
  }

  export type AgendamentoCreateInput = {
    data: Date | string
    descricao: string
    status?: $Enums.Status
    cliente: ClienteCreateNestedOneWithoutAgendamentosInput
  }

  export type AgendamentoUncheckedCreateInput = {
    id?: number
    data: Date | string
    descricao: string
    clienteCpf: string
    status?: $Enums.Status
  }

  export type AgendamentoUpdateInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    cliente?: ClienteUpdateOneRequiredWithoutAgendamentosNestedInput
  }

  export type AgendamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AgendamentoCreateManyInput = {
    id?: number
    data: Date | string
    descricao: string
    clienteCpf: string
    status?: $Enums.Status
  }

  export type AgendamentoUpdateManyMutationInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AgendamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    clienteCpf?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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

  export type EnumPlanoFilter<$PrismaModel = never> = {
    equals?: $Enums.Plano | EnumPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanoFilter<$PrismaModel> | $Enums.Plano
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type AgendamentoListRelationFilter = {
    every?: AgendamentoWhereInput
    some?: AgendamentoWhereInput
    none?: AgendamentoWhereInput
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgendamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    plano?: SortOrder
    vencimento?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    vencimento?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    plano?: SortOrder
    vencimento?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    plano?: SortOrder
    vencimento?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    vencimento?: SortOrder
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

  export type EnumPlanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plano | EnumPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanoWithAggregatesFilter<$PrismaModel> | $Enums.Plano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanoFilter<$PrismaModel>
    _max?: NestedEnumPlanoFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type FuncionarioCountOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    funcao?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    funcao?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    cpf?: SortOrder
    senha?: SortOrder
    nome?: SortOrder
    tel?: SortOrder
    email?: SortOrder
    funcao?: SortOrder
  }

  export type EnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStatusSalaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSala | EnumStatusSalaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalaFilter<$PrismaModel> | $Enums.StatusSala
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type FuncionarioScalarRelationFilter = {
    is?: FuncionarioWhereInput
    isNot?: FuncionarioWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    clienteId?: SortOrder
    funcionarioId?: SortOrder
    status?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    clienteId?: SortOrder
    funcionarioId?: SortOrder
    status?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    clienteId?: SortOrder
    funcionarioId?: SortOrder
    status?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStatusSalaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSala | EnumStatusSalaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalaWithAggregatesFilter<$PrismaModel> | $Enums.StatusSala
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSalaFilter<$PrismaModel>
    _max?: NestedEnumStatusSalaFilter<$PrismaModel>
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
    salaId?: SortOrder
  }

  export type MensagemAvgOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
    salaId?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    msg?: SortOrder
    salaId?: SortOrder
  }

  export type MensagemSumOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type AgendamentoCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    clienteCpf?: SortOrder
    status?: SortOrder
  }

  export type AgendamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AgendamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    clienteCpf?: SortOrder
    status?: SortOrder
  }

  export type AgendamentoMinOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    descricao?: SortOrder
    clienteCpf?: SortOrder
    status?: SortOrder
  }

  export type AgendamentoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type SalaCreateNestedManyWithoutClienteInput = {
    create?: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput> | SalaCreateWithoutClienteInput[] | SalaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutClienteInput | SalaCreateOrConnectWithoutClienteInput[]
    createMany?: SalaCreateManyClienteInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type AgendamentoCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput> | SalaCreateWithoutClienteInput[] | SalaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutClienteInput | SalaCreateOrConnectWithoutClienteInput[]
    createMany?: SalaCreateManyClienteInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type AgendamentoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanoFieldUpdateOperationsInput = {
    set?: $Enums.Plano
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput> | SalaCreateWithoutClienteInput[] | SalaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutClienteInput | SalaCreateOrConnectWithoutClienteInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutClienteInput | SalaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: SalaCreateManyClienteInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutClienteInput | SalaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutClienteInput | SalaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type AgendamentoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type SalaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput> | SalaCreateWithoutClienteInput[] | SalaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutClienteInput | SalaCreateOrConnectWithoutClienteInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutClienteInput | SalaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: SalaCreateManyClienteInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutClienteInput | SalaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutClienteInput | SalaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput> | AgendamentoCreateWithoutClienteInput[] | AgendamentoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: AgendamentoCreateOrConnectWithoutClienteInput | AgendamentoCreateOrConnectWithoutClienteInput[]
    upsert?: AgendamentoUpsertWithWhereUniqueWithoutClienteInput | AgendamentoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: AgendamentoCreateManyClienteInputEnvelope
    set?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    disconnect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    delete?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    connect?: AgendamentoWhereUniqueInput | AgendamentoWhereUniqueInput[]
    update?: AgendamentoUpdateWithWhereUniqueWithoutClienteInput | AgendamentoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: AgendamentoUpdateManyWithWhereWithoutClienteInput | AgendamentoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
  }

  export type SalaCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput> | SalaCreateWithoutFuncionarioInput[] | SalaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutFuncionarioInput | SalaCreateOrConnectWithoutFuncionarioInput[]
    createMany?: SalaCreateManyFuncionarioInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput> | SalaCreateWithoutFuncionarioInput[] | SalaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutFuncionarioInput | SalaCreateOrConnectWithoutFuncionarioInput[]
    createMany?: SalaCreateManyFuncionarioInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type EnumFuncaoFieldUpdateOperationsInput = {
    set?: $Enums.Funcao
  }

  export type SalaUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput> | SalaCreateWithoutFuncionarioInput[] | SalaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutFuncionarioInput | SalaCreateOrConnectWithoutFuncionarioInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutFuncionarioInput | SalaUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: SalaCreateManyFuncionarioInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutFuncionarioInput | SalaUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutFuncionarioInput | SalaUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type SalaUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput> | SalaCreateWithoutFuncionarioInput[] | SalaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutFuncionarioInput | SalaCreateOrConnectWithoutFuncionarioInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutFuncionarioInput | SalaUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: SalaCreateManyFuncionarioInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutFuncionarioInput | SalaUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutFuncionarioInput | SalaUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutSalasInput = {
    create?: XOR<ClienteCreateWithoutSalasInput, ClienteUncheckedCreateWithoutSalasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutSalasInput
    connect?: ClienteWhereUniqueInput
  }

  export type FuncionarioCreateNestedOneWithoutSalasInput = {
    create?: XOR<FuncionarioCreateWithoutSalasInput, FuncionarioUncheckedCreateWithoutSalasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutSalasInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutSalaInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type EnumStatusSalaFieldUpdateOperationsInput = {
    set?: $Enums.StatusSala
  }

  export type ClienteUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<ClienteCreateWithoutSalasInput, ClienteUncheckedCreateWithoutSalasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutSalasInput
    upsert?: ClienteUpsertWithoutSalasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutSalasInput, ClienteUpdateWithoutSalasInput>, ClienteUncheckedUpdateWithoutSalasInput>
  }

  export type FuncionarioUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<FuncionarioCreateWithoutSalasInput, FuncionarioUncheckedCreateWithoutSalasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutSalasInput
    upsert?: FuncionarioUpsertWithoutSalasInput
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutSalasInput, FuncionarioUpdateWithoutSalasInput>, FuncionarioUncheckedUpdateWithoutSalasInput>
  }

  export type MensagemUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutSalaInput | MensagemUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutSalaInput | MensagemUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutSalaInput | MensagemUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MensagemUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput> | MensagemCreateWithoutSalaInput[] | MensagemUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutSalaInput | MensagemCreateOrConnectWithoutSalaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutSalaInput | MensagemUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: MensagemCreateManySalaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutSalaInput | MensagemUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutSalaInput | MensagemUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMensagensInput
    connect?: SalaWhereUniqueInput
  }

  export type SalaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: SalaCreateOrConnectWithoutMensagensInput
    upsert?: SalaUpsertWithoutMensagensInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutMensagensInput, SalaUpdateWithoutMensagensInput>, SalaUncheckedUpdateWithoutMensagensInput>
  }

  export type ClienteCreateNestedOneWithoutAgendamentosInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type ClienteUpdateOneRequiredWithoutAgendamentosNestedInput = {
    create?: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutAgendamentosInput
    upsert?: ClienteUpsertWithoutAgendamentosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutAgendamentosInput, ClienteUpdateWithoutAgendamentosInput>, ClienteUncheckedUpdateWithoutAgendamentosInput>
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

  export type NestedEnumPlanoFilter<$PrismaModel = never> = {
    equals?: $Enums.Plano | EnumPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanoFilter<$PrismaModel> | $Enums.Plano
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

  export type NestedEnumPlanoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plano | EnumPlanoFieldRefInput<$PrismaModel>
    in?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plano[] | ListEnumPlanoFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanoWithAggregatesFilter<$PrismaModel> | $Enums.Plano
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanoFilter<$PrismaModel>
    _max?: NestedEnumPlanoFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFuncaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoFilter<$PrismaModel> | $Enums.Funcao
  }

  export type NestedEnumFuncaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Funcao | EnumFuncaoFieldRefInput<$PrismaModel>
    in?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    notIn?: $Enums.Funcao[] | ListEnumFuncaoFieldRefInput<$PrismaModel>
    not?: NestedEnumFuncaoWithAggregatesFilter<$PrismaModel> | $Enums.Funcao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuncaoFilter<$PrismaModel>
    _max?: NestedEnumFuncaoFilter<$PrismaModel>
  }

  export type NestedEnumStatusSalaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSala | EnumStatusSalaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalaFilter<$PrismaModel> | $Enums.StatusSala
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumStatusSalaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSala | EnumStatusSalaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusSala[] | ListEnumStatusSalaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusSalaWithAggregatesFilter<$PrismaModel> | $Enums.StatusSala
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusSalaFilter<$PrismaModel>
    _max?: NestedEnumStatusSalaFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type SalaCreateWithoutClienteInput = {
    nome: string
    status: $Enums.StatusSala
    funcionario: FuncionarioCreateNestedOneWithoutSalasInput
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutClienteInput = {
    id?: number
    nome: string
    funcionarioId: string
    status: $Enums.StatusSala
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutClienteInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput>
  }

  export type SalaCreateManyClienteInputEnvelope = {
    data: SalaCreateManyClienteInput | SalaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendamentoCreateWithoutClienteInput = {
    data: Date | string
    descricao: string
    status?: $Enums.Status
  }

  export type AgendamentoUncheckedCreateWithoutClienteInput = {
    id?: number
    data: Date | string
    descricao: string
    status?: $Enums.Status
  }

  export type AgendamentoCreateOrConnectWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoCreateManyClienteInputEnvelope = {
    data: AgendamentoCreateManyClienteInput | AgendamentoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutClienteInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutClienteInput, SalaUncheckedUpdateWithoutClienteInput>
    create: XOR<SalaCreateWithoutClienteInput, SalaUncheckedCreateWithoutClienteInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutClienteInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutClienteInput, SalaUncheckedUpdateWithoutClienteInput>
  }

  export type SalaUpdateManyWithWhereWithoutClienteInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutClienteInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    id?: IntFilter<"Sala"> | number
    nome?: StringFilter<"Sala"> | string
    clienteId?: StringFilter<"Sala"> | string
    funcionarioId?: StringFilter<"Sala"> | string
    status?: EnumStatusSalaFilter<"Sala"> | $Enums.StatusSala
  }

  export type AgendamentoUpsertWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    update: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
    create: XOR<AgendamentoCreateWithoutClienteInput, AgendamentoUncheckedCreateWithoutClienteInput>
  }

  export type AgendamentoUpdateWithWhereUniqueWithoutClienteInput = {
    where: AgendamentoWhereUniqueInput
    data: XOR<AgendamentoUpdateWithoutClienteInput, AgendamentoUncheckedUpdateWithoutClienteInput>
  }

  export type AgendamentoUpdateManyWithWhereWithoutClienteInput = {
    where: AgendamentoScalarWhereInput
    data: XOR<AgendamentoUpdateManyMutationInput, AgendamentoUncheckedUpdateManyWithoutClienteInput>
  }

  export type AgendamentoScalarWhereInput = {
    AND?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    OR?: AgendamentoScalarWhereInput[]
    NOT?: AgendamentoScalarWhereInput | AgendamentoScalarWhereInput[]
    id?: IntFilter<"Agendamento"> | number
    data?: DateTimeFilter<"Agendamento"> | Date | string
    descricao?: StringFilter<"Agendamento"> | string
    clienteCpf?: StringFilter<"Agendamento"> | string
    status?: EnumStatusFilter<"Agendamento"> | $Enums.Status
  }

  export type SalaCreateWithoutFuncionarioInput = {
    nome: string
    status: $Enums.StatusSala
    cliente: ClienteCreateNestedOneWithoutSalasInput
    mensagens?: MensagemCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    nome: string
    clienteId: string
    status: $Enums.StatusSala
    mensagens?: MensagemUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutFuncionarioInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput>
  }

  export type SalaCreateManyFuncionarioInputEnvelope = {
    data: SalaCreateManyFuncionarioInput | SalaCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutFuncionarioInput, SalaUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<SalaCreateWithoutFuncionarioInput, SalaUncheckedCreateWithoutFuncionarioInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutFuncionarioInput, SalaUncheckedUpdateWithoutFuncionarioInput>
  }

  export type SalaUpdateManyWithWhereWithoutFuncionarioInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type ClienteCreateWithoutSalasInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    agendamentos?: AgendamentoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutSalasInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    agendamentos?: AgendamentoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutSalasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutSalasInput, ClienteUncheckedCreateWithoutSalasInput>
  }

  export type FuncionarioCreateWithoutSalasInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
  }

  export type FuncionarioUncheckedCreateWithoutSalasInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    funcao: $Enums.Funcao
  }

  export type FuncionarioCreateOrConnectWithoutSalasInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutSalasInput, FuncionarioUncheckedCreateWithoutSalasInput>
  }

  export type MensagemCreateWithoutSalaInput = {
    msg: string
  }

  export type MensagemUncheckedCreateWithoutSalaInput = {
    id?: number
    msg: string
  }

  export type MensagemCreateOrConnectWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput>
  }

  export type MensagemCreateManySalaInputEnvelope = {
    data: MensagemCreateManySalaInput | MensagemCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type ClienteUpsertWithoutSalasInput = {
    update: XOR<ClienteUpdateWithoutSalasInput, ClienteUncheckedUpdateWithoutSalasInput>
    create: XOR<ClienteCreateWithoutSalasInput, ClienteUncheckedCreateWithoutSalasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutSalasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutSalasInput, ClienteUncheckedUpdateWithoutSalasInput>
  }

  export type ClienteUpdateWithoutSalasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutSalasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    agendamentos?: AgendamentoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type FuncionarioUpsertWithoutSalasInput = {
    update: XOR<FuncionarioUpdateWithoutSalasInput, FuncionarioUncheckedUpdateWithoutSalasInput>
    create: XOR<FuncionarioCreateWithoutSalasInput, FuncionarioUncheckedCreateWithoutSalasInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutSalasInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutSalasInput, FuncionarioUncheckedUpdateWithoutSalasInput>
  }

  export type FuncionarioUpdateWithoutSalasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
  }

  export type FuncionarioUncheckedUpdateWithoutSalasInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    funcao?: EnumFuncaoFieldUpdateOperationsInput | $Enums.Funcao
  }

  export type MensagemUpsertWithWhereUniqueWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutSalaInput, MensagemUncheckedUpdateWithoutSalaInput>
    create: XOR<MensagemCreateWithoutSalaInput, MensagemUncheckedCreateWithoutSalaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutSalaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutSalaInput, MensagemUncheckedUpdateWithoutSalaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutSalaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutSalaInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    msg?: StringFilter<"Mensagem"> | string
    salaId?: IntFilter<"Mensagem"> | number
  }

  export type SalaCreateWithoutMensagensInput = {
    nome: string
    status: $Enums.StatusSala
    cliente: ClienteCreateNestedOneWithoutSalasInput
    funcionario: FuncionarioCreateNestedOneWithoutSalasInput
  }

  export type SalaUncheckedCreateWithoutMensagensInput = {
    id?: number
    nome: string
    clienteId: string
    funcionarioId: string
    status: $Enums.StatusSala
  }

  export type SalaCreateOrConnectWithoutMensagensInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
  }

  export type SalaUpsertWithoutMensagensInput = {
    update: XOR<SalaUpdateWithoutMensagensInput, SalaUncheckedUpdateWithoutMensagensInput>
    create: XOR<SalaCreateWithoutMensagensInput, SalaUncheckedCreateWithoutMensagensInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutMensagensInput, SalaUncheckedUpdateWithoutMensagensInput>
  }

  export type SalaUpdateWithoutMensagensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    cliente?: ClienteUpdateOneRequiredWithoutSalasNestedInput
    funcionario?: FuncionarioUpdateOneRequiredWithoutSalasNestedInput
  }

  export type SalaUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
  }

  export type ClienteCreateWithoutAgendamentosInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    salas?: SalaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutAgendamentosInput = {
    cpf: string
    senha: string
    nome: string
    tel: string
    email: string
    plano: $Enums.Plano
    vencimento: number
    salas?: SalaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutAgendamentosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
  }

  export type ClienteUpsertWithoutAgendamentosInput = {
    update: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
    create: XOR<ClienteCreateWithoutAgendamentosInput, ClienteUncheckedCreateWithoutAgendamentosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutAgendamentosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutAgendamentosInput, ClienteUncheckedUpdateWithoutAgendamentosInput>
  }

  export type ClienteUpdateWithoutAgendamentosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    salas?: SalaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutAgendamentosInput = {
    cpf?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    tel?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    plano?: EnumPlanoFieldUpdateOperationsInput | $Enums.Plano
    vencimento?: FloatFieldUpdateOperationsInput | number
    salas?: SalaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type SalaCreateManyClienteInput = {
    id?: number
    nome: string
    funcionarioId: string
    status: $Enums.StatusSala
  }

  export type AgendamentoCreateManyClienteInput = {
    id?: number
    data: Date | string
    descricao: string
    status?: $Enums.Status
  }

  export type SalaUpdateWithoutClienteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    funcionario?: FuncionarioUpdateOneRequiredWithoutSalasNestedInput
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    funcionarioId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
  }

  export type AgendamentoUpdateWithoutClienteInput = {
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AgendamentoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type AgendamentoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    descricao?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type SalaCreateManyFuncionarioInput = {
    id?: number
    nome: string
    clienteId: string
    status: $Enums.StatusSala
  }

  export type SalaUpdateWithoutFuncionarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    cliente?: ClienteUpdateOneRequiredWithoutSalasNestedInput
    mensagens?: MensagemUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
    mensagens?: MensagemUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    clienteId?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusSalaFieldUpdateOperationsInput | $Enums.StatusSala
  }

  export type MensagemCreateManySalaInput = {
    id?: number
    msg: string
  }

  export type MensagemUpdateWithoutSalaInput = {
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type MensagemUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
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