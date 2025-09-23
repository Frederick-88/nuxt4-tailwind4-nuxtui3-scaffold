import { defineStore } from "pinia";

export type WalletStoreState = { wallets: Record<string, any> };

export const useWalletStore = defineStore("wallet", {
  state: (): WalletStoreState => ({
    wallets: {},
  }),

  actions: {
    setWallet(walletId: string) {
      const walletStore = useWalletStore();
      console.log("triggered", walletId);

      walletStore.$patch({
        wallets: { ...walletStore.wallets, [walletId]: true },
      });
    },

    resetWallet(walletId: string) {
      const walletStore = useWalletStore();

      walletStore.$patch({
        wallets: { ...walletStore.wallets, [walletId]: false },
      });
    },

    resetAll() {
      const walletStore = useWalletStore();

      walletStore.wallets = {};
    },
  },
});
