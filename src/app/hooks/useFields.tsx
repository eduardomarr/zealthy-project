import { create } from 'zustand';

export type Fields = 'About' | 'Birthday' | 'Address';

type State = {
  page2Fields: Fields[];
  page3Fields: Fields[];
};

type Action = {
  updatePage2Fields: (fields: Fields) => void;
  updatePage3Fields: (fields: Fields) => void;
};

const useFields = create<State & Action>((set, get) => ({
  page2Fields: ['About'],
  page3Fields: ['Birthday', 'Address'],

  updatePage2Fields: (newFields) => {
    const { page3Fields, page2Fields } = get();

    const updatedPage2 = [...page2Fields];

    if (updatedPage2.includes(newFields)) {
      updatedPage2.splice(updatedPage2.indexOf(newFields), 1);
    } else {
      updatedPage2.push(newFields);
    }

    const updatedPage3 = page3Fields?.filter(
      (field) => !newFields.includes(field)
    );

    if (newFields.length === 0 && updatedPage3.length > 0) {
      return;
    }

    set({
      page2Fields: updatedPage2,
      page3Fields: updatedPage3,
    });
  },

  updatePage3Fields: (newFields) => {
    const { page3Fields, page2Fields } = get();

    const updatedPage3 = [...page3Fields];

    const updatedPage2 = page2Fields.filter(
      (field) => !newFields.includes(field)
    );

    if (updatedPage3.includes(newFields)) {
      updatedPage3.splice(updatedPage3.indexOf(newFields), 1);
    } else {
      updatedPage3.push(newFields);
    }

    if (updatedPage2.length === 0 && newFields.length === 3) {
      return;
    }

    set({
      page2Fields: updatedPage2,
      page3Fields: updatedPage3,
    });
  },
}));

export default useFields;
