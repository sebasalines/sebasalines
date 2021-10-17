import styled, { css } from 'styled-components'
import { SvgIcon } from '../SvgIcon'

export const Container = styled.footer`
${props => css`
color: ${props.theme.colors.grey};
font-family: '${props.theme.font.body}', 'sans-serif';
display: inline-flex;
flex-flow: column wrap;
align-items: center;
text-align: center;
span, a {
    font-size: 12px;
    line-height: 14px;
}
img {
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
            <SvgIcon icon={props.icon} />
            &nbsp;{props.children}
        </span>
    )
}
const FooterLinkItem = props => {
    return (
        <a href={props.href} rel="noreferrer" target="_blank">
            <SvgIcon icon={props.icon} />
            &nbsp;{props.children}
        </a>
    )
}

export const Footer: React.FC = props => {
    return (
        <Container>
            <FooterLinkItem icon="at-sign" href="mailto:salines.sebastian@gmail.com">salines.sebastian@gmail.com</FooterLinkItem>
            <FooterItem icon="home">Montevideo, Uruguay</FooterItem>
        </Container>
    )
}