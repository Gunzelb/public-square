import React from 'react';
import { useQuery } from '@apollo/client';

import Friendlink from './themedComponents/Friendlink';

import { QUERY_USERS } from '../utils/queries';

const UserList = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Friendlink names={users} />
        )}
      </div>
    </main>
  );
};

export default UserList;