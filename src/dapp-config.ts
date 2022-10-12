import { Mainnet, Goerli } from '@usedapp/core';

export const dappConfig = {
    autoConnect: false,
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
        [Mainnet.chainId]: `https://mainnet.infura.io/v3/${
            import.meta.env.VITE_INFURA_ID
        }`,
        [Goerli.chainId]: `https://goerli.infura.io/v3/${
            import.meta.env.VITE_INFURA_ID
        }`,
    },
};
