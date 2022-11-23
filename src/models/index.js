// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Admi } = initSchema(schema);

export {
  Admi
};