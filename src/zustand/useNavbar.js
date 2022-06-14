import create from "zustand";

const useNavbar = create((set) => ({
    navStatus: false,
    changeNavStatus: (navStatus) => set({ navStatus: { navStatus } }),
}));

export default useNavbar;