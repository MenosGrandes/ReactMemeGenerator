import React, { useState } from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Button
} from "reactstrap";
import { convertSvgToImage } from '../js/imageManipulators';

const textStyle = {
    fontFamily: "Impact",
    fontSize: "50px",
    textTransform: "uppercase",
    fill: "#FFF",
    stroke: "#000",
    userSelect: "none",
  };
  const style_elems = {
    topY: "10%",
    topX: "50%",
    bottomX: "50%",
    bottomY: "90%"
    }
 const newWidth = 600;


export default function MemeGenerator({image, state, toggle}) {
    const [textOnMemeBottom, settextOnMemeBottom] = useState("")
    const [textOnMemeTop, settextOnMemeTop] = useState("")

    const base_image = new Image();
    base_image.src = image.src;
    var wrh = base_image.width / base_image.height;
    var newHeight = newWidth / wrh;
    let svgRef = null;


    return (
        <Modal className="meme-gen-modal" isOpen={state.modalIsOpen}>
            <ModalHeader toggle={toggle}>Make-a-Meme</ModalHeader>
            <ModalBody>

                <svg
                    width={newWidth}
                    id="svg_ref"
                    height={newHeight}
                    ref={(svgElement) => {
                        svgRef = svgElement;
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <image

                        xlinkHref={state.currentImagebase64}
                        height={newHeight}
                        width={newWidth}
                    />
                    <text
                        style={textStyle}
                        x={style_elems.topX}
                        y={style_elems.topY}
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {textOnMemeTop}
                    </text>
                    <text
                        style={textStyle}
                        dominantBaseline="middle"
                        textAnchor="middle"
                        x={style_elems.bottomX}
                        y={style_elems.bottomY}
                    >
                        {textOnMemeBottom}
                    </text>
                </svg>
                <div className="meme-form">
                    <FormGroup>
                        <Label for="toptext">Top Text</Label>
                        <input
                            className="form-control"
                            type="text"
                            name="toptext"
                            id="toptext"
                            placeholder="Add text to the top"
                            onChange={ (event) => { settextOnMemeTop(event.currentTarget.value) }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="bottomtext">Bottom Text</Label>
                        <input
                            className="form-control"
                            type="text"
                            name="bottomtext"
                            id="bottomtext"
                            placeholder="Add text to the bottom"
                            onChange={ (event) => { settextOnMemeBottom(event.currentTarget.value) }}

                        />
                    </FormGroup>
                    <button
                        onClick={() => convertSvgToImage(svgRef)}
                        className="btn btn-primary"
                    >
                        Download Meme!
                    </button>
                    <Button className="btn btn-secondary" color="primary" onClick={() => toggle()}>Close!</Button>

                </div>
            </ModalBody>

        </Modal>
    )
}