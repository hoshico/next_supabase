import { LargeNumberLike } from 'crypto';
import { atom } from 'recoil';

export type InputFormType = {
  id: string | null;
  name: string;
};

export type OrderType = {
  id: number | null;
  teamName: string | null;
  teamEnglishName: string | null;
};

export const inputState = atom<InputFormType>({
  key: 'input-login',
  default: {
    id: null,
    name: '',
  },
});

export const teamAtom = atom<OrderType>({
  key: 'select-team',
  default: {
    id: null,
    teamName: null,
    teamEnglishName: null,
  },
});
