import create from "zustand";

const useNavbarActive = create((set) => ({
    navStatus: true,
    changeNavStatus: (navStatus) => set((navStatus: boolean) => ({ navStatus: !navStatus })),
}));
