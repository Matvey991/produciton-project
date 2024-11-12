declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  export const classNames: IClassNames;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.svg";
declare module "*.jpg";
declare module "*.jpeg";
