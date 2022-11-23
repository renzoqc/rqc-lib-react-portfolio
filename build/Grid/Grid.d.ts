/// <reference types="react" />
import { ColProps, GridProps, RowProps } from './Grid.types';
import './Grid.scss';
declare const Grid: (props: GridProps) => JSX.Element;
export default Grid;
export declare const Row: (props: RowProps) => JSX.Element;
export declare const Col: (props: ColProps) => JSX.Element;
