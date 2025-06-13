import styled from 'styled-components'

const VerLin = styled.div`
size: 20px;
border-left: 1px solid #0000001F;
`

export default function VerticalLine({ size = 10 } : { size ?: number} ) {
    return (
        <VerLin style={{height: size ? `${size}px` : '10px'}}>
            
        </VerLin>
    )
}
