import { css, FlattenSimpleInterpolation } from "styled-components";

const sizes = {
    xs: [0, 360],
    sm: [361, 749],
    md: [750, 1024],
    lg: [1025, 1280],
    xl: [1281, 9001],
}

interface Responsive {
    xs?: FlattenSimpleInterpolation
    ltexs?: FlattenSimpleInterpolation
    gtexs?: FlattenSimpleInterpolation
    sm?: FlattenSimpleInterpolation
    ltesm?: FlattenSimpleInterpolation
    gtesm?: FlattenSimpleInterpolation
    md?: FlattenSimpleInterpolation
    ltemd?: FlattenSimpleInterpolation
    gtemd?: FlattenSimpleInterpolation
    lg?: FlattenSimpleInterpolation
    ltelg?: FlattenSimpleInterpolation
    gtelg?: FlattenSimpleInterpolation
    xl?: FlattenSimpleInterpolation
    ltexl?: FlattenSimpleInterpolation
    gtexl?: FlattenSimpleInterpolation
}
export function responsive(data: Responsive): FlattenSimpleInterpolation {
    let final = css``

    // TODO: refactor this, the idea is good but execution is crap
    for(const size of Object.keys(data)) {
        if (size.startsWith('lte')) {
            const width = size.replace('lte', '')  
            const [, max] = sizes[width]
            final = css`
                ${final}
                @media (max-width: ${max}px) {
                    ${data[size]}
                }
            `
            continue
        }

        if (size.startsWith('gte')) {
            const width = size.replace('gte', '')  
            const [min] = sizes[width]
            final = css`
                ${final}
                @media (min-width: ${min}px) {
                    ${data[size]}
                }
            `
            continue
        }

        const [min, max] = sizes[size]
        final = css`
            ${final}
            @media (min-width: ${min}px) and (max-width: ${max}px) {
                ${data[size]}
            }
        `
    }

    return final 
}