import React from 'react'
import styled from "styled-components"
function Section({backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}
                >
        
        
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
        </Wrap>
    )
}

export default Footer

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
