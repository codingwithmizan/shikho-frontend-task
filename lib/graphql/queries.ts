import { client } from "@/lib/graphql/apolloClient";
import { gql } from "@apollo/client";

//query all data
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

export const fetchPosts = async () => {
  const { data, loading, networkStatus, error } = await client.query({
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
//query single data
export const fetchUserById = async (id: string) => {
  const userQuery = gql`
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
    query: userQuery,
    variables: { id },
  });

  return data;
};

export const fetchPostById = async (id: string) => {
  const postQuery = gql`
    query Post($id: String!) {
      post(_id: $id) {
        id
        data {
          title
          body {
            text
          }
        }
      }
    }
  `;

  const { data } = await client.query({
    query: postQuery,
    variables: { id },
  });

  return data;
};

//add data
export const addPost = async (title: string, html: string) => {
  const postMutation = gql`
    mutation Post($title: String!, $html: String!) {
      createPost(payload: { title: $title, body: { html: $html } }) {
        id
      }
    }
  `;
  const { data } = await client.mutate({
    mutation: postMutation,
    variables: { title, html },
  });

  return data;
};

export const addComment = async (html: string) => {
  const commentMutation = gql`
    mutation Comment($html: String!) {
      createComment(payload: { body: { html: $html } }) {
        id
      }
    }
  `;
  const { data } = await client.mutate({
    mutation: commentMutation,
    variables: { html },
  });

  return data;
};

//update data
export const updatePost = async (id: string, title: string, html: string) => {
  const postMutation = gql`
    mutation Post($id: String!, $title: String!, $html: String!) {
      updatePost(_id: $id, payload: { title: $title, body: { html: $html } }) {
        id
        data {
          title
          body {
            text
          }
        }
      }
    }
  `;
  const { data } = await client.mutate({
    mutation: postMutation,
    variables: { id, title, html },
  });

  return data;
};
