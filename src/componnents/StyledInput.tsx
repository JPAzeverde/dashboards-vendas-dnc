import styled from "styled-components"
import type { InputProps } from "@/types"
import { pxToRem } from "@/utils";

export const StyledInput = styled.input<InputProps>`
    background-color: ${(props) => props.theme.textInput.active};
    color:${(props) => props.theme.textInput.activeColor};
    border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.activeColor};
    border-radius: ${pxToRem(8)};
    box-sizing: border-box;
    cursor: pointer;
    height: ${pxToRem(40)};
    font-size: ${pxToRem(14)};
    font-weight: 500;
    padding: ${pxToRem(8)} ${pxToRem(16)};
    transition: background-color 0.3s;
    width: 100%;
    &:disabled {
        background-color: ${(props) => props.theme.textInput.disabled};
        color: ${(props) => props.theme.textInput.activeColor};
        border: ${pxToRem(1)} solid ${(props) => props.theme.textInput.disabledBorderColor};
        border-radius: ${pxToRem(8)};
        cursor: not-allowed
    }
    &::placeholder{
        color:${(props) => props.theme.textInput.placeholderColor};
    }
`;
