import styled, { css } from 'styled-components'
import { Icon } from '../../interfaces'
import { SvgIcon } from '../SvgIcon'

const Section = styled.section`
${props => css`
color: ${props.theme.colors.white};
font-family: '${props.theme.font.body}', serif;
font-weight: medium;
text-align: center;
padding: 0 18px;
margin: 18px 0;
h2 {
    padding: 0;
    margin: 8px 0;
    font-size: 14px;
    font-weight: 400;
    color: ${props.theme.colors.lowContrast};
}
`}
`

const ProjectCard = styled.a`
${props => css`
color: ${props.theme.colors.white};
font-family: '${props.theme.font.body}', serif;
display: inline-flex;
flex-flow: row nowrap;
align-items: center;
justify-content: center;
border-radius: 4px;
background-color: ${props.theme.colors.secondary};
padding: 6px 8px;
text-decoration: none;
margin-bottom: 6px;

&:not(:first-of-type) {
    margin-left: 8px;
}

img {
    width: 22px;
    margin-right: 8px;
}

`}
`

const Stack = styled.span`
${props => css`
display: inline-flex;
flex-flow: column nowrap;
span {
    text-align: left;
    font-size: 16px;
    line-height: 18px;
    &.sub {
        font-size: 12px;
        line-height: 14px;
        color: ${props.theme.colors.grey};
    }
}
`}
`

const Grid = styled.div`
${props => css`
display: inline-flex;
flex-flow: row wrap;
justify-content: center;
`}
`

interface ProjectProps {
    title: string
    url: string
    lang: string
    icon?: Icon
}

const allProjects: ProjectProps[] = [
    {
        url: 'https://poweredbyliquid.com',
        title: 'Liquid',
        icon: 'globe',
        lang: 'Angular, .NET',
    },
    {
        url: 'https://github.com/sebasalines/electron-react-ts',
        title: 'electron-react-ts',
        lang: 'Electron, React',
    },
    {
        url: 'https://github.com/sebasalines/spotifier',
        title: 'spotifier',
        lang: 'Angular',
    },
    {
        url: 'https://jobcirc.com',
        title: 'JobCirc',
        icon: 'globe',
        lang: 'Graphql, Angular',
    },
    {
        url: 'https://github.com/sebasalines/gql-dashboard',
        title: 'gql-dashboard',
        lang: 'Graphql, Angular, React',
    },
    {
        url: 'https://www.socialwyze.com',
        title: 'Socialwyze',
        icon: 'globe',
        lang: 'React Native',
    },
]


const Project: React.FC<ProjectProps> = props => {
    const icon = props.icon || 'github'
    return (
        <ProjectCard href={props.url} target="_blank">
            <SvgIcon icon={icon} alt={props.title} />
            <Stack>
                <span>{props.title}</span>
                <span className="sub">{props.lang}</span>
            </Stack>
        </ProjectCard>
    )
}


export const Projects: React.FC = props => {
    return (
        <Section>
            <h2>Some of what I've worked on recently...</h2>
            <Grid>
                {allProjects.map(project => <Project key={`project_${project.url}`}  {...project} />)}
            </Grid>
        </Section>
    )
}