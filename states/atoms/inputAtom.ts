import { atom } from 'recoil';

export type InputFormType = {
  id: string | null;
  name: string;
};

export const inputState = atom<InputFormType>({
  key: 'input-login',
  default: {
    id: null,
    name: '',
  },
});

export const playersState = atom({
  key: 'players',
  default: {
    id: null,
    selectedTeam: null,
  },
});
