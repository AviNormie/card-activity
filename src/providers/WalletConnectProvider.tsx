import { ReactNode } from 'react';

import { WalletConnectContext } from '../context';
import { useWalletConnect } from '../hooks/use-wallet-connect';

type Props = {
    children: ReactNode;
};

export const WalletConnectProvider = ({ children }: Props) => {
    const auth = useWalletConnect();

    return (
        <WalletConnectContext.Provider value={auth}>
            {children}
        </WalletConnectContext.Provider>
    );
};
