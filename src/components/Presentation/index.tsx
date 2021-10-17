import React from "react";
import styled, { css } from "styled-components";
import { Contact } from "../Contact";
import { Cta } from "../Cta";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Projects } from "../Projects";
import { References } from "../References";

const Column = styled.div`
${props => css`
flex: 1;
display: flex;
flex-flow: column nowrap;
background-color: ${props.theme.colors.primary};

main {
    flex: 1;
    /* display: flex;
    flex-flow: column nowrap; */
    background-color: ${props.theme.colors.primary};
}

`}
`

const Content = styled.main`
${props => css`
display: flex;
flex-flow: column nowrap;
width: 100%;
background-color: ${props.theme.colors.primary};
`}
`

export const Presentation: React.FC = props => {
    return (
        <Column>
            <main>
                <Header />
                <Cta>
                    Let's do some software stuff, maybe?
                </Cta>
                <Projects />
                <References />
                <Contact />
            </main>
            <Footer />
        </Column>
    )
}