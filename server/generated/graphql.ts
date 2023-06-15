/* eslint-disable @typescript-eslint/ban-types */
import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
}

export type ErrorType = {
  __typename?: 'ErrorType'
  code: Scalars['String']
  message: Scalars['String']
}

export type FoodCategoryPayload = {
  __typename?: 'FoodCategoryPayload'
  error?: Maybe<ErrorType>
  food?: Maybe<FoodCategoryType>
}

export type FoodCategoryType = {
  __typename?: 'FoodCategoryType'
  _id: Scalars['ID']
  name: Scalars['String']
}

export type FoodItemPayload = {
  __typename?: 'FoodItemPayload'
  error?: Maybe<ErrorType>
  food?: Maybe<FoodItemType>
}

export type FoodItemType = {
  __typename?: 'FoodItemType'
  _id: Scalars['ID']
  category?: Maybe<FoodCategoryType>
  name: Scalars['String']
}

export type FoodMenuType = {
  __typename?: 'FoodMenuType'
  items?: Maybe<Array<Maybe<FoodItemType>>>
}

export type Muttaion = {
  __typename?: 'Muttaion'
  addFoodCategory?: Maybe<FoodCategoryPayload>
  addFoodItem?: Maybe<FoodItemPayload>
  createRoom?: Maybe<RoomPayload>
  placeOrder?: Maybe<OrderPlacedType>
  signUp?: Maybe<SignupPayloadType>
  verifyUser?: Maybe<SignupPayloadType>
}

export type MuttaionAddFoodCategoryArgs = {
  name: Scalars['String']
}

export type MuttaionAddFoodItemArgs = {
  categoryId: Scalars['ID']
  name: Scalars['String']
}

export type MuttaionCreateRoomArgs = {
  name?: InputMaybe<RoomInputType>
}

export type MuttaionPlaceOrderArgs = {
  input?: InputMaybe<Array<InputMaybe<OrderPlacedInputType>>>
}

export type MuttaionSignUpArgs = {
  input?: InputMaybe<SignupInputType>
}

export type MuttaionVerifyUserArgs = {
  email: Scalars['String']
  otp: Scalars['Int']
}

export type OtpType = {
  __typename?: 'OTPType'
  createdAt?: Maybe<Scalars['DateTime']>
  status?: Maybe<Scalars['Boolean']>
  value?: Maybe<Scalars['Int']>
}

export type OrderPlacedInputType = {
  itemId: Scalars['ID']
  quantity: Scalars['Int']
}

export type OrderPlacedType = {
  __typename?: 'OrderPlacedType'
  item?: Maybe<Array<Maybe<FoodItemType>>>
  message?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  allRooms?: Maybe<RoomPayload>
  foodMenu: FoodMenuType
}

export type RoomInputType = {
  name: Scalars['String']
}

export type RoomPayload = {
  __typename?: 'RoomPayload'
  error?: Maybe<ErrorType>
  room?: Maybe<RoomType>
}

export type RoomType = {
  __typename?: 'RoomType'
  id: Scalars['ID']
  name: Scalars['String']
}

export type SignupInputType = {
  email?: InputMaybe<Scalars['String']>
  mobile?: InputMaybe<Scalars['String']>
  role: UserRoleEnum
}

export type SignupPayloadType = {
  __typename?: 'SignupPayloadType'
  error?: Maybe<ErrorType>
  success?: Maybe<Scalars['String']>
  user?: Maybe<UserType>
}

export enum UserRoleEnum {
  Admin = 'ADMIN',
  User = 'USER',
}

export type UserType = {
  __typename?: 'UserType'
  _id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  mobile?: Maybe<Scalars['String']>
  otp?: Maybe<OtpType>
  role?: Maybe<UserRoleEnum>
}

