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
                autoPlay
                interval={5000}
                transitionTime={1000}
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
            <Wrapper>
                {linkImages.map((path, index) => (
                    <ImageLink key={index}>
                        <img src={path} alt={`tutorial ${index + 1}`} />
                    </ImageLink>
                ))}
            </Wrapper>
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

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    gap: 1%;
`

const ImageLink = styled.div`
    cursor: pointer;
    width: 100%;
    flex: 1;

    &:hover {
        opacity: 0.9;
        flex: 1.1;
    }

    img {
        width: 100%;
    }
`

const SubTitle = styled.h3`
    line-height: 3rem;
    font-weight: 600;
    font-size: ${({theme}) => theme.fontSize.md};
`
