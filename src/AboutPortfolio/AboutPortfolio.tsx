import './AboutPortfolio.scss';
import { AboutPortfolioProps } from './AboutPortfolio.types';
import {linkTo} from "@storybook/addon-links";
import { Col, Row } from '../Grid/Grid';
import Image from '../Image/Image'
import {useEffect, useState} from "react";


const AboutPortfolio = ({
    pathImage,
    altImage,
    withText,
}: AboutPortfolioProps) => {

    const CircleGreen = () =>
        <svg height="20" width="20" className={'circle'}>
            <circle cx="10" cy="10" r="6" strokeWidth="1.5"/>
        </svg>;

    const arrCircle: number[] = [0, 1, 2, 3, 4];

    const arrAbout: string[] = [
        "UNO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
        "DOS Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
        "TRES Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
        "CUATRO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
        "CINCO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    ]

    const arrThoughts: string[] = [
        "Simplicity is the baddest choice to be the best.",
        "I know I’m not successful enough, but I’m passionate enough not to worry about success.",
        "Creativity is the driver of an unstoppable train called Passion."
    ]

    const [about, setAbout] = useState<string>("");
    const [sizeAbout, setSizeAbout] = useState<number>(3);

    useEffect(() => {
        setAbout(arrAbout[sizeAbout])
    }, []);

    const updateAbout = (i: number) => {
        setAbout(arrAbout[i])
        setSizeAbout(i)
    }

    return (
        <div data-testid="AboutPortfolio"
             className={'AboutPortfolio'}
        >
            <Row
                className={'About RQ-d-flex'}
                noGutter
            >
                <Col xs={18} other={10} className={'content'}>
                    <div className={'RQ-d-flex RQ-align-center RQ-mb-4'}>
                        <p className={'RQ-theme RQ-mr-2'}>01.</p>
                        <p>About</p>
                        <hr className={'line'}/>
                    </div>
                    <div className={'circle-section'}>
                        <p className={'RQ-f-12 RQ-mb-4 RQ-ml-4'}>ADJUST BIO LENGTH:</p>
                        {
                            arrCircle.map(i =>
                                <a href={'#'}
                                   key={i}
                                   className={`${(arrCircle.length-1 === i) || (i===0) ? (i===0 ? 'RQ-mr-4' : '') || (arrCircle.length-1 === i ? 'RQ-ml-4' : '') : 'RQ-mx-4'} ${i === sizeAbout ? 'active' : ''} `}
                                   onClick={() => updateAbout(i)}
                                >
                                    <CircleGreen/>
                                </a>
                            )
                        }
                        <div>
                            <div className={'left'}>shortest</div>
                            <div className={'right'}>longest</div>
                        </div>
                    </div>
                    <p className={'RQ-mt-5'}>
                        {about}
                    </p>
                </Col>
                <Col xs={18} other={8}>
                    <Image
                        classImg={''}
                        pathImage={'img/bartolito.png'}
                        altImage={'portfolio'}
                        border={true}
                        fade={true}
                    />
                </Col>
            </Row>
            <Row
                className={'thoughts RQ-d-flex RQ-justify-center RQ-mx-5'}
                noGutter
            >
                {   arrThoughts.map(item =>
                        <Col xs={18} other={6}>
                            <div className={'container'}>
                                <p className={'RQ-f-14'}>"{item}"</p>
                                <p className={'signature RQ-f-13'}>- Renzo Quispe</p>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </div>
    );
};

export default AboutPortfolio;