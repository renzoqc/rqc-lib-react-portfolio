import './Image.scss';
import { ImageProps } from './Image.types';
import {linkTo} from "@storybook/addon-links";
import { Col, Row } from '../Grid/Grid';


const Image = ({
    classImg,
    pathImage,
    altImage,
    border,
    fade
}: ImageProps) => {
    return (
        <div
            data-testid="Image"
            className={'Image RQ-d-flex RQ-justify-center'}
        >
            <img className={`${fade ? 'image-fade' : ''} ${classImg}`}
                 src={pathImage}
                 alt={altImage}
            />
            <div className={`${border ? 'image-border' : ''}`}>
            </div>
        </div>
    );
};

export default Image;


// <div
//     data-testid="Image"
//     className={'Image'}
// >
//     <div className={`${border ? 'image-border' : ''}`}>
//         <img className={`${fade ? 'image-fade' : ''} ${classImg}`}
//              src={require(`../assets/${pathImage}`)}
//              alt={altImage}
//         />
//     </div>
// </div>