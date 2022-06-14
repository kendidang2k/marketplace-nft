import create, { StateCreator } from "zustand";

interface navbarState {
  navStatus: boolean;
  changeNavStatus: (navStatus: boolean) => void;
}

const useNavbarActive = create<navbarState>((set) => ({
  navStatus: false,
  changeNavStatus: (navStatus) => set({ navStatus }),
}));

export default useNavbarActive;
