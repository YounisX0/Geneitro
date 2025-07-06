import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchBarContainer = styled.div`
 max-width: 550px;
 display: flex;
 align-items: center;
 width: 90%;
 border: 1px solid ${({ theme }) => theme.text_secondary + 70};
 padding: 12px 16px;
 cursor: pointer;
 gap: 6px;
 `;

const SearchBar=() => {
    return(
        <SearchBarContainer>
            <SearchOutlined/>
            <input 
             placeholder="Search with name or prompt . . ."
            style={{
                border: "none",
                outline: "none",
                width: "100%",
                color: "inherit",
                fontSize: "16px",
                background: "transparent",
            }}/>
        </SearchBarContainer>
    
    )
}
export default SearchBar;