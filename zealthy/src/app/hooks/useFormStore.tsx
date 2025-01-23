// useFormStore.ts

import { create } from 'zustand';

export type User = {
  id: number;
  email: string;
  password: string;
  about?: string;
  birthday?: string;
  address?: string;
};

export type FormData = {
  [key: string]: string;
};

type State = {
  formData: FormData;
  updateField: (key: keyof FormData, value: string) => void;
  getForm: () => User;
};

const useFormStore = create<State>((set, get) => ({
  formData: {},
  updateField: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),
  getForm: () => {
    const { formData } = get();

    return formData as User;
  },
}));

export default useFormStore;
