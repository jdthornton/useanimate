import { useState, useEffect } from 'react';

export interface UseAnimateReturnProps {
  isShowing: boolean;
  isAnimated: boolean;
  elementProps: {
    onTransitionEnd: () => void;
  }
}

export default function useAnimate(
  isShowing: boolean,
  onAnimationExitEnd?: () => void
): UseAnimateReturnProps {

  const [show,setShow] = useState<boolean>(false),
        [animated,setAnimated] = useState<boolean>(false),
        onTransitionEnd = () => {
          !isShowing && setShow(false)
          if(!isShowing){
            setShow(false);
            if(onAnimationExitEnd){
              onAnimationExitEnd();
            }
          }
        }

  useEffect(() => {
    if(isShowing){
      setShow(true)
      setTimeout(() => setAnimated(true), 20)
    } else {
      setAnimated(false)
    }
  },[isShowing])

  return {
    isShowing: show,
    isAnimated: animated,
    elementProps: {
      onTransitionEnd
    }
  }
}
