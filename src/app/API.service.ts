/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateBus: OnCreateBusSubscription;
  onUpdateBus: OnUpdateBusSubscription;
  onDeleteBus: OnDeleteBusSubscription;
};

export type CreateBusInput = {
  id?: string | null;
  name?: string | null;
  code?: string | null;
  _version?: number | null;
};

export type ModelBusConditionInput = {
  name?: ModelStringInput | null;
  code?: ModelStringInput | null;
  and?: Array<ModelBusConditionInput | null> | null;
  or?: Array<ModelBusConditionInput | null> | null;
  not?: ModelBusConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Bus = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBusInput = {
  id: string;
  name?: string | null;
  code?: string | null;
  _version?: number | null;
};

export type DeleteBusInput = {
  id: string;
  _version?: number | null;
};

export type ModelBusFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  code?: ModelStringInput | null;
  and?: Array<ModelBusFilterInput | null> | null;
  or?: Array<ModelBusFilterInput | null> | null;
  not?: ModelBusFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelBusConnection = {
  __typename: "ModelBusConnection";
  items: Array<Bus | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionBusFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  code?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionBusFilterInput | null> | null;
  or?: Array<ModelSubscriptionBusFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateBusMutation = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateBusMutation = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteBusMutation = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetBusQuery = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListBusesQuery = {
  __typename: "ModelBusConnection";
  items: Array<{
    __typename: "Bus";
    id: string;
    name?: string | null;
    code?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncBusesQuery = {
  __typename: "ModelBusConnection";
  items: Array<{
    __typename: "Bus";
    id: string;
    name?: string | null;
    code?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateBusSubscription = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateBusSubscription = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteBusSubscription = {
  __typename: "Bus";
  id: string;
  name?: string | null;
  code?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateBus(
    input: CreateBusInput,
    condition?: ModelBusConditionInput
  ): Promise<CreateBusMutation> {
    const statement = `mutation CreateBus($input: CreateBusInput!, $condition: ModelBusConditionInput) {
        createBus(input: $input, condition: $condition) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBusMutation>response.data.createBus;
  }
  async UpdateBus(
    input: UpdateBusInput,
    condition?: ModelBusConditionInput
  ): Promise<UpdateBusMutation> {
    const statement = `mutation UpdateBus($input: UpdateBusInput!, $condition: ModelBusConditionInput) {
        updateBus(input: $input, condition: $condition) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBusMutation>response.data.updateBus;
  }
  async DeleteBus(
    input: DeleteBusInput,
    condition?: ModelBusConditionInput
  ): Promise<DeleteBusMutation> {
    const statement = `mutation DeleteBus($input: DeleteBusInput!, $condition: ModelBusConditionInput) {
        deleteBus(input: $input, condition: $condition) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBusMutation>response.data.deleteBus;
  }
  async GetBus(id: string): Promise<GetBusQuery> {
    const statement = `query GetBus($id: ID!) {
        getBus(id: $id) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBusQuery>response.data.getBus;
  }
  async ListBuses(
    filter?: ModelBusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBusesQuery> {
    const statement = `query ListBuses($filter: ModelBusFilterInput, $limit: Int, $nextToken: String) {
        listBuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            code
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBusesQuery>response.data.listBuses;
  }
  async SyncBuses(
    filter?: ModelBusFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncBusesQuery> {
    const statement = `query SyncBuses($filter: ModelBusFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncBuses(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            name
            code
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncBusesQuery>response.data.syncBuses;
  }
  OnCreateBusListener(
    filter?: ModelSubscriptionBusFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBus">>
  > {
    const statement = `subscription OnCreateBus($filter: ModelSubscriptionBusFilterInput) {
        onCreateBus(filter: $filter) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateBus">>
    >;
  }

  OnUpdateBusListener(
    filter?: ModelSubscriptionBusFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBus">>
  > {
    const statement = `subscription OnUpdateBus($filter: ModelSubscriptionBusFilterInput) {
        onUpdateBus(filter: $filter) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateBus">>
    >;
  }

  OnDeleteBusListener(
    filter?: ModelSubscriptionBusFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBus">>
  > {
    const statement = `subscription OnDeleteBus($filter: ModelSubscriptionBusFilterInput) {
        onDeleteBus(filter: $filter) {
          __typename
          id
          name
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteBus">>
    >;
  }
}
