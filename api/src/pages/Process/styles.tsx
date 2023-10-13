import styled from "styled-components"
import{ PageItemWrapper as NavItemWrapper} from "../../helpers/ItemWrapper"

export const Wrapper = styled(NavItemWrapper)`
    display: ${(props)=>props.display ? props.display  : "flex"};
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "column"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    align-content: ${(props)=>props.alignContent ? props.alignContent  : "center"};
    justify-content: ${(props)=>props.justifyContent ? props.justifyContent  : "center"};
    flex-wrap: ${(props)=>props.flexWrap ? props.flexWrap : "wrap"};
    max-width: ${(props)=>props.maxWidth ? props.maxWidth  : "none"};
    min-width: ${(props)=>props.minWidth ? props.minWidth  : "none"};
    margin: ${(props)=>props.margin ? props.margin  : "0"};
    padding: ${(props)=>props.padding ? props.padding  : "0"};
    width: ${(props)=>props.width ? props.width  : "auto"};
    height: ${(props)=>props.height ? props.height  : "auto"};
    background-color: ${(props)=>props.backgroundColor ? props.backgroundColor  : ''}
`

export const Divider = styled.div`
    width:100%;
    border-bottom: 2px solid ${props => props.theme.colors.bgTertiarycolor};
    margin-bottom: 1rem;
    background-color: ${props => props.theme.colors.bgPrimarycolor};
`


export const ProcessActive = styled.h4`
    font-style: oblique;
    color: ${props => props.theme.colors.fontSecondarycolor};
    font-size: 1.5rem;
    margin: 1rem;

`


export const BtnNewProcess = styled.button`
    align-items: center;
    background-color: initial;
    background-image: linear-gradient(${props => props.theme.colors.bgSecondarycolor}, ${props => props.theme.colors.bgTertiarycolor});
    border-radius: 16px;
    border-width: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .1),0 3px 6px rgba(0, 0, 0, .05);

    color: ${props => props.theme.colors.fontPrimarycolor};
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;

    height: 3rem;
    justify-content: center;
    line-height: 2;
    margin: 0;
    padding: 1rem 5rem;
    outline: none;
    overflow: hidden;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 150ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    /* -webkit-user-select: none; */
    touch-action: manipulation;
    }

    &:hover {
    color: ${props => props.theme.colors.fontSecondarycolor};
    opacity: .9;
    }

    &:active {
    outline: 0;
    box-shadow: ${props => props.theme.colors.fontSecondarycolor} 0 0 0 1px;
}

`