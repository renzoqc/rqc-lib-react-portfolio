import './SkillsPortfolio.scss';
import { SkillsPortfolioProps } from './SkillsPortfolio.types';
import {linkTo} from "@storybook/addon-links";
import { Col, Row } from '../Grid/Grid';
import Image from '../Image/Image'
import {useEffect, useState} from "react";


const SkillsPortfolio = ({
    pathImage,
    altImage,
    withText,
}: SkillsPortfolioProps) => {
    //
    // const CircleGreen = () =>
    //     <svg height="20" width="20" className={'circle'}>
    //         <circle cx="10" cy="10" r="6" strokeWidth="1.5"/>
    //     </svg>;
    //
    // const arrCircle: number[] = [0, 1, 2, 3, 4];
    //
    // const arrAbout: string[] = [
    //     "UNO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    //     "DOS Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    //     "TRES Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    //     "CUATRO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    //     "CINCO Jason Lengstorf is the VP of Developer Experience at Netlify and the host of Learn With Jason, a live-streamed video show where he pair programs to learn something new in 90 minutes. As a keynote speaker and author, Jason focuses on building healthier teams through trust, curiosity, and play. He's trying his very best to follow his own advice. He lives in Portland, Oregon.\n",
    // ]
    //
    // const arrThoughts: string[] = [
    //     "Simplicity is the baddest choice to be the best.",
    //     "I know I’m not successful enough, but I’m passionate enough not to worry about success.",
    //     "Creativity is the driver of an unstoppable train called Passion."
    // ]
    //
    // const [about, setAbout] = useState<string>("");
    // const [sizeAbout, setSizeAbout] = useState<number>(3);
    //
    // useEffect(() => {
    //     setAbout(arrAbout[sizeAbout])
    // }, []);
    //
    // const updateAbout = (i: number) => {
    //     setAbout(arrAbout[i])
    //     setSizeAbout(i)
    // }

    return (
        <div data-testid="SkillsPortfolio"
             className={'SkillsPortfolio'}
        >
            <div className={'RQ-d-flex RQ-align-center RQ-mb-4 RQ-w-50'}>
                <p className={'RQ-theme RQ-mr-2'}>02.</p>
                <p>Skillsets</p>
                <hr className={'line'}/>
            </div>

            <div className={"test"}>
                <p className="uno">asdfasd</p>
                <p className="dos">asdfasd</p>
                <p className="tres">asdfasd</p>
                <p className="cuatro">asdfasd</p>
                <p className="cinco">asdfasd</p>
                <p className="seis">asdfasd</p>
            </div>

            {/*<Row*/}
            {/*    className={'About RQ-d-flex'}*/}
            {/*    noGutter*/}
            {/*>*/}
            {/*    <Col xs={18} other={10} className={'content'}>*/}
            {/*    </Col>*/}
            {/*    <Col xs={18} other={8}>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    );
};

export default SkillsPortfolio;