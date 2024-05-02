import './Image.scss';
import {ImageProps} from './Image.types';


const Image = (
    {
        className = 'Image RQ-d-flex RQ-justify-center',
        classImg = "",
        width,
        height,
        path,
        alt,
        border,
        fade,
        desktopMultiplier,
    }: ImageProps) => {
    const styles = {
        width: `${width}px`,
        height: `${height}px`,
    };

    const desktopStyles = {
        width: `${width * desktopMultiplier}px`,
        height: `${height * desktopMultiplier}px`,
    };

    return (
        <div
            data-testid="Image"
            className={className}
        >
            <img className={`${fade ? 'image-fade' : ''} ${classImg}`}
                 src={path}
                 alt={alt}
                 style={window.innerWidth > 992 ? desktopStyles : styles}
            />
            <div className={`${border ? 'image-border' : ''}`}
                 style={window.innerWidth > 992 ? desktopStyles : styles}
            >
            </div>
        </div>
    );
};

export default Image;