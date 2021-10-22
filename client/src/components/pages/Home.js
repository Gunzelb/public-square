import React from 'react';
import { useQuery } from '@apollo/client';

import PostList from '../PostList';

import { QUERY_POSTS } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div>{loading ? <div>Loading...</div> : <PostList posts={posts} />}</div>
    </main>
  );
};

export default Home;
