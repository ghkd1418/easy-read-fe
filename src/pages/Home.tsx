import {Carousel} from 'react-responsive-carousel'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Home() {
    const onChange = () => {}

    const onClickItem = () => {}

    const onClickThumb = () => {}

    const imagePaths = [
        '/images/tutorial1.png',
        '/images/tutorial2.png',
        '/images/tutorial3.png',
        '/images/tutorial4.png',
        '/images/tutorial5.png',
        '/images/tutorial6.png',
    ]

    return (
        <Container>
            <Carousel
                showArrows={true}
                centerSlidePercentage={30}
                // showThumbs={false}
                showStatus={false}
                emulateTouch
                infiniteLoop={true}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
            >
                {imagePaths.map((path, index) => (
                    <Image key={index}>
                        <img src={path} alt={`tutorial ${index + 1}`} />
                    </Image>
                ))}
            </Carousel>
        </Container>
    )
}

const Container = styled.div`
    height: 408px;
`

const Image = styled.div`
    width: 100%;
`
