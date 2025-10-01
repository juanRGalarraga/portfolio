import type { SVGProps } from "react";

export function JavascriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M0 0h24v24H0V0h0z" fill="none"/>
        <path d="M11.5 9h1.5v6h-1.5V9zm-2.5 6H10v-1.1l-.3-.15c-.93-.46-1.3-1.6-1-2.65.33-1.14 1.4-2.1 2.62-2.1.3 0 .58.07.83.2l.2.1V9h1.3v5.85c0 .7-.4 1.2-1.04 1.27-.4.04-.8-.06-1.12-.3-.26-.18-.4-.4-.53-.66H10v1.1zm7.5 0h1.5v-3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3h1.5v-1.5h-1.5v-1c0-.28.22-.5.5-.5s.5.22.5.5v1.5z"/>
        <path d="M22 2H2v20h20V2zm-2 18H4V4h16v16z"/>
    </svg>
  );
}
