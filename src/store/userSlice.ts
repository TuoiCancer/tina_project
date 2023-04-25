import { StateCreator, StoreApi } from 'zustand';

type IUser = {
  id: number;
  image: string;
  username: string;
  password: string;
  role: string;
};

export interface IUserSlice {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: IUser;
  setUser: (value: IUser) => void;
}

const createUserSlice: StateCreator<
  IUserSlice,
  [
    ['zustand/persist', IUserSlice],
    ['zustand/devtools', never],
    ['zustand/immer', never]
  ],
  [],
  IUserSlice
> = (set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (isLoggedIn) =>
    set(({ UserSlice }: any) => {
      UserSlice.isLoggedIn = isLoggedIn;
    }),
  user: {
    id: 0,
    image: '',
    username: '',
    password: '',
    role: '',
  },
  setUser: (value: IUser) =>
    set(({ UserSlice }: any) => {
      UserSlice.user = value;
    }),
});

export default createUserSlice as (
  set: StoreApi<IUserSlice>['setState'],
  get: StoreApi<IUserSlice>['getState'],
  api: StoreApi<IUserSlice>
) => IUserSlice;
