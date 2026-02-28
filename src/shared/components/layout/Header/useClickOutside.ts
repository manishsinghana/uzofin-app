import { useEffect } from "react";
import type { RefObject } from "react";

function useClickOutside<T extends HTMLElement>(
  element: RefObject<T | null>,
  callback: () => void
): void {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!element.current) return;

      if (!element.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [element, callback]);
}

export { useClickOutside };