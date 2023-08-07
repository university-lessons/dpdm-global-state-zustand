import { create } from "zustand";

type State = {
  counter: number;
};

type Actions = {
  add: () => void;
  reset: () => void;
};

const useCounter = create<State & Actions>()((set) => ({
  counter: 0,
  add: () => {
    set((state) => ({
      counter: state.counter + 1,
    }));
  },
  reset: () => {
    set(() => ({
      counter: 0,
    }));
  },
}));

export default useCounter;
