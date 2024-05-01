import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      x="http://www.w3.org/2000/svg"
      width={22}
      height={19.649}
      viewBox="0 0 22 19.649"
      {...props}
    >
      <Path
        d="M4 19.649a1 1 0 01-1-1v-9H0L10.327.26a1 1 0 011.346 0L22 9.648h-3v9a1 1 0 01-1 1z"
        fill="#4f75ff"
      />
    </Svg>
  );
}

export default SvgComponent;