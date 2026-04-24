import type { BadgeType } from "../data/events";

interface EventTypeIconProps {
  badge: BadgeType;
}

const icons: Record<BadgeType, React.ReactNode> = {
  trophy: (
    <>
      <path
        d="M8 4.5h8v2.1c0 3.6-1.5 6.4-4 7.8-2.5-1.4-4-4.2-4-7.8V4.5Z"
        fill="currentColor"
      />
      <path
        d="M5 5.5h3v1.3c0 1.6-.4 2.8-1.2 3.7-.8-.6-1.3-1.8-1.3-3.2V5.5Zm11 0h3v1.8c0 1.4-.5 2.6-1.3 3.2-.8-.9-1.2-2.1-1.2-3.7V5.5Z"
        fill="currentColor"
        opacity="0.64"
      />
      <path
        d="M10.2 13.3h3.6v2.1h-3.6v-2.1Zm-2 3h7.6v2.1H8.2v-2.1Z"
        fill="currentColor"
      />
      <path d="M9.6 3h4.8v1.3H9.6V3Z" fill="currentColor" opacity="0.46" />
    </>
  ),
  player: (
    <>
      <circle cx="12" cy="7" r="3" fill="currentColor" />
      <path
        d="M7.2 18.5v-1.1c0-2.8 2.3-5.1 5.1-5.1h.2c2.8 0 5.1 2.3 5.1 5.1v1.1H7.2Z"
        fill="currentColor"
      />
      <path
        d="M9.4 11.8 12 10l2.6 1.8-.8 2.1H10.2l-.8-2.1Z"
        fill="currentColor"
        opacity="0.72"
      />
    </>
  ),
  era: (
    <path
      d="M4 5h14v2H4V5Zm2.2 4h9.6v2H6.2V9Zm-1.2 4h14v2H5v-2Zm2.2 4h9.6v2H7.2v-2Z"
      fill="currentColor"
    />
  ),
  ground: (
    <>
      <path
        d="M5 9.4 12 4l7 5.4v7.6h-2.1v-6.5L12 6.8l-4.9 3.7V17H5V9.4Z"
        fill="currentColor"
      />
      <path d="M9 11h6v6H9v-6Z" fill="currentColor" opacity="0.32" />
      <path
        d="M10.1 12.1h3.8v1.3h-3.8v-1.3Zm0 2.1h3.8v1.3h-3.8v-1.3ZM4 18.4h16V20H4v-1.6Z"
        fill="currentColor"
      />
    </>
  ),
  moment: (
    <path
      d="M12 3.8 14.2 8l4.8.7-3.5 3.4.8 4.9-4.3-2.3-4.3 2.3.8-4.9L5 8.7 9.8 8 12 3.8Z"
      fill="currentColor"
    />
  ),
};

export const EventTypeIcon: React.FC<EventTypeIconProps> = ({ badge }) => {
  return (
    <span
      className={`event-type-icon event-type-icon-${badge}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none">
        {icons[badge]}
      </svg>
    </span>
  );
};

export default EventTypeIcon;
