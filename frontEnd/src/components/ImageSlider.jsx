import { useState } from "react"
import '../styles/Home.css'
const ImageSlider = (slides ) => {
    
    const [currentIndex,setCurrentIndex] = useState(0);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    
    const slide = slides.slides;
    const slideStyles = {
        backgroundImage : `url(${slide[currentIndex].url})`,
    };
    const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
        setActiveSlideIndex(slideIndex)
    }
    
    return(
        <div className="sliderStyles">
            <div className="switchers">
                {slide.map((_,slideIndex) => {
                    return(
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={`indec${activeSlideIndex === slideIndex ? 'active' : ''}`}>
                            ⦿<br/>
                    </div>)
})}
            </div>
            <div style={slideStyles} className="slideStyles">
            </div>
        </div>
    )
}
export default ImageSlider