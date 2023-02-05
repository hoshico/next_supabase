import { atom } from 'recoil';

export type InputFormType = {
  id: string | null;
  name: string;
};

export type OrderType = {
  userId: number | null;
  selectedTeam: string | null;
};

export const inputState = atom<InputFormType>({
  key: 'input-login',
  default: {
    id: null,
    name: '',
  },
});

export const teamState = atom<OrderType>({
  key: 'select-team',
  default: {
    userId: null,
    selectedTeam: null,
  },
});