export type AdditionalEntityFields = {
  path?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>
  ErrorType: ResolverTypeWrapper<ErrorType>
  String: ResolverTypeWrapper<Scalars['String']>
  FoodCategoryPayload: ResolverTypeWrapper<FoodCategoryPayload>
  FoodCategoryType: ResolverTypeWrapper<FoodCategoryType>
  ID: ResolverTypeWrapper<Scalars['ID']>
  FoodItemPayload: ResolverTypeWrapper<FoodItemPayload>
  FoodItemType: ResolverTypeWrapper<FoodItemType>
  FoodMenuType: ResolverTypeWrapper<FoodMenuType>
  Muttaion: ResolverTypeWrapper<{}>
  Int: ResolverTypeWrapper<Scalars['Int']>
  OTPType: ResolverTypeWrapper<OtpType>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  OrderPlacedInputType: OrderPlacedInputType
  OrderPlacedType: ResolverTypeWrapper<OrderPlacedType>
  Query: ResolverTypeWrapper<{}>
  RoomInputType: RoomInputType
  RoomPayload: ResolverTypeWrapper<RoomPayload>
  RoomType: ResolverTypeWrapper<RoomType>
  SignupInputType: SignupInputType
  SignupPayloadType: ResolverTypeWrapper<SignupPayloadType>
  UserRoleEnum: UserRoleEnum
  UserType: ResolverTypeWrapper<UserType>
  AdditionalEntityFields: AdditionalEntityFields
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  DateTime: Scalars['DateTime']
  ErrorType: ErrorType
  String: Scalars['String']
  FoodCategoryPayload: FoodCategoryPayload
  FoodCategoryType: FoodCategoryType
  ID: Scalars['ID']
  FoodItemPayload: FoodItemPayload
  FoodItemType: FoodItemType
  FoodMenuType: FoodMenuType
  Muttaion: {}
  Int: Scalars['Int']
  OTPType: OtpType
  Boolean: Scalars['Boolean']
  OrderPlacedInputType: OrderPlacedInputType
  OrderPlacedType: OrderPlacedType
  Query: {}
  RoomInputType: RoomInputType
  RoomPayload: RoomPayload
  RoomType: RoomType
  SignupInputType: SignupInputType
  SignupPayloadType: SignupPayloadType
  UserType: UserType
  AdditionalEntityFields: AdditionalEntityFields
}

export type UnionDirectiveArgs = {
  discriminatorField?: Maybe<Scalars['String']>
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type UnionDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = UnionDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type AbstractEntityDirectiveArgs = {
  discriminatorField: Scalars['String']
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type AbstractEntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = AbstractEntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EntityDirectiveArgs = {
  embedded?: Maybe<Scalars['Boolean']>
  additionalFields?: Maybe<Array<Maybe<AdditionalEntityFields>>>
}

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type ColumnDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>
}

export type ColumnDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = ColumnDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type IdDirectiveArgs = {}

export type IdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = IdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type LinkDirectiveArgs = {
  overrideType?: Maybe<Scalars['String']>
}

export type LinkDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = LinkDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type EmbeddedDirectiveArgs = {}

export type EmbeddedDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EmbeddedDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type MapDirectiveArgs = {
  path: Scalars['String']
}

export type MapDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = MapDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type ErrorTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ErrorType'] = ResolversParentTypes['ErrorType'],
> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FoodCategoryPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FoodCategoryPayload'] = ResolversParentTypes['FoodCategoryPayload'],
> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>
  food?: Resolver<
    Maybe<ResolversTypes['FoodCategoryType']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FoodCategoryTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FoodCategoryType'] = ResolversParentTypes['FoodCategoryType'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FoodItemPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FoodItemPayload'] = ResolversParentTypes['FoodItemPayload'],
> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>
  food?: Resolver<
    Maybe<ResolversTypes['FoodItemType']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FoodItemTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FoodItemType'] = ResolversParentTypes['FoodItemType'],
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  category?: Resolver<
    Maybe<ResolversTypes['FoodCategoryType']>,
    ParentType,
    ContextType
  >
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type FoodMenuTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['FoodMenuType'] = ResolversParentTypes['FoodMenuType'],
> = {
  items?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FoodItemType']>>>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MuttaionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Muttaion'] = ResolversParentTypes['Muttaion'],
