import React from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useMutation, useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";

const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      isFollowing
      isSelf
      bio
      followingCount
      followerCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;
const LOG_OUT = gql`
  mutation logUserOut {
    logUserOut @client
  }
`;

const ProfileContainer = withRouter(
  ({
    match: {
      params: { username },
    },
  }) => {
    const { data, loading } = useQuery(GET_USER, { variables: { username } });
    const [logOut] = useMutation(LOG_OUT);
    return <ProfilePresenter loading={loading} data={data} logOut={logOut} />;
  }
);

export default ProfileContainer;
