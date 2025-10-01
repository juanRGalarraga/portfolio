import type { SVGProps } from "react";

export function DockerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M22.1 9.91c-.34-.78-1-1.35-1.8-1.53V2.5a.5.5 0 0 0-.5-.5h-17a.5.5 0 0 0-.5.5v16.1c0 .28.22.5.5.5h.39a.5.5 0 0 0 .5-.5V8.5h3v-2h3v2h3v-2h3v2h3.33c.9 0 1.67.63 1.88 1.48.21.85-.12 1.74-.81 2.22l-1.32.93 1.32.93c.69.48 1.02 1.37.81 2.22-.21.85-.98 1.48-1.88 1.48H2.89a.5.5 0 0 0-.5.5v2.89a.5.5 0 0 0 .5.5h16.22c2.75 0 4.9-2.29 4.4-4.99-.25-1.38-1-2.59-2.02-3.47l-1.39-1.22 1.39-1.22c1.02-.88 1.77-2.09 2.02-3.47zM6.5 7.5H4v-2h2.5v2zm4-2H8v2h2.5v-2zm4 0h-2.5v2H14.5v-2z"/>
    </svg>
  );
}
