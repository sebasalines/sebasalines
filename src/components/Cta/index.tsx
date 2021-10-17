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
margin: 36px 0;

${responsive({
    gtemd: css`
        margin: 40px 0;
        padding: 0 120px;
        h1 {
            font-size: 82px;
            line-height: 100px;
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