import { atom } from "recoil";

type InputFormType = {
  id: string | null;
  name: string;
};

export const inputState = atom<InputFormType>({
  key: "input",
  default: {
    id: null,
    name: "",
  }
})