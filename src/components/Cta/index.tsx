import styled, { css } from 'styled-components'
import { responsive } from '../../helpers'

const Section = styled.section`
${props => css`
color: ${props.theme.colors.white};
font-family: '${props.theme.font.fancy}', serif;
text-align: right;
h1 {
    font-size: 42px;
    line-height: 48px;
    font-weight: 400;
    text-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 1);
    padding: 0;
    margin: 0;
}
padding: 0 18px;
margin: 48px 0 36px 0;
${responsive({
    gtemd: css`
        margin: 62px 0 36px 0;
        padding: 0 62px;
        h1 {
            font-size: 78px;
            line-height: 82px;
        }
    `,
    gtelg: css`
        width: 100%;
        h1 {
            font-size: 78px;
            line-height: 82px;
            max-width: 880px;
            margin: 0 auto;
        }
    `,

})}
`}
`

export const Cta: React.FC = props => {
    // TODO: if nothing else is added to cta delete this and only export Section (renamed) 
    return (
        <Section><h1>{props.children}</h1></Section>
    )
}