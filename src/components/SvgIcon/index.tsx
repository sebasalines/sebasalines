import React from "react";
import styled, { css } from "styled-components";
import { Icon } from "../../interfaces";

import IconGithub from '../../assets/icons/github.svg'
import IconAtSign from '../../assets/icons/at-sign.svg'
import IconGitlab from '../../assets/icons/gitlab.svg'
import IconGlobe from '../../assets/icons/globe.svg'
import IconHome from '../../assets/icons/home.svg'
import IconMail from '../../assets/icons/mail.svg'

const allIcons = {
    'github': IconGithub,
    'at-sign': IconAtSign,
    'gitlab': IconGitlab,
    'globe': IconGlobe,
    'home': IconHome,
    'mail': IconMail,
}

const Img: React.FC<React.HTMLProps<HTMLImageElement>> = styled.img`
${props => css`
width: 20px;
height: auto;
`}
`

export const SvgIcon: React.FC<React.HTMLProps<HTMLImageElement> & { icon: Icon }> = props => {
    const { icon, ...imgProps } = props
    return (
        <Img src={allIcons[icon]} {...imgProps} />
    )
}