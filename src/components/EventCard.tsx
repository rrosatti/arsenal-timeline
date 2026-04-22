import type { TimelineEvent, BadgeType } from "../data/events";
import TrophyIcons from "./TrophyIcon";

const badgeClassMap: Record<BadgeType, string> = {
  trophy: "badge-trophy",
  player: "badge-player",
  era: "badge-era",
  ground: "badge-ground",
  moment: "badge-moment",
};

const badgeTextMap: Record<BadgeType, string> = {
  trophy: "trophy",
  player: "legend",
  era: "milestone",
  ground: "stadium",
  moment: "moment",
};

interface EventCardProps {
  event: TimelineEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  event,
  isExpanded,
  onToggle,
}: EventCardProps) => {
  const className = `event type-${event.type}${isExpanded ? " expanded" : ""}`;

  return (
    <div className={className} onClick={onToggle}>
      <div className="event-year">{event.year}</div>
      <div className="event-dot-wrap">
        <div className="event-dot" />
      </div>
      <div className="event-card">
        <span className={`event-badge ${badgeClassMap[event.badge]}`}>
          {badgeTextMap[event.badge]}
        </span>
        <div className="event-title">
          {event.type === "trophy" && <TrophyIcons title={event.title} />}
          {event.title}
        </div>
        <div className="event-detail">{event.short}</div>
        <div className="event-expand">
          <div className="event-body">
            {event.body}
            {event.stats.length > 0 && (
              <div className="stat-pills">
                {event.stats.map((stat) => (
                  <div className="stat-pill" key={stat.l}>
                    {stat.l}: <strong>{stat.v}</strong>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
