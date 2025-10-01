import type { SVGProps } from "react";

export function ExpressIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M18.8,11.5l1.06,1.06-4.59,4.59a2.5,2.5,0,0,1-3.54,0l-4.59-4.59L8.2,11.5,12,15.3l3.8-3.8ZM12,1,2,7.44l10,7L22,7.44ZM5.47,8,12,12.6,18.53,8,12,3.4Z"/>
    </svg>
  );
}
