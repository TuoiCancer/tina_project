import { StoreApi, create } from 'zustand';
import { mergeDeepLeft } from 'ramda';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { encryptStorage } from './encrypt_storage';
import createUserSlice, { IUserSlice } from './userSlice';

const store = (set: any, get: any, api: StoreApi<any>) => ({
  UserSlice: createUserSlice(
    set as unknown as StoreApi<IUserSlice>['setState'],
    get as StoreApi<IUserSlice>['getState'],
    api as unknown as StoreApi<IUserSlice>
  ),
});

export type IStore = ReturnType<typeof store>;

export const useStore = create<IStore>()(
  persist(immer(devtools(store)), {
    name: 'zustand',
    getStorage: () => encryptStorage,
    merge: (persistedState: any, currentState) =>
      mergeDeepLeft(persistedState, currentState),
  })
);

export const {
  getState: getStore,
  setState: updateStore,
  subscribe: subscribeStore,
  destroy: destroyStore,
} = useStore;
