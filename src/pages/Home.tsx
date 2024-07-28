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

    const linkImages = ['/images/link1.png', '/images/link2.png', '/images/link3.png']

    return (
        <Container>
            <Carousel
                showArrows={true}
                centerSlidePercentage={30}
                showThumbs={false}
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
            <SubTitle>글맞춤에서 확인해볼 것들</SubTitle>
            <Carousel
                showArrows={true}
                centerSlidePercentage={33}
                showThumbs={false}
                showStatus={false}
                emulateTouch
                centerMode={true}
                infiniteLoop={true}
                onChange={onChange}
                onClickItem={onClickItem}
                onClickThumb={onClickThumb}
            >
                {linkImages.map((path, index) => (
                    <ImageLink key={index}>
                        <img src={path} alt={`tutorial ${index + 1}`} />
                    </ImageLink>
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
    margin-top: 2px;
`

const ImageLink = styled.div`
    cursor: pointer;

    &hover {
        //opacity: 0.2;
    }
`

const SubTitle = styled.h3`
    line-height: 3rem;
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.md};
`
