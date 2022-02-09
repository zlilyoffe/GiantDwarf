import { useContext } from 'react';
import { Store } from '../store/store';
import { createContext } from 'react';

const store = new Store();
export const StoreContext = createContext(store);
export const useStore = () => useContext(StoreContext);
