import { API, graphqlOperation } from 'aws-amplify';

export async function listHomes({ limit = 20, nextToken = null, filter = null } = {}) {
  const query = /* GraphQL */ `
    query ListHomes($limit: Int, $nextToken: String, $filter: ModelHomeFilterInput) {
      listHomes(limit: $limit, nextToken: $nextToken, filter: $filter) {
        items {
          id
          address
          city
          state
          zipCode
          price
          bedrooms
          bathrooms
          squareFeet
          description
          imageUrl
          propertyType
          listingStatus
          yearBuilt
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  `;

  const variables = { limit, nextToken, filter };
  const response = await API.graphql(graphqlOperation(query, variables));
  return response.data.listHomes;
}

export async function getHome(id) {
  const query = /* GraphQL */ `
    query GetHome($id: ID!) {
      getHome(id: $id) {
        id
        address
        city
        state
        zipCode
        price
        bedrooms
        bathrooms
        squareFeet
        description
        imageUrl
        propertyType
        listingStatus
        yearBuilt
        createdAt
        updatedAt
      }
    }
  `;

  const response = await API.graphql(graphqlOperation(query, { id }));
  return response.data.getHome;
}

export async function createHome(input) {
  const mutation = /* GraphQL */ `
    mutation CreateHome($input: CreateHomeInput!) {
      createHome(input: $input) {
        id
        address
        city
        state
        zipCode
        price
        bedrooms
        bathrooms
        squareFeet
        description
        imageUrl
        propertyType
        listingStatus
        yearBuilt
      }
    }
  `;

  const response = await API.graphql(graphqlOperation(mutation, { input }));
  return response.data.createHome;
}

export async function deleteHome(id) {
  const mutation = /* GraphQL */ `
    mutation DeleteHome($input: DeleteHomeInput!) {
      deleteHome(input: $input) {
        id
      }
    }
  `;

  const response = await API.graphql(graphqlOperation(mutation, { input: { id } }));
  return response.data.deleteHome;
}
