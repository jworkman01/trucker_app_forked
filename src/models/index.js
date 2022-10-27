// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, Orders, Driver, Product, Catalog, Admin, Sponsor, Note } = initSchema(schema);

export {
  Cart,
  Orders,
  Driver,
  Product,
  Catalog,
  Admin,
  Sponsor,
  Note
};