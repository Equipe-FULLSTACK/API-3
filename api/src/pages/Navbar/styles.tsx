import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

import{ PageText as NavText} from "../../helpers/PageText"
import avatar from '../../assets/icons/icon_User.png'


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    border-bottom: 4px solid ${props => props.theme.colors.bgSecondarycolor};

`
export const Logo = styled.img`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px;
    background-size: cover;
    cursor:pointer;
`
export const UserName = styled.span`
    color: ${props => props.theme.colors.fontSecondarycolor};
    
    &:after{
        color: var(--font-secondary-color);
        width: auto;
        height: auto;
        content: '';
        margin-left: 1rem;
        padding: 0.5rem 2rem;
        align-items: center;
        background-repeat: no-repeat;
        background-size: contain;
        background-image: url(${avatar});
        cursor:pointer;
    }
`