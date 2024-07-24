import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;

        vertical-align: baseline;
    }

    * {
        box-sizing: border-box;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }


    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
    }


    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Thin.woff2') format('woff');
        font-weight: 100;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Light.woff2') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Regular.woff2') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Medium.woff2') format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-SemiBold.woff2') format('woff');
        font-weight: 600;
        font-style: normal;
    }


    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-Bold.woff2') format('woff');
        font-weight: 700;
        font-style: normal;
    }


    @font-face {
        font-family: 'Pretendard';
        src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff');
        font-weight: 800;
        font-style: normal;
    }


    body {
        font-family: 'Pretendard', sans-serif;
    }
`

export default GlobalStyle
