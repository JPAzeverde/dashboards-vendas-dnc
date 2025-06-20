import styled from "styled-components"
import { Avatar, Box, Container } from "@mui/material"
import { pxToRem } from "@/utils"
import { Logo } from "./Logo"
import { Link } from "react-router-dom"

const StyledHeader = styled.div`
    background-color: ${(props) => props.theme.appBackground};
    border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefaultStroke};
    margin-bottom:${pxToRem(37)};
    width:100%;
`

export function Header() {
    return(
        <StyledHeader>
            <Container maxWidth="lg">
                <Box sx={{
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent:'space-between',
                    height:pxToRem(64)
                 }}>
                    <Link to='/home'>
                        <Logo height={30} width={73}/>
                    </Link>
                    <Link to='/profile'>
                        <Avatar alt="Avatar" src="/dncAvatar.svg" sx={{  width: pxToRem(40), height: pxToRem(40),}} />
                    </Link>
                </Box>
            </Container>
        </StyledHeader>
    )
}
