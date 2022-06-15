import { Class } from "utils/class";
import create, { StateCreator } from "zustand";

interface selectedClassState {
  class: string;
  classList: Array<Class>;
  addToClassList: (Class: object) => void;
}

const useSelectedClass = create<selectedClassState>((set) => ({
  addToClassList: (Class: object) => set({ navStatus }),
}));

export default useSelectedClass;
