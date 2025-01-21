// useFormStore.ts

import { create } from 'zustand';

export type FormData = {
  [key: string]: string;
};

type State = {
  formData: FormData;
  updateField: (key: keyof FormData, value: string) => void;
  submitForm: () => void;
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
  submitForm: async () => {
    const { formData } = get();

    console.log('Enviando dados:', formData);
    // try {
    //   const response = await fetch('/api/formSubmit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Erro ao enviar os dados');
    //   }

    //   const data = await response.json();
    //   console.log('Dados enviados com sucesso:', data);
    // } catch (error) {
    //   console.error('Erro ao enviar o formulário:', error);
    // }
  },
}));

export default useFormStore;
