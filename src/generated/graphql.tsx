import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Characters = {
   __typename?: 'characters';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Characters_Aggregate = {
   __typename?: 'characters_aggregate';
  aggregate?: Maybe<Characters_Aggregate_Fields>;
  nodes: Array<Characters>;
};

export type Characters_Aggregate_Fields = {
   __typename?: 'characters_aggregate_fields';
  avg?: Maybe<Characters_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Characters_Max_Fields>;
  min?: Maybe<Characters_Min_Fields>;
  stddev?: Maybe<Characters_Stddev_Fields>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Fields>;
  sum?: Maybe<Characters_Sum_Fields>;
  var_pop?: Maybe<Characters_Var_Pop_Fields>;
  var_samp?: Maybe<Characters_Var_Samp_Fields>;
  variance?: Maybe<Characters_Variance_Fields>;
};


export type Characters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Characters_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Characters_Aggregate_Order_By = {
  avg?: Maybe<Characters_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Characters_Max_Order_By>;
  min?: Maybe<Characters_Min_Order_By>;
  stddev?: Maybe<Characters_Stddev_Order_By>;
  stddev_pop?: Maybe<Characters_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Characters_Stddev_Samp_Order_By>;
  sum?: Maybe<Characters_Sum_Order_By>;
  var_pop?: Maybe<Characters_Var_Pop_Order_By>;
  var_samp?: Maybe<Characters_Var_Samp_Order_By>;
  variance?: Maybe<Characters_Variance_Order_By>;
};

export type Characters_Arr_Rel_Insert_Input = {
  data: Array<Characters_Insert_Input>;
  on_conflict?: Maybe<Characters_On_Conflict>;
};

export type Characters_Avg_Fields = {
   __typename?: 'characters_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Characters_Bool_Exp>>>;
  _not?: Maybe<Characters_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Characters_Bool_Exp>>>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Characters_Constraint {
  CharactersPkey = 'characters_pkey'
}

export type Characters_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Characters_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Characters_Max_Fields = {
   __typename?: 'characters_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Characters_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Characters_Min_Fields = {
   __typename?: 'characters_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Characters_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Characters_Mutation_Response = {
   __typename?: 'characters_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Characters>;
};

export type Characters_Obj_Rel_Insert_Input = {
  data: Characters_Insert_Input;
  on_conflict?: Maybe<Characters_On_Conflict>;
};

export type Characters_On_Conflict = {
  constraint: Characters_Constraint;
  update_columns: Array<Characters_Update_Column>;
  where?: Maybe<Characters_Bool_Exp>;
};

export type Characters_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export enum Characters_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Characters_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type Characters_Stddev_Fields = {
   __typename?: 'characters_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Stddev_Pop_Fields = {
   __typename?: 'characters_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Stddev_Samp_Fields = {
   __typename?: 'characters_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Sum_Fields = {
   __typename?: 'characters_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Characters_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Characters_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Characters_Var_Pop_Fields = {
   __typename?: 'characters_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Var_Samp_Fields = {
   __typename?: 'characters_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Characters_Variance_Fields = {
   __typename?: 'characters_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Characters_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_characters?: Maybe<Characters_Mutation_Response>;
  insert_characters?: Maybe<Characters_Mutation_Response>;
  update_characters?: Maybe<Characters_Mutation_Response>;
};


export type Mutation_RootDelete_CharactersArgs = {
  where: Characters_Bool_Exp;
};


export type Mutation_RootInsert_CharactersArgs = {
  objects: Array<Characters_Insert_Input>;
  on_conflict?: Maybe<Characters_On_Conflict>;
};


export type Mutation_RootUpdate_CharactersArgs = {
  _inc?: Maybe<Characters_Inc_Input>;
  _set?: Maybe<Characters_Set_Input>;
  where: Characters_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
  characters: Array<Characters>;
  characters_aggregate: Characters_Aggregate;
  characters_by_pk?: Maybe<Characters>;
};


export type Query_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Query_RootCharacters_By_PkArgs = {
  id: Scalars['Int'];
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  characters: Array<Characters>;
  characters_aggregate: Characters_Aggregate;
  characters_by_pk?: Maybe<Characters>;
};


export type Subscription_RootCharactersArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_AggregateArgs = {
  distinct_on?: Maybe<Array<Characters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Characters_Order_By>>;
  where?: Maybe<Characters_Bool_Exp>;
};


export type Subscription_RootCharacters_By_PkArgs = {
  id: Scalars['Int'];
};

export type MyQueryQueryVariables = {};


export type MyQueryQuery = (
  { __typename?: 'query_root' }
  & { characters: Array<(
    { __typename?: 'characters' }
    & Pick<Characters, 'name'>
  )> }
);


export const MyQueryDocument = gql`
    query MyQuery {
  characters {
    name
  }
}
    `;
export type MyQueryComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyQueryQuery, MyQueryQueryVariables>, 'query'>;

    export const MyQueryComponent = (props: MyQueryComponentProps) => (
      <ApolloReactComponents.Query<MyQueryQuery, MyQueryQueryVariables> query={MyQueryDocument} {...props} />
    );
    
export type MyQueryProps<TChildProps = {}> = ApolloReactHoc.DataProps<MyQueryQuery, MyQueryQueryVariables> & TChildProps;
export function withMyQuery<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyQueryQuery,
  MyQueryQueryVariables,
  MyQueryProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MyQueryQuery, MyQueryQueryVariables, MyQueryProps<TChildProps>>(MyQueryDocument, {
      alias: 'myQuery',
      ...operationOptions
    });
};

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
      }
export function useMyQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, baseOptions);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = ApolloReactCommon.QueryResult<MyQueryQuery, MyQueryQueryVariables>;