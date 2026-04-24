interface ChevronIconProps {
  expanded: boolean;
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({ expanded }) => {
  const className = expanded
    ? "event-chevron event-chevron-expanded"
    : "event-chevron";

  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="m7 10 5 5 5-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
};

export default ChevronIcon;
