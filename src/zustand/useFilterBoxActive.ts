import create, { StateCreator } from "zustand";

interface filterBoxState {
  filterBoxStatus: boolean;
  changeFilterBoxStatus: (navStatus: boolean) => void;
}

const useFilterBoxActive = create<filterBoxState>((set) => ({
  filterBoxStatus: false,
  changeFilterBoxStatus: (filterBoxStatus) => set({ filterBoxStatus }),
}));

export default useFilterBoxActive;
