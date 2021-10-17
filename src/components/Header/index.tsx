import styled, { css } from 'styled-components'
import { responsive } from '../../helpers';

const Base = styled.header`
${props => css`
background-color: ${props.theme.colors.white};
width: 100%;
padding: 8px 0 16px 0;

${responsive({
    gtemd: css`
        display: flex;
        padding: 0 62px;
        margin-top: 18px;
    `,

})}

`}
`;

const Brand = styled.div`
${props => css`
background-color: ${props.theme.colors.primary};
padding: 6px 18px;
display: flex;
flex-flow: column nowrap;
align-items: flex-end;
justify-content: flex-start;

span {
    font-size: 18px;
    line-height: 20px;
    font-family: 'Hind', sans-serif;
    color: ${props.theme.colors.white};
    text-transform: uppercase;
    &.sub {
        font-size: 12px;
        line-height: 12px;
    }
}

${responsive({
    gtemd: css`
        padding-left: 62px;
    `,

})}

`}
`

// const

export const Header: React.FC = props => {
    return (
        <Base>
            <Brand>
                <span>Sebastian Salines</span>
                <span className="sub">Software developer</span>
            </Brand>
        </Base>
    )
}