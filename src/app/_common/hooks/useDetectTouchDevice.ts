// https://novajs.co/react-hook-touch-device
import { useEffect, useState } from "react"

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)

  useEffect(() => {
    function onResize() {
      setIsTouchDevice(
        // comment out becuz it is not accurate when resizing with inspector
        // "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    }

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [])

  return isTouchDevice
}