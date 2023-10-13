import React from 'react';
import { useState, useRef } from 'react';

import {
    SearchBox,
    InputSearch,
    SearchButton,
} from "./styles"
//TODO CRIANDO STYLES NAVBAR

interface dataSearch {
    name: string;
  }
const SearchComponent: React.FC<dataSearch> = ({name}) => {
    const [isFocused, setIsFocused] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFocus = (e) => {
        e.preventDefault()
        if (isFocused==='focused') {
            //TODO Implementar solução de pesquisa
            /* console.log('True') */
            setIsFocused('');
            inputRef.current?.click;
        } 
        else {
            /* console.log('False') */
            setIsFocused('focused');
        }
        
    };

  
    return (
        
          <SearchBox className={isFocused}>
            <SearchButton
                onClick={handleFocus}>
              <i className="fas fa-search"></i>
            </SearchButton>
                <InputSearch
                ref={inputRef}
                type="text"
                placeholder="Pesquisar"
                onBlur={handleFocus}
                onAbort={handleFocus}
                className="input-search"
                
                />
            </SearchBox>
      );
    };

  export default SearchComponent;