import styled, { css } from 'styled-components'
import { responsive } from '../../helpers'

const Container = styled.section`
${props => css`
color: ${props.theme.colors.white};
font-size: 14px;
line-height: 16px;
font-family: '${props.theme.font.body}', serif;
padding: 0 18px;
margin: 20px 0;
width: 100%;
p {
    text-align: center;
    padding: 0;
    max-width: 320px;
    margin: 0 auto;
}

${responsive({
    gtemd: css`
        margin: 42px auto;
        p {
            max-width: 480px;
            font-size: 18px;
            line-height: 20px;
        }
    `,
})}

`}
`

export const Contact: React.FC = props => {
    return (
        <Container>
            <p>I'm always open to build cool software and I'm very tech-agnostic, so feel free get in touch and let's talk about your project ideas.</p>
            <br />
            <p>The best way to reach me is to <a href="mailto:salines.sebastian@gmail.com?subject=Contact%20from%20sebasalines.github.io%2Fsebasalines" rel="noreferrer" target="_blank">send me an email</a>. You can also <a href="javacript:void(0)" rel="noreferrer" target="_blank">download my CV</a>, if you're into that kind of thing.</p>
        </Container>
    )
}