import { ModelInit, MutableModel } from "@aws-amplify/datastore";

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

export declare class Cart {
  readonly id: string;
  readonly item?: string[] | null;
  readonly price: number;
  readonly orders?: Orders | null;
  readonly Driver?: Driver | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartOrdersId?: string | null;
  readonly cartDriverId?: string | null;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Orders {
  readonly id: string;
  readonly price: number;
  readonly quantity: number;
  readonly Driver?: Driver | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ordersDriverId?: string | null;
  constructor(init: ModelInit<Orders, OrdersMetaData>);
  static copyOf(source: Orders, mutator: (draft: MutableModel<Orders, OrdersMetaData>) => MutableModel<Orders, OrdersMetaData> | void): Orders;
}

export declare class Driver {
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
  constructor(init: ModelInit<Driver, DriverMetaData>);
  static copyOf(source: Driver, mutator: (draft: MutableModel<Driver, DriverMetaData>) => MutableModel<Driver, DriverMetaData> | void): Driver;
}

export declare class Product {
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
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Catalog {
  readonly id: string;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Catalog, CatalogMetaData>);
  static copyOf(source: Catalog, mutator: (draft: MutableModel<Catalog, CatalogMetaData>) => MutableModel<Catalog, CatalogMetaData> | void): Catalog;
}

export declare class Admin {
  readonly id: string;
  readonly fName: string;
  readonly lName: string;
  readonly uName: string;
  readonly email: string;
  readonly passWd: string;
  readonly phoneNumber?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Admin, AdminMetaData>);
  static copyOf(source: Admin, mutator: (draft: MutableModel<Admin, AdminMetaData>) => MutableModel<Admin, AdminMetaData> | void): Admin;
}

export declare class Sponsor {
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
  constructor(init: ModelInit<Sponsor, SponsorMetaData>);
  static copyOf(source: Sponsor, mutator: (draft: MutableModel<Sponsor, SponsorMetaData>) => MutableModel<Sponsor, SponsorMetaData> | void): Sponsor;
}

export declare class Note {
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}