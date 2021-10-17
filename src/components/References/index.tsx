import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { getRandom } from '../../helpers'
import { Icon } from '../../interfaces'
import { SvgIcon } from '../SvgIcon'



const references: ReferenceProps[] = [
    {
        name: 'Gabriel Alvez',
        email: 'gabrielalvez727@gmail.com',
    },
    {
        name: 'Ernesto Vera',
        email: 'emrevera@gmail.com',
    },
    {
        name: 'Christian Serron',
        email: 'christian@bros.me',
    },
    {
        name: 'Rodrigo Techera',
        email: 'rodrigo.webtools@gmail.com',
    },
    {
        name: 'Ismael Larrosa',
        email: 'ismael@capicua.com.uy',
    },
    {
        name: 'Yanick Tourn',
        email: 'yanickt@amazon.com',
    },
    {
        name: 'Schubert Tabarez',
        email: 'stf9331@gmail.com',
    },
    {
        name: 'Saujin Yi',
        email: 'syi@poweredbyliquid.com',
    },
    {
        name: 'Brooke Souza',
        email: 'brooke@poweredbyliquid.com',
    },
    {
        name: 'Tamra Johnson',
        email: 'tamra@poweredbyliquid.com',
    },
    {
        name: 'Max Cadenasso',
        email: 'maxcadenasso@jobcirc.com',
    },
    {
        name: 'Cody Merrill',
        email: 'cody@socialwyze.com',
    },
]

const randomRefs = getRandom(references, references.length)

const Section = styled.section`
${props => css`
color: ${props.theme.colors.white};
font-family: '${props.theme.font.body}', serif;
font-weight: medium;
font-size: 14px;
text-align: center;
padding: 0 18px;
width: 100%;

h5 {
    padding: 0;
    margin: 8px 0;
    font-size: 14px;
    font-weight: 400;
    color: ${props.theme.colors.lowContrast};
}
`}
`

const ReferenceContainer = styled.article`
${props => css`
color: ${props.theme.colors.white};
font-family: '${props.theme.font.body}', serif;
span {
    display: block;
    font-family: '${props.theme.font.fancy}', serif;
    font-size: 16px;
    line-height: 18px;
}
a {
    color: ${props.theme.colors.lowContrast};
    font-family: '${props.theme.font.body}', serif;
    margin: 0;
    padding: 0;
}
`}
`

const Grid = styled.div`
${props => css`
display: grid;
grid-gap: 8px;
grid-template-rows: auto;
`}
`

const Button = styled.button`
${props => css`
display: inline;
text-decoration: underline;
background: none;
border: none;
font-size: 10px;
padding: 0;
margin: 0;
color: ${props.theme.colors.lowContrast};
cursor: pointer;
`}
`

interface ReferenceProps {
    name: string
    email: string
}

const Reference: React.FC<ReferenceProps> = props => {
    return (
        <ReferenceContainer>
            <span>{props.name}</span>
            <a href={`mailto:${props.email}`} target="_blank" rel="noreferrer">{props.email}</a>
        </ReferenceContainer>
    )
}


export const References: React.FC = props => {
    const pageSize = 2
    const maxPage = Math.ceil(randomRefs.length / pageSize)
    const paginate = (i: number = 0) => [...randomRefs].slice(i * pageSize, i * pageSize + 2)

    const [pageIndex, setPageIndex] = useState(0)
    const [refs, setRefs] = useState(paginate(pageIndex))

    useEffect(() => {
        setRefs(paginate(pageIndex))
    }, [pageIndex])

    const loadMore = () => setPageIndex(pageIndex + 1 < maxPage ? pageIndex + 1 : 0)
    return (
        <Section>
            <h5>Some of my references...</h5>
            <Grid>
                {refs.map(ref => <Reference key={`references_${ref?.email}`} {...ref} />)}
            </Grid>
            <Button onClick={() => loadMore()}>...more references?</Button>
        </Section>
    )
}