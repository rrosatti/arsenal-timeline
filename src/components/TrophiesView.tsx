import { getEventId } from "../data/events";
import type { TimelineEvent } from "../data/events";
import EventCard from "./EventCard";

interface TrophiesViewProps {
  events: TimelineEvent[];
  expandedIndex: number | null;
  onToggleExpand: (index: number) => void;
}

const competitionGroups = [
  {
    id: "league",
    title: "League Titles",
    description:
      "Championship-winning seasons and the league sides that defined eras.",
    match: (event: TimelineEvent) =>
      event.title.toLowerCase().includes("league") ||
      event.title.toLowerCase().includes("invincibles") ||
      event.title.toLowerCase().includes("double"),
  },
  {
    id: "fa-cup",
    title: "FA Cups",
    description:
      "Wembley days, comebacks, and Arsenal's most reliable route to silverware.",
    match: (event: TimelineEvent) =>
      event.title.toLowerCase().includes("fa cup"),
  },
  {
    id: "league-cup",
    title: "League Cups",
    description: "A slimmer shelf, but still part of the honours cabinet.",
    match: (event: TimelineEvent) =>
      event.title.toLowerCase().includes("league cup"),
  },
  {
    id: "europe",
    title: "European Honours & Finals",
    description:
      "Continental highs, near-misses, and the nights that still sting.",
    match: (event: TimelineEvent) =>
      event.title.toLowerCase().includes("uefa") ||
      event.title.toLowerCase().includes("champions league") ||
      event.title.toLowerCase().includes("europa"),
  },
];

export const TrophiesView: React.FC<TrophiesViewProps> = ({
  events,
  expandedIndex,
  onToggleExpand,
}: TrophiesViewProps) => {
  const trophyEvents = events.filter((event) => event.type === "trophy");
  const europeanFinals = events.filter(
    (event) =>
      event.type === "era" &&
      (event.title.toLowerCase().includes("champions league final") ||
        event.title.toLowerCase().includes("europa league final")),
  );

  const grouped = competitionGroups.map((group) => {
    const groupedEvents =
      group.id === "europe"
        ? [...trophyEvents.filter(group.match), ...europeanFinals]
        : trophyEvents.filter(group.match);

    return { ...group, events: groupedEvents };
  });

  return (
    <div className="alt-view-wrap">
      <section className="view-summary-band">
        <div className="view-summary-card">
          <span className="view-summary-kicker">Honours Cabinet</span>
          <strong>{trophyEvents.length}</strong>
          <span>trophy entries in the timeline</span>
        </div>
        <div className="view-summary-card">
          <span className="view-summary-kicker">European Finals</span>
          <strong>{europeanFinals.length}</strong>
          <span>major continental final entries</span>
        </div>
      </section>

      {grouped.map((group) => (
        <section key={group.id} className="alt-view-section">
          <div className="alt-view-header">
            <h2>{group.title}</h2>
            <p>{group.description}</p>
          </div>
          <div className="alt-view-list">
            {group.events.map((event) => {
              const index = events.indexOf(event);

              return (
                <EventCard
                  key={getEventId(event)}
                  eventId={getEventId(event)}
                  event={event}
                  isExpanded={expandedIndex === index}
                  onToggle={() => onToggleExpand(index)}
                />
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TrophiesView;
