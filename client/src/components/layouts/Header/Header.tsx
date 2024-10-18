import React from 'react';
import { HeaderContainer, HeaderAccount, HeaderNavWrapper, HeaderWrapper } from './styles';
import HeaderNav from '@/components/layouts/HeaderNav/HeaderNav';



const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <HeaderNavWrapper>
                    <HeaderNav />
                </HeaderNavWrapper>
                <HeaderAccount>
            {/*     <PersonIcon width="24px" height="24px" fill="#fff"/>  */}
                    <span>Профиль</span>
                </HeaderAccount>
            </HeaderContainer>
        </HeaderWrapper>
    );
}

export default Header;