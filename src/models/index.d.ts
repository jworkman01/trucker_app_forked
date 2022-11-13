import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrdersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DriverMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CatalogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AdminMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SponsorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCart = {
  readonly id: string;
  readonly item?: string[] | null;
  readonly price: number;
  readonly orders?: Orders | null;
  readonly Driver?: Driver | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartOrdersId?: string | null;
  readonly cartDriverId?: string | null;
}

type LazyCart = {
  readonly id: string;
  readonly item?: string[] | null;
  readonly price: number;
  readonly orders: AsyncItem<Orders | undefined>;
  readonly Driver: AsyncItem<Driver | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartOrdersId?: string | null;
  readonly cartDriverId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart, CartMetaData>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

type EagerOrders = {
  readonly id: string;
  readonly price: number;
  readonly quantity: number;
  readonly Driver?: Driver | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordersDriverId?: string | null;
}

type LazyOrders = {
  readonly id: string;
  readonly price: number;
  readonly quantity: number;
  readonly Driver: AsyncItem<Driver | undefined>;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordersDriverId?: string | null;
}

export declare type Orders = LazyLoading extends LazyLoadingDisabled ? EagerOrders : LazyOrders

export declare const Orders: (new (init: ModelInit<Orders, OrdersMetaData>) => Orders) & {
  copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}

type EagerDriver = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly email: string;
  readonly passWd: string;
  readonly points?: number | null;
  readonly phoneNumber?: string | null;
  readonly sponsorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriver = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly email: string;
  readonly passWd: string;
  readonly points?: number | null;
  readonly phoneNumber?: string | null;
  readonly sponsorID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Driver = LazyLoading extends LazyLoadingDisabled ? EagerDriver : LazyDriver

export declare const Driver: (new (init: ModelInit<Driver, DriverMetaData>) => Driver) & {
  copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

type EagerProduct = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly desc: string;
  readonly catalog_ID: string;
  readonly Catalog_Product_ID: string;
  readonly catalogID: string;
  readonly ordersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly id: string;
  readonly name: string;
  readonly price: string;
  readonly desc: string;
  readonly catalog_ID: string;
  readonly Catalog_Product_ID: string;
  readonly catalogID: string;
  readonly ordersID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product, ProductMetaData>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

type EagerCatalog = {
  readonly id: string;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCatalog = {
  readonly id: string;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Catalog = LazyLoading extends LazyLoadingDisabled ? EagerCatalog : LazyCatalog

export declare const Catalog: (new (init: ModelInit<Catalog, CatalogMetaData>) => Catalog) & {
  copyOf(source: Catalog, mutator: (draft: MutableModel<Catalog, CatalogMetaData>) => MutableModel<Catalog, CatalogMetaData> | void): Catalog;
}

type EagerAdmin = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly email: string;
  readonly passWd: string;
  readonly phoneNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmin = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly email: string;
  readonly passWd: string;
  readonly phoneNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admin = LazyLoading extends LazyLoadingDisabled ? EagerAdmin : LazyAdmin

export declare const Admin: (new (init: ModelInit<Admin, AdminMetaData>) => Admin) & {
  copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

type EagerSponsor = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly passWd: string;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly accessLevel: string;
  readonly company: string;
  readonly Drivers?: (Driver | null)[] | null;
  readonly Catalog?: Catalog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorCatalogId?: string | null;
}

type LazySponsor = {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly passWd: string;
  readonly email: string;
  readonly phoneNumber?: string | null;
  readonly accessLevel: string;
  readonly company: string;
  readonly Drivers: AsyncCollection<Driver>;
  readonly Catalog: AsyncItem<Catalog | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly sponsorCatalogId?: string | null;
}

export declare type Sponsor = LazyLoading extends LazyLoadingDisabled ? EagerSponsor : LazySponsor

export declare const Sponsor: (new (init: ModelInit<Sponsor, SponsorMetaData>) => Sponsor) & {
  copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor, SponsorMetaData>) => MutableModel<Sponsor, SponsorMetaData> | void): Sponsor;
}

type EagerNote = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note, NoteMetaData>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}