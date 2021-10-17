import styled, { css } from 'styled-components'

const Base = styled.header`
${props => css`
background-color: ${props.theme.colors.white};
width: 100%;
padding: 8px 0 16px 0;
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