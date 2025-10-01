import type { SVGProps } from "react";

export function TypescriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M0 0h24v24H0V0h0z" fill="none"/>
        <path d="M22 2H2v20h20V2zm-3.4 15.36c-.47.47-1.12.7-1.8.7-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8c.68 0 1.33.23 1.8.7l-1.06 1.06c-.15-.15-.33-.23-.54-.23-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2c.2 0 .38-.08.54-.23l1.06 1.06zM11.5 9h4v1.5h-4V9zm0 3.5h2.5v1.5h-2.5v-1.5zm-5 1.5H9v-1.1l-.3-.15c-.93-.46-1.3-1.6-1-2.65.33-1.14 1.4-2.1 2.62-2.1.3 0 .58.07.83.2l.2.1V9h1.3v5.85c0 .7-.4 1.2-1.04 1.27-.4.04-.8-.06-1.12-.3-.26-.18-.4-.4-.53-.66H7v1.1z"/>
    </svg>
  );
}
