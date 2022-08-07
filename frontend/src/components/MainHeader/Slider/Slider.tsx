import {FunctionComponent, useCallback, useEffect, useRef, useState} from 'react';
import {
    ImageItem,
    SliderContainer,
    SliderControls,
    SliderSwitchLeft,
    SliderSwitchRight,
    SliderTextSwitcher,
    SliderTextSwitcherWrapper,
    SliderWrapper,
} from './Slider.styles';
import {MainHeaderPhotos} from "../MainHeader.constants";

const ImageSlider: FunctionComponent<{ parentWidth: number | null; parentHeight: number | null; }> = ({
  parentWidth,
  parentHeight,
}) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const [isVertical, setIsVertical] = useState<Array<boolean>>(MainHeaderPhotos.map(() => false));
    const imageRefList = useRef<Array<HTMLImageElement | null>>([]);
    const sliderPosition = useCallback(() => {
        if (sliderIndex === 0 || !parentWidth) {
            return 0;
        }
        return -(sliderIndex * parentWidth) + 'px';
    }, [parentWidth, sliderIndex])

    useEffect(() => {
        imageRefList.current.forEach((imageCurrent, imageIndex) => {
            const imageClientWidth = imageCurrent?.clientWidth;
            const imageClientHeight = imageCurrent?.clientHeight;
            if (parentWidth && imageClientWidth) {
                if (imageClientWidth < parentWidth) {
                    setIsVertical((prevState) => {
                        const newValue = [...prevState];
                        newValue[imageIndex] = false;
                        return newValue;
                    });
                }
            }
            if (parentHeight && imageClientHeight) {
                if (imageClientHeight < parentHeight) {
                    setIsVertical((prevState) => {
                        const newValue = [...prevState];
                        newValue[imageIndex] = true;
                        return newValue;
                    });
                }
            }
        });

    }, [parentWidth, parentHeight])

    function handleTextSwitchClick(slideIndex: number) {
        setSliderIndex(slideIndex);
    }

    function handleButtonSwitchClick(direction: string) {
        setSliderIndex((prevState) => {
            const maxArrLength = MainHeaderPhotos.length - 1;
            if (direction === 'left') {
                return prevState === 0 ? maxArrLength : prevState - 1
            }
            return prevState === maxArrLength ? 0 : prevState + 1
        });
    }

    const renderImageSlide = (imageItem: string, imageIndex: number) => {
        return (
            <ImageItem>
                <img
                    style={isVertical[imageIndex] ? { height: '100%' } : { width: '100%' }}
                    ref={el => (imageRefList.current[imageIndex] = el)}
                    key={`image-${imageIndex}`}
                    src={imageItem}
                    alt={`slider-${imageIndex}`}
                />
            </ImageItem>
        )
    };

    const renderImageSwitcher = (imageItem: string, imageIndex: number) => {
        const numericValue = imageIndex + 1 < 10 ? `0${imageIndex + 1}` : imageIndex + 1;
        return (
            <SliderTextSwitcher
                color={imageIndex === sliderIndex ? 'white' : undefined}
                onClick={() => handleTextSwitchClick(imageIndex)}
            >
                {numericValue}
            </SliderTextSwitcher>
        )
    };

    return (
        <SliderContainer>
            <SliderWrapper style={{ left: sliderPosition(), width: parentWidth || '100%', height: parentHeight || '100%' }}>
                {MainHeaderPhotos.map(renderImageSlide)}
            </SliderWrapper>
            <SliderControls>
                <>
                    <SliderSwitchLeft onClick={() => handleButtonSwitchClick('left')} />
                    <SliderTextSwitcherWrapper>
                        {MainHeaderPhotos.map(renderImageSwitcher)}
                    </SliderTextSwitcherWrapper>
                    <SliderSwitchRight onClick={() => handleButtonSwitchClick('right')} />
                </>
            </SliderControls>
        </SliderContainer>
    );
};

export default ImageSlider;
