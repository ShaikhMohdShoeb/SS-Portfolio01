import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AnimationState {
  enabled: boolean;
  toggle: () => void;
}

export const useAnimationStore = create<AnimationState>()(
  persist(
    (set) => ({
      enabled: true,
      toggle: () => set((state) => ({ enabled: !state.enabled })),
    }),
    {
      name: 'animation-storage',
    }
  )
);