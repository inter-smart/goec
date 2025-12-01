"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  // Handle shadcn/ui components that need scroll locking
  useEffect(() => {
    const handlePopoverOpen = () => {
      // Stop lenis when popover/dialog opens
      lenisRef.current?.lenis?.stop();
    };

    const handlePopoverClose = () => {
      // Resume lenis when popover/dialog closes
      lenisRef.current?.lenis?.start();
    };

    // Listen for Radix UI portal events
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Check for Radix UI portals
            if (
              node.hasAttribute?.("data-radix-popper-content-wrapper") ||
              node.hasAttribute?.("data-radix-dialog-overlay") ||
              node.hasAttribute?.("data-radix-select-content") ||
              node.hasAttribute?.("data-radix-dropdown-menu-content") ||
              node.classList?.contains("radix-portal")
            ) {
              handlePopoverOpen();

              // Add cleanup when element is removed
              const removeObserver = new MutationObserver(() => {
                if (!document.contains(node)) {
                  handlePopoverClose();
                  removeObserver.disconnect();
                }
              });

              removeObserver.observe(document.body, {
                childList: true,
                subtree: true,
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        normalizeWheel: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        // Prevent scroll on specific elements
        prevent: (node) => {
          return (
            node.hasAttribute("data-lenis-prevent") ||
            node.closest("[data-lenis-prevent]") ||
            node.hasAttribute("data-radix-scroll-area-viewport") ||
            node.closest("[data-radix-scroll-area-viewport]") ||
            node.hasAttribute("data-radix-select-content") ||
            node.closest("[data-radix-select-content]") ||
            node.hasAttribute("data-radix-dropdown-menu-content") ||
            node.closest("[data-radix-dropdown-menu-content]") ||
            node.hasAttribute("data-radix-popover-content") ||
            node.closest("[data-radix-popover-content]") ||
            node.classList.contains("lenis-prevent")
          );
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

// "use client";

// import { ReactLenis } from "lenis/react";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// export function LenisProvider({ children }) {
//   const lenisRef = useRef(null);

//   useEffect(() => {
//     function update(time) {
//       lenisRef.current?.lenis?.raf(time * 1000);
//     }

//     gsap.ticker.add(update);

//     return () => {
//       gsap.ticker.remove(update);
//     };
//   }, []);

//   // Handle shadcn/ui components that need scroll locking
//   useEffect(() => {
//     const handlePopoverOpen = () => {
//       // Stop lenis when popover/dialog opens
//       lenisRef.current?.lenis?.stop();
//     };

//     const handlePopoverClose = () => {
//       // Resume lenis when popover/dialog closes
//       lenisRef.current?.lenis?.start();
//     };

//     // Listen for Radix UI portal events
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         mutation.addedNodes.forEach((node) => {
//           if (node.nodeType === 1) {
//             // Check for Radix UI portals
//             if (
//               node.hasAttribute?.("data-radix-popper-content-wrapper") ||
//               node.hasAttribute?.("data-radix-dialog-overlay") ||
//               node.hasAttribute?.("data-radix-select-content") ||
//               node.hasAttribute?.("data-radix-dropdown-menu-content") ||
//               node.classList?.contains("radix-portal")
//             ) {
//               handlePopoverOpen();

//               // Add cleanup when element is removed
//               const removeObserver = new MutationObserver(() => {
//                 if (!document.contains(node)) {
//                   handlePopoverClose();
//                   removeObserver.disconnect();
//                 }
//               });

//               removeObserver.observe(document.body, {
//                 childList: true,
//                 subtree: true,
//               });
//             }
//           }
//         });
//       });
//     });

//     observer.observe(document.body, {
//       childList: true,
//       subtree: true,
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <ReactLenis
//       ref={lenisRef}
//       root
//       options={{
//         lerp: 0.1,
//         duration: 1.2,
//         orientation: "vertical",
//         gestureOrientation: "vertical",
//         smoothWheel: true,
//         smoothTouch: false,
//         wheelMultiplier: 1,
//         touchMultiplier: 2,
//         normalizeWheel: true,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         // Prevent scroll on specific elements
//         prevent: (node) => {
//           return (
//             node.hasAttribute("data-lenis-prevent") ||
//             node.closest("[data-lenis-prevent]") ||
//             node.hasAttribute("data-radix-scroll-area-viewport") ||
//             node.closest("[data-radix-scroll-area-viewport]") ||
//             node.hasAttribute("data-radix-select-content") ||
//             node.closest("[data-radix-select-content]") ||
//             node.hasAttribute("data-radix-dropdown-menu-content") ||
//             node.closest("[data-radix-dropdown-menu-content]") ||
//             node.hasAttribute("data-radix-popover-content") ||
//             node.closest("[data-radix-popover-content]") ||
//             node.classList.contains("lenis-prevent")
//           );
//         },
//       }}
//     >
//       {children}
//     </ReactLenis>
//   );
// }
