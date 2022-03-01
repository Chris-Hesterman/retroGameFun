import create from 'zustand';

export const useStore = create((set) => ({
  fleetLeft: 20,
  increaseLeft: () => set((state) => ({ fleetLeft: state.fleetLeft + 10 })),
  decreaseLeft: () => set((state) => ({ fleetLeft: state.fleetLeft - 10 }))
}));
