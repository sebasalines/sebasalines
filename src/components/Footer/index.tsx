import styled, { css } from 'styled-components'
import { responsive } from '../../helpers'

export const Container = styled.footer`
${props => css`
color: ${props.theme.colors.grey};
font-family: '${props.theme.font.body}', 'sans-serif';

text-align: center;
margin: 8px 0;
span, a {
    font-size: 12px;
    line-height: 14px;

    ${responsive({
        gtemd: css`
            &:last-child {
                &:before {
                    content: "-";
                    font-size: 14px;
                    line-height: 14px;
                }
            }
        `
    })}
    
}
img {
    display: none;
    width: 14px;
    vertical-align: middle;
    stroke: blue;
    svg {
        stroke: blue;
    }
}
`}
`

const FooterItem = props => {
    return (
        <span>
            &nbsp;{props.children}
        </span>
    )
}
const FooterLinkItem = props => {
    return (
        <a href={props.href} rel="noreferrer" target="_blank">
            &nbsp;{props.children}
        </a>
    )
}

export const Footer: React.FC = props => {
    return (
        <Container>
            <FooterLinkItem icon="at-sign" href="mailto:salines.sebastian@gmail.com?subject=Contact%20from%20sebasalines.github.io%2Fsebasalines">salines.sebastian@gmail.com</FooterLinkItem>
            &nbsp;
            <FooterItem icon="home">Montevideo, Uruguay</FooterItem>
        </Container>
    )
}