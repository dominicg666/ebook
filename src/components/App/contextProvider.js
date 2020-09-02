import React from 'react';
import {
  AdapterContextProvider as Adapters,
  WindowSizeContextProvider
} from '@baaz/adapter';
import PageContextProvider from '../../store/context/page'

/**
 * My custom context
 */


/**
 * 
 *
 * @property {React.Component[]} contextProviders
 */
const contextProviders = [
  Adapters,
  WindowSizeContextProvider,
  PageContextProvider
];

const ContextProvider = ({ children }) => {
  return contextProviders.reduceRight((memo, ContextProvider) => {
    return <ContextProvider>{memo}</ContextProvider>;
  }, children);
};

export default ContextProvider;
