import React,{ Fragment, useState, useEffect } from 'react'
import { TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";
// import SVGMap from '../../Directory/UI/svg-map';
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
const Maps=(props)=>{
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
      );
      useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return(
          
        <Fragment>
            {windowDimensions.width < 992 ? 
                    <TransformWrapper
                    initialScale={1}
                    initialPositionX={10}
                    initialPositionY={0}
                    wheel={{disabled:true}}
                    centerZoomedOut={true}
                    // limitsOnWheel={false}
                    limitToBounds={true}
                    centerOnInit={true}
                        >
                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                    <Fragment>
                        <div className="tools">
                        <button className="zoomin" onClick={() => zoomIn()}>+</button>
                        <button className="zoomout" onClick={() => zoomOut()}>-</button>
                        </div>
                        <h1 className='mapHead'>{props.head}</h1>
                        <TransformComponent>
                            {/* <SVGMap  styles={props.styles}/> */}
                            <img src={props.Img} alt="directory-map" className={props.styles} onClick={props.clickedFunc}/>
                        </TransformComponent>
                    </Fragment>
                    )}
                </TransformWrapper>
                :
                <TransformWrapper
                initialScale={1}
                initialPositionX={167}
                initialPositionY={0}
                // wheelZoomEnabled={false}
                // limitToBounds={true}
                // wheel={{disabled:true}}
                // initialPositionX={0}
                // initialPositionY={0}
                wheel={{disabled:true}}
                limitsOnWheel={false}
                limitToBounds={true}
                centerOnInit={true}
                    >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <Fragment>
                    <div className="tools">
                    <button className="zoomin" onClick={() => zoomIn()}>+</button>
                    <button className="zoomout" onClick={() => zoomOut()}>-</button>
                    </div>
                    <h1 className='mapHead'>{props.head}</h1>
                    <TransformComponent>
                            {/* <SVGMap  styles={props.styles}/> */}
                        <img src={props.Img} alt="directory-map" className={props.styles} />
                    </TransformComponent>
                </Fragment>
                )}
            </TransformWrapper>
            }
        </Fragment>
    )
}


export default Maps