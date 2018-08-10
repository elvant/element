import { ElementUIComponent } from './component'

/** Responsive column props */
export interface ResponsiveColumnProperties {
  /** Number of column the grid spans */
  span: number,

  /** Number of spacing on the left side of the grid */
  offset: number
}

/** Responsive column property */
export type ResponsiveColumn = number | ResponsiveColumnProperties

/** Colunm Layout Component */
export declare class ElCol extends ElementUIComponent {
  /** Number of column the grid spans */
  span: number;

  /** Number of spacing on the left side of the grid */
  offset: number;

  /** Number of columns that grid moves to the right */
  push: number;

  /** Number of columns that grid moves to the left */
  pull: number;

  /** <576px Responsive columns or column props object */
  xs: ResponsiveColumn;

  /** ≥576px Responsive columns or column props object */
  sm: ResponsiveColumn;

  /** ≥768px Responsive columns or column props object */
  md: ResponsiveColumn;

  /** ≥992px Responsive columns or column props object */
  lg: ResponsiveColumn;

  /** ≥1200px Responsive columns or column props object */
  xl: ResponsiveColumn;

  /** ≥1600px Responsive columns or column props object */
  xxl: ResponsiveColumn;

  /** custom element tag */
  tag: string;
}
