import { defineStore } from "pinia";

export type ModalStoreState = { modals: Record<string, boolean> };

export const useModalStore = defineStore("modal", {
  state: (): ModalStoreState => ({
    modals: {},
  }),

  actions: {
    openModal(modal: string) {
      const modalStore = useModalStore();
      const walletStore = useWalletStore();
      console.log("triggered", modal);

      walletStore.setWallet("metamask");

      modalStore.$patch({
        modals: { ...modalStore.modals, [modal]: true },
      });
    },

    closeModal(modal: string) {
      const modalStore = useModalStore();

      modalStore.$patch({
        modals: { ...modalStore.modals, [modal]: false },
      });
    },

    closeAll() {
      const modalStore = useModalStore();

      modalStore.modals = {};
    },
  },
});
