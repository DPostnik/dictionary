import { createPortal } from 'react-dom';
import { ReactNode, useLayoutEffect, useState } from 'react';

import { createWrapperAndAppendToBody } from 'utils/document';

type ReactPortalProps = {
  children: ReactNode;
  wrapperId: string;
};

export default function ReactPortal({ children, wrapperId }: ReactPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
}
