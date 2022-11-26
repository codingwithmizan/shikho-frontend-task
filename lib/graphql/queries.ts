import { client } from "@/lib/graphql/apolloClient";
import { gql } from "@apollo/client";

export const fetchUsers = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        users {
          id
          data {
            email
            first_name
            phone
          }
        }
      }
    `,
  });
  return data;
};

export const fetchUserById = async (id: string) => {
  const query = gql`
    query User($id: String!) {
      user(_id: $id) {
        id
        data {
          email
          first_name
          phone
          avatar {
            url
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: query,
    variables: { id },
  });

  return data;
};

export const fetchPosts = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          id
          data {
            title
            body {
              text
            }
          }
        }
      }
    `,
  });

  return data;
};

export const fetchComments = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        comments {
          id
          data {
            body {
              text
            }
          }
        }
      }
    `,
  });

  return data;
};

export const fetchPostById = async (id: string) => {
  const query = gql`
    query Post($id: String!) {
      post(_id: $id) {
        id
        data {
          title
          body {
            text
          }
        }
        comments {
          id
          data {
            body {
              text
            }
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: query,
    variables: { id },
  });

  return data;
};

