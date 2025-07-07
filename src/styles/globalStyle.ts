import { pxToRem } from '@/utils';
import { createGlobalStyle } from 'styled-components'
import type { DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme?:  DefaultTheme}>`
    body, html{
        background-color: ${(props) => props.theme.appBackground};
        color: ${(props) => props.theme.appColor};
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
    }
    h1, h2, h3, h4, h5, h6, ul, li, p, figure{
        margin: 0; padding: 0;
    }
    a{
        text-decoration:none;
        color: ${(props) => props.theme.appColor};
    }
    
    .mt-1{
        margin-top: ${pxToRem(16)};
    }
    .mt-2{
        margin-top: ${pxToRem(32)};
    }

    .mb-1{
        margin-bottom: ${pxToRem(16)};
    }
    
    .mb-2{
        margin-bottom: ${pxToRem(32)};
    }

    skeleton-loading{
        animation: skeletonLoading 2s infinite alternate;
    }

    @keyframes skeletonLoading {
        from{
            background-color:${(props) => props.theme.appSkeletonFrom};
        }
        to{
            background-color:${(props) => props.theme.appSkeletonTo};
        }
    }
    
    skeletonLoading-mh1{
        min-height:${pxToRem(175)};;
    }
        
    skeletonLoading-mh2{
        min-height:${pxToRem(400)};;
    }



`;