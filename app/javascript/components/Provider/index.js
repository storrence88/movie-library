import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createCache, createClient } from '../../utils/apollo';

// prettier-ignore
export default ({ children }) => (
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
);
