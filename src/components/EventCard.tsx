import type { TimelineEvent, BadgeType } from "../data/events";
import ChevronIcon from "./ChevronIcon";
import EventTypeIcon from "./EventTypeIcon";
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
  eventId: string;
  event: TimelineEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventId,
  event,
  isExpanded,
  onToggle,
}: EventCardProps) => {
  const className = `event type-${event.type}${event.featured ? " featured" : ""}${isExpanded ? " expanded" : ""}`;
  const [leadStat, ...otherStats] = event.stats;

  function handleShare(eventClick: React.MouseEvent<HTMLAnchorElement>) {
    eventClick.stopPropagation();
  }

  return (
    <div className={className} id={eventId} onClick={onToggle}>
      <div className="event-year">{event.year}</div>
      <div className="event-dot-wrap">
        <div className="event-dot" />
      </div>
      <div className="event-card">
        <div className="event-topline">
          <span className={`event-badge ${badgeClassMap[event.badge]}`}>
            <EventTypeIcon badge={event.badge} />
            {badgeTextMap[event.badge]}
          </span>
          <div className="event-actions">
            <a
              className="event-share-link"
              href={`#${eventId}`}
              onClick={handleShare}
              aria-label={`Link to ${event.title}`}
              title="Copyable link"
            >
              #
            </a>
            <ChevronIcon expanded={isExpanded} />
          </div>
        </div>
        <div className="event-title-row">
          <div className="event-title">
            {event.type === "trophy" && <TrophyIcons title={event.title} />}
            {event.title}
            {event.featured && <span className="featured-flag">Featured</span>}
          </div>
        </div>
        <div className="event-detail">{event.short}</div>
        {event.details && event.details.length > 0 && (
          <div className="event-meta-row">
            {event.details.map((detail) => (
              <div className="event-meta-pill" key={`${detail.l}-${detail.v}`}>
                <span>{detail.l}</span>
                <strong>{detail.v}</strong>
              </div>
            ))}
          </div>
        )}
        <div className="event-expand">
          <div className="event-body">
            {leadStat && (
              <div className="event-lead-stat">
                <span className="event-lead-stat-label">{leadStat.l}</span>
                <strong className="event-lead-stat-value">{leadStat.v}</strong>
              </div>
            )}
            <p className="event-body-copy">{event.body}</p>
            {otherStats.length > 0 && (
              <div className="stat-pills">
                {otherStats.map((stat) => (
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
