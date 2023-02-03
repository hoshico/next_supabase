import { atom } from "recoil";

export type InputFormType = {
  id: string | null;
  name: string;
};

export const inputState = atom<InputFormType>({
  key: "input-login",
  default: {
    id: null,
    name: "",
  }
})