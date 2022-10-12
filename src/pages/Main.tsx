import { Page } from '../components/page/Page';

export const Main = () => (
    <Page>
        <div className="flex flex-col items-center justify-center">
            <div className="flex my-28">
                <div className="mx-8">Your Account </div>
                <div className="mx-8">$Lake Stats</div>
            </div>
            <div className="my-28">Liquidity / Swap / Buy</div>
            <div className="flex my-28">
                <div className="mx-8">Your $Lake Vesting Schedule</div>
                <div className="mx-8">Withdraw</div>
            </div>
        </div>
    </Page>
);
