import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerAdmi = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admi, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdmi = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Admi, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone_number?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Admi = LazyLoading extends LazyLoadingDisabled ? EagerAdmi : LazyAdmi

export declare const Admi: (new (init: ModelInit<Admi>) => Admi) & {
  copyOf(source: Admi, mutator: (draft: MutableModel<Admi>) => MutableModel<Admi> | void): Admi;
}