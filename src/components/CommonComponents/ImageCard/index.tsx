import { RefObject, useEffect, useState } from "react";
import { ImageContiner } from "./styles";

interface ImageCardProps {
  backgroundimage?: string;
  borderradius?: string;
  Elementref?: RefObject<HTMLDivElement>;
  screenToBodyRadio?: number;
}

function ImageCard({
  backgroundimage,
  borderradius,
  Elementref,
  screenToBodyRadio = 1,
}: ImageCardProps) {
  const [elementheight, setelementheight] = useState(0);

  useEffect(() => {
    if (Elementref && Elementref.current) {
      const elementheight = Elementref.current.clientHeight;
      setelementheight(elementheight * screenToBodyRadio);
    }
  }, []);
  return (
    <>
      <ImageContiner
        elementheight={elementheight}
        backgroundImage={backgroundimage}
        borderradius={borderradius}
      />
    </>
  );
}

export default ImageCard;
