import {FunctionComponent, useLayoutEffect, useRef, useState} from 'react';
import {
  MainContainer
} from './MainHeader.styles';
import ImageSlider from "./Slider/Slider";

const MainHeader: FunctionComponent = () => {
    const mainContainerRef = useRef<HTMLDivElement | null>(null);
    const [parentWidth, setParentWidth] = useState<number | null>( null);
    const [parentHeight, setParentHeight] = useState<number | null>( null);

    function setParentSizes() {
        if (mainContainerRef) {
            const clientWidth = mainContainerRef?.current?.clientWidth;
            const clientHeight = mainContainerRef?.current?.clientHeight;
            if (clientWidth && clientWidth !== parentWidth) {
                setParentWidth(clientWidth);
            }
            if (clientHeight && clientHeight !== parentHeight) {
                setParentHeight(clientHeight);
            }
        }
    }

    useLayoutEffect(() => {
        window.addEventListener('resize', setParentSizes);
        setParentSizes();
        return () => window.removeEventListener('resize', setParentSizes);
    });

    return (
        <>
            <MainContainer ref={mainContainerRef} >
                <ImageSlider
                    parentWidth={parentWidth}
                    parentHeight={parentHeight}
                />
            </MainContainer>
        </>
    )
}

export default MainHeader;
