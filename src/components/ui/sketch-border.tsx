import type { SVGProps } from "react";

// Hand-sketched border components with wobbly, pencil-drawn paths

export function SketchBox({
  width = 400,
  height = 300,
  strokeWidth = 2,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & {
  width?: number;
  height?: number;
  strokeWidth?: number;
}) {
  // Create slightly wobbly paths for hand-drawn effect
  const topPath = `M 2,${strokeWidth} 
    Q ${width * 0.15},${strokeWidth - 2} ${width * 0.3},${strokeWidth + 1.5}
    Q ${width * 0.5},${strokeWidth - 1.5} ${width * 0.7},${strokeWidth + 2}
    Q ${width * 0.85},${strokeWidth - 1} ${width - 2},${strokeWidth}`;

  const rightPath = `M ${width - strokeWidth},2
    Q ${width - strokeWidth + 2},${height * 0.2} ${width - strokeWidth - 1.5},${height * 0.4}
    Q ${width - strokeWidth + 1.5},${height * 0.6} ${width - strokeWidth - 2},${height * 0.8}
    Q ${width - strokeWidth + 1},${height * 0.9} ${width - strokeWidth},${height - 2}`;

  const bottomPath = `M ${width - 2},${height - strokeWidth}
    Q ${width * 0.8},${height - strokeWidth + 2} ${width * 0.6},${height - strokeWidth - 1.5}
    Q ${width * 0.4},${height - strokeWidth + 1.5} ${width * 0.2},${height - strokeWidth - 2}
    Q ${width * 0.1},${height - strokeWidth + 1} 2,${height - strokeWidth}`;

  const leftPath = `M ${strokeWidth},${height - 2}
    Q ${strokeWidth - 2},${height * 0.75} ${strokeWidth + 1.5},${height * 0.5}
    Q ${strokeWidth - 1.5},${height * 0.3} ${strokeWidth + 2},${height * 0.15}
    Q ${strokeWidth - 1},${height * 0.05} ${strokeWidth},2`;

  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Pencil texture filter */}
        <filter id="pencil-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            seed="2"
          />
          <feDisplacementMap in="SourceGraphic" scale="2" />
        </filter>
      </defs>

      {/* Hand-drawn border lines */}
      <path
        d={topPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#pencil-texture)"
        opacity="0.9"
      />
      <path
        d={rightPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#pencil-texture)"
        opacity="0.9"
      />
      <path
        d={bottomPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#pencil-texture)"
        opacity="0.9"
      />
      <path
        d={leftPath}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#pencil-texture)"
        opacity="0.9"
      />
    </svg>
  );
}

export function SketchUnderline({
  width = 200,
  strokeWidth = 2,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { width?: number; strokeWidth?: number }) {
  const path = `M 2,${strokeWidth} 
    Q ${width * 0.2},${strokeWidth + 2} ${width * 0.4},${strokeWidth - 1}
    Q ${width * 0.6},${strokeWidth + 1.5} ${width * 0.8},${strokeWidth - 1.5}
    Q ${width * 0.9},${strokeWidth + 1} ${width - 2},${strokeWidth}`;

  return (
    <svg
      width={width}
      height={strokeWidth * 3}
      className={className}
      viewBox={`0 0 ${width} ${strokeWidth * 3}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <filter id="underline-texture">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            seed="5"
          />
          <feDisplacementMap in="SourceGraphic" scale="1.5" />
        </filter>
      </defs>
      <path
        d={path}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        filter="url(#underline-texture)"
        opacity="0.85"
      />
    </svg>
  );
}

// CSS class helper for applying sketch borders to any element
export function SketchBorderWrapper({
  children,
  className = "",
  strokeWidth = 2,
}: {
  children: React.ReactNode;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Top border */}
      <svg
        className="text-foreground/80 pointer-events-none absolute top-0 left-1 h-3 w-[calc(100%-8px)]"
        preserveAspectRatio="none"
        viewBox="0 0 400 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pencil-top">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="3 0.8"
              numOctaves="5"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
        <path
          d="M 0,3 Q 100,1 200,4 Q 300,1.5 400,3"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          filter="url(#pencil-top)"
          opacity="0.9"
        />
      </svg>

      {/* Right border */}
      <svg
        className="text-foreground/80 pointer-events-none absolute top-1 right-0 h-[calc(100%-8px)] w-3"
        preserveAspectRatio="none"
        viewBox="0 0 6 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pencil-right">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8 3"
              numOctaves="5"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
        <path
          d="M 3,0 Q 4,75 2,150 Q 4.5,225 3,300"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          filter="url(#pencil-right)"
          opacity="0.9"
        />
      </svg>

      {/* Bottom border */}
      <svg
        className="text-foreground/80 pointer-events-none absolute bottom-0 left-1 h-3 w-[calc(100%-8px)]"
        preserveAspectRatio="none"
        viewBox="0 0 400 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pencil-bottom">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="3 0.8"
              numOctaves="5"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
        <path
          d="M 400,3 Q 300,4.5 200,2 Q 100,4 0,3"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          filter="url(#pencil-bottom)"
          opacity="0.9"
        />
      </svg>

      {/* Left border */}
      <svg
        className="text-foreground/80 pointer-events-none absolute top-1 left-0 h-[calc(100%-8px)] w-3"
        preserveAspectRatio="none"
        viewBox="0 0 6 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="pencil-left">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8 3"
              numOctaves="5"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" scale="2" />
          </filter>
        </defs>
        <path
          d="M 3,300 Q 2,225 3.5,150 Q 1.5,75 3,0"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          filter="url(#pencil-left)"
          opacity="0.9"
        />
      </svg>

      {children}
    </div>
  );
}
