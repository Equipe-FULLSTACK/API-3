import styled from "styled-components"
import iconSearch from '../../../assets/icons/icon_search.png'


export const SearchBox = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;

  &.focused {
    .input-search {
      width: 300px;
      border-radius: 0;
      background-color: transparent;
      border-bottom: 1px solid ${props => props.theme.colors.fontSecondarycolor};
      transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
  }
`;

export const InputSearch = styled.input`
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: ${props => props.theme.colors.fontSecondarycolor};
  padding-right: 40px;
  color: ${props => props.theme.colors.fontPrimarycolor};

  &::placeholder {
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: ${props => props.theme.colors.fontPrimarycolor};
  background-image: url(${iconSearch}});
  background-size: 1.5rem;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.bgTertiarycolor};
  background-position: center;
  pointer-events: painted;
`;