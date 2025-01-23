import { create } from 'zustand';

export type Fields = 'about' | 'birthday' | 'address';

type State = {
  page2Fields: Fields[];
  page3Fields: Fields[];
};

type Action = {
  updatePage2Fields: (fields: Fields) => void;
  updatePage3Fields: (fields: Fields) => void;
};

const useFields = create<State & Action>((set, get) => ({
  page2Fields: ['about'],
  page3Fields: ['birthday', 'address'],

  updatePage2Fields: (newFields) => {
    const { page2Fields, page3Fields } = get();

    const updatedPage2 = [...page2Fields];

    if (updatedPage2.includes(newFields)) {
      updatedPage2.splice(updatedPage2.indexOf(newFields), 1);
    } else if (updatedPage2.length === 2) {
      return;
    } else {
      updatedPage2.push(newFields);
    }

    if (updatedPage2.length === 0) {
      updatedPage2.push(newFields);
    }

    const updatedPage3 = page3Fields?.filter(
      (field) => !newFields.includes(field)
    );

    set({
      page2Fields: updatedPage2,
      page3Fields: updatedPage3,
    });
  },

  updatePage3Fields: (newFields) => {
    const { page3Fields, page2Fields } = get();

    const updatedPage3 = [...page3Fields];

    if (updatedPage3.includes(newFields)) {
      updatedPage3.splice(updatedPage3.indexOf(newFields), 1);
    } else if (updatedPage3.length === 2) {
      return;
    } else {
      updatedPage3.push(newFields);
    }

    if (updatedPage3.length === 0) {
      updatedPage3.push(newFields);
    }

    const updatedPage2 = page2Fields.filter(
      (field) => !newFields.includes(field)
    );

    set({
      page2Fields: updatedPage2,
      page3Fields: updatedPage3,
    });
  },
}));

export default useFields;
