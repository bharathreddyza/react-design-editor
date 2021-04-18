import { useCallback, useEffect } from 'react';
import useCanvas from '../hooks/useCanvas';

function useEventsHandler() {
  const canvas = useCanvas();
  const onMouseWheel = useCallback(
    event => {
      if (canvas && event.e.ctrlKey) {
        const delta = event.e.deltaY;
        let zoomRatio = canvas.getZoom();
        if (delta > 0) {
          zoomRatio -= 0.04;
        } else {
          zoomRatio += 0.04;
        }
        // @ts-ignore
        canvas.zoomToPoint({ x: event.e.offsetX, y: event.e.offsetY }, zoomRatio);
      }
      event.e.preventDefault();
      event.e.stopPropagation();
    },
    [canvas]
  );

  useEffect(() => {
    if (canvas) {
      canvas.on('mouse:wheel', onMouseWheel);
    }
    return () => {
      if (canvas) {
        canvas.off('mouse:wheel', onMouseWheel);
      }
    };
  }, [canvas]);
}

export default useEventsHandler;
