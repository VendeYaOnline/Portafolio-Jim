import { create } from "zustand";

interface Props {
  activeMenu: boolean;
  setActiveMenu: (data: boolean) => void;
}

export const useMenu = create<Props>((set) => ({
  activeMenu: false,
  setActiveMenu: (value: boolean) => set(() => ({ activeMenu: value })),
}));
