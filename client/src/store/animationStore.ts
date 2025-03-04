import { create } from "zustand";

interface AnimationState {
  cloudAnimationEnabled: boolean;
  toggleCloudAnimation: () => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  cloudAnimationEnabled: true,
  toggleCloudAnimation: () =>
    set((state) => ({ cloudAnimationEnabled: !state.cloudAnimationEnabled })),
}));
