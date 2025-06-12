import React from "react"
import styled from "styled-components"
import '../dashboard.css'
const Container = styled.div`
width: 100%;
font-weight: bolder;
`
const CustomDropDown: React.FC<{ mainName: string, options ?: Array<string>, ID: number }> = ({ mainName, options = [], ID }) => {

    function toggleOption() {
        const caret = document.getElementById(ID + 'caret') as HTMLElement;
        const elm = document.getElementById(ID + 'optionContainer') as HTMLElement;
        const parent = document.getElementById( ID + 'dropDownMainContainer') as HTMLElement;

        if (!elm || !caret || !parent) {
            console.log("something is wrong")
            return;
        }

        caret.classList.toggle('rotateCaret')
        // elm.classList.toggle('open');
        parent.classList.toggle('clr');

        if ( elm.style.height == "0px" ) {
            elm.style.height = `${50 * ( elm.children.length )}px`
        }
        else {
            elm.style.height = "0px";
        }
    }

    return (
        <Container>
            <div className="dropDownMainContainer" id={ID + "dropDownMainContainer"} >
                <div className="dropDownMain">
                    <span>{mainName}</span>
                    <img src="./caretDown.svg" className="caret" id={ID + "caret"} onClick={() => { toggleOption() }} />
                </div>
                <div className="optionContainer" style={{height: "0px"}}  id={ID + "optionContainer"}>
                    {options.map((elm) => (
                        <div className="optionElm"> {elm} </div>
                    ))}
                </div>
            </div>
        </Container>
    )
}


export default CustomDropDown