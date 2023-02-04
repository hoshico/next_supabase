import { atom } from 'recoil';

export type InputFormType = {
  id: string | null;
  name: string;
};

export type OrderType = {
  userId: number | null;
  selectedTeam: any[]| null;
};

export const inputState = atom<InputFormType>({
  key: 'input-login',
  default: {
    id: null,
    name: '',
  },
});

export const playersState = atom<OrderType>({
  key: 'players',
  default: {
    userId: null,
    selectedTeam: null,
  },
});