> = {
  addFoodCategory?: Resolver<
    Maybe<ResolversTypes['FoodCategoryPayload']>,
    ParentType,
    ContextType,
    RequireFields<MuttaionAddFoodCategoryArgs, 'name'>
  >
  addFoodItem?: Resolver<
    Maybe<ResolversTypes['FoodItemPayload']>,
    ParentType,
    ContextType,
    RequireFields<MuttaionAddFoodItemArgs, 'categoryId' | 'name'>
  >
  createRoom?: Resolver<
    Maybe<ResolversTypes['RoomPayload']>,
    ParentType,
    ContextType,
    Partial<MuttaionCreateRoomArgs>
  >
  placeOrder?: Resolver<
    Maybe<ResolversTypes['OrderPlacedType']>,
    ParentType,
    ContextType,
    Partial<MuttaionPlaceOrderArgs>
  >
  signUp?: Resolver<
    Maybe<ResolversTypes['SignupPayloadType']>,
    ParentType,
    ContextType,
    Partial<MuttaionSignUpArgs>
  >
  verifyUser?: Resolver<
    Maybe<ResolversTypes['SignupPayloadType']>,
    ParentType,
    ContextType,
    RequireFields<MuttaionVerifyUserArgs, 'email' | 'otp'>
  >
}

export type OtpTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OTPType'] = ResolversParentTypes['OTPType'],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >
  status?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  value?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type OrderPlacedTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['OrderPlacedType'] = ResolversParentTypes['OrderPlacedType'],
> = {
  item?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['FoodItemType']>>>,
    ParentType,
    ContextType
  >
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  allRooms?: Resolver<
    Maybe<ResolversTypes['RoomPayload']>,
    ParentType,
    ContextType
  >
  foodMenu?: Resolver<ResolversTypes['FoodMenuType'], ParentType, ContextType>
}

export type RoomPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RoomPayload'] = ResolversParentTypes['RoomPayload'],
> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>
  room?: Resolver<Maybe<ResolversTypes['RoomType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type RoomTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['RoomType'] = ResolversParentTypes['RoomType'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SignupPayloadTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['SignupPayloadType'] = ResolversParentTypes['SignupPayloadType'],
> = {
  error?: Resolver<Maybe<ResolversTypes['ErrorType']>, ParentType, ContextType>
  success?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  user?: Resolver<Maybe<ResolversTypes['UserType']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserTypeResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['UserType'] = ResolversParentTypes['UserType'],
> = {
  _id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  mobile?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  otp?: Resolver<Maybe<ResolversTypes['OTPType']>, ParentType, ContextType>
  role?: Resolver<
    Maybe<ResolversTypes['UserRoleEnum']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  DateTime?: GraphQLScalarType
  ErrorType?: ErrorTypeResolvers<ContextType>
  FoodCategoryPayload?: FoodCategoryPayloadResolvers<ContextType>
  FoodCategoryType?: FoodCategoryTypeResolvers<ContextType>
  FoodItemPayload?: FoodItemPayloadResolvers<ContextType>
  FoodItemType?: FoodItemTypeResolvers<ContextType>
  FoodMenuType?: FoodMenuTypeResolvers<ContextType>
  Muttaion?: MuttaionResolvers<ContextType>
  OTPType?: OtpTypeResolvers<ContextType>
  OrderPlacedType?: OrderPlacedTypeResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  RoomPayload?: RoomPayloadResolvers<ContextType>
  RoomType?: RoomTypeResolvers<ContextType>
  SignupPayloadType?: SignupPayloadTypeResolvers<ContextType>
  UserType?: UserTypeResolvers<ContextType>
}

export type DirectiveResolvers<ContextType = any> = {
  union?: UnionDirectiveResolver<any, any, ContextType>
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, ContextType>
  entity?: EntityDirectiveResolver<any, any, ContextType>
  column?: ColumnDirectiveResolver<any, any, ContextType>
  id?: IdDirectiveResolver<any, any, ContextType>
  link?: LinkDirectiveResolver<any, any, ContextType>
  embedded?: EmbeddedDirectiveResolver<any, any, ContextType>
  map?: MapDirectiveResolver<any, any, ContextType>
}

import { ObjectId } from 'mongodb'
