import HeroImage from '../front-end-dev-test-assets/hero.jpg'

const Hero = () => {
    return (
        <div 
            className='hero-image'
            style={{
                backgroundImage: `url(${HeroImage})`,
                backgroundSize: `cover`,
            }}
        >
            Hero
        </div>
    )
}

export default Hero