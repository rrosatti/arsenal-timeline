import type { TimelineEvent } from "../data/events";
import ChevronIcon from "./ChevronIcon";
import EventTypeIcon from "./EventTypeIcon";

interface LegendCardProps {
  eventId: string;
  event: TimelineEvent;
  isExpanded: boolean;
  onToggle: () => void;
}

export const LegendCard: React.FC<LegendCardProps> = ({
  eventId,
  event,
  isExpanded,
  onToggle,
}: LegendCardProps) => {
  const [leadStat, ...otherStats] = event.stats;

  function handleShare(eventClick: React.MouseEvent<HTMLAnchorElement>) {
    eventClick.stopPropagation();
  }

  return (
    <article
      className={`legend-card${isExpanded ? " expanded" : ""}`}
      id={eventId}
      onClick={onToggle}
    >
      <div className="legend-card-topline">
        <span className="legend-card-badge">
          <EventTypeIcon badge={event.badge} />
          Legend
        </span>
        <div className="legend-card-actions">
          <a
            className="legend-card-share"
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

      <div className="legend-card-year">{event.year}</div>
      <h3 className="legend-card-title">{event.title}</h3>
      <p className="legend-card-short">{event.short}</p>

      {leadStat && (
        <div className="legend-card-highlight">
          <span>{leadStat.l}</span>
          <strong>{leadStat.v}</strong>
        </div>
      )}

      {otherStats.length > 0 && (
        <div className="legend-card-stat-row">
          {otherStats.slice(0, 2).map((stat) => (
            <div className="legend-card-stat" key={stat.l}>
              <span>{stat.l}</span>
              <strong>{stat.v}</strong>
            </div>
          ))}
        </div>
      )}

      <div className="legend-card-expand">
        <div className="legend-card-body">
          <p>{event.body}</p>
          {otherStats.length > 2 && (
            <div className="stat-pills">
              {otherStats.slice(2).map((stat) => (
                <div className="stat-pill" key={stat.l}>
                  {stat.l}: <strong>{stat.v}</strong>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default LegendCard;
