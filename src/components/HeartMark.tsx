type HeartMarkProps = {
  className?: string;
  strokeWidth?: number;
};

export function HeartMark({ className, strokeWidth = 1.4 }: HeartMarkProps) {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.4 5.1c.6-2 2.4-3.4 4.5-3.4 1.8 0 3.3 1 4.1 2.4.8-1.5 2.4-2.6 4.2-2.5 2.4.1 4.2 1.8 4.6 4 .5 2.9-1 5.6-3.1 7.7-2 2-4.5 3.6-5.7 4.3-1.2-.7-3.9-2.4-5.9-4.6C4 11 2.6 8 3.4 5.1Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
