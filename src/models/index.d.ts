import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBus = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Bus, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Bus = LazyLoading extends LazyLoadingDisabled ? EagerBus : LazyBus

export declare const Bus: (new (init: ModelInit<Bus>) => Bus) & {
  copyOf(source: Bus, mutator: (draft: MutableModel<Bus>) => MutableModel<Bus> | void): Bus;
}