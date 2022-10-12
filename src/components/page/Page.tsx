import styled from 'styled-components';

import { ReactNode } from 'react';
import { Navigation } from '../navigation/Navigation';
import { Footer } from '../footer/Footer';

interface Props {
    children: ReactNode;
}

export const Page = ({ children }: Props) => (
    <PageContainer>
        <Navigation />
        {children}
        <Footer />
    </PageContainer>
);

const PageContainer = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
`;
