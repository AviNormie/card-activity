import { useContext, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { IPositionDetails } from '../../../../interfaces/positionDetails.interface';
import { PositionsList } from '../PositionsList';
import ReactModal from 'react-modal';
import { WalletConnectContext } from '../../../../context';
import cancelIcon from '../../../../assets/icons/cancel-icon.svg';
import { colors } from '../../../../constants/colors';
import { customModalStyle } from '../../../../constants/modal';
import { useStake } from '../../../../hooks/use-stake';
import { useConfig } from '../../../../hooks/use-config';

type Props = {
    isOpen: boolean;
    isLoading: boolean;
    positions: IPositionDetails[];
    stakedPositions: IPositionDetails[];
    refreshPositions: () => void;
    closeModal: () => void;
};

ReactModal.setAppElement('#root');

export const StakingModal = ({
    isOpen,
    isLoading,
    positions,
    stakedPositions: depositedPositions,
    refreshPositions,
    closeModal,
}: Props) => {
    const { wethAddress, lakeAddress, getPool } = useConfig();
    const { account, library } = useContext(WalletConnectContext);
    const [isStaking, setIsStaking] = useState(false);
    const [isClaiming, setIsClaiming] = useState(false);

    const onStakeClick = async (position: IPositionDetails) => {
        if (library && account) {
            setIsStaking(true);
            await useStake(
                library,
                account,
                position.positionId,
                getPool(wethAddress, lakeAddress)!.poolAddress,
            );
            setIsStaking(false);
            refreshPositions();
        }
    };

    const onUnstakeClick = async (position: IPositionDetails) => {
        if (library && account) {
            setIsClaiming(true);
            console.log('unstaking');
            setIsClaiming(false);
        }
    };

    const onCloseClick = () => {
        closeModal();
    };

    return (
        <ReactModal
            isOpen={isOpen}
            style={customModalStyle}
            contentLabel="Remove Liquidity Modal"
            shouldCloseOnEsc={true}
            onRequestClose={onCloseClick}
        >
            <div className="flex flex-col w-[90vw] lg:w-auto">
                <div className="flex justify-end items-center mb-6">
                    <span className="text-sm tracking-[.1em] mr-2 text-gray-500">
                        CLOSE
                    </span>
                    <div className="w-8 h-8 flex justify-center items-center rounded-[32px] border border-gray-500 p-1">
                        <img
                            className="cursor-pointer"
                            src={cancelIcon}
                            onClick={onCloseClick}
                            alt="close"
                        ></img>
                    </div>
                </div>
                <div className="flex flex-col rounded-[32px] border border-gray-500 py-8 px-6 lg:px-8 bg-black-800">
                    {isLoading || isStaking || isClaiming ? (
                        <div className="flex min-w-[20vw] h-[20rem] justify-center items-center">
                            <ClipLoader
                                className="!w-[5rem] !h-[5rem]"
                                color={colors.gray['300']}
                                loading
                            />
                        </div>
                    ) : (
                        <>
                            {positions.length ? (
                                <>
                                    <div className="font-kanit-medium color-gray-gradient text-shadow text-xl tracking-[.12em] text-center mb-2">
                                        AVAILABLE TO STAKE:
                                    </div>
                                    <div className="flex flex-col min-w-[20vw]">
                                        <PositionsList
                                            positions={positions}
                                            onClick={(position) =>
                                                onStakeClick(position)
                                            }
                                        />
                                    </div>{' '}
                                </>
                            ) : (
                                <> </>
                            )}
                            {depositedPositions.length ? (
                                <>
                                    <div className="font-kanit-medium color-gray-gradient text-shadow text-xl tracking-[.12em] text-center mt-2">
                                        STAKED:
                                    </div>
                                    <div className="flex flex-col min-w-[20vw]">
                                        <PositionsList
                                            positions={depositedPositions}
                                            onClick={(position) =>
                                                onUnstakeClick(position)
                                            }
                                        />
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    )}
                </div>
            </div>
        </ReactModal>
    );
};
