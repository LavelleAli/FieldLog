import { Turbine } from "@/data/Fleetdata";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  dateStyle: "medium",
  timeZone: "UTC",
});

const AssessmentCards = ({
  turbine,
  newCard,
  editCard,
}: {
  turbine: Turbine;
  newCard: boolean;
  editCard: (id: string, status: Turbine["status"]) => void;
}) => {
  return (
    <article
      className={`${newCard ? "cardsAdded" : ""} flex flex-col gap-4 rounded-2xl bg-fairwindblue border border-white hover:border-accent hover:scale-110 p-4 text-left text-sm transition-[border-color,scale] duration-500 `}
    >
      <header className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold">{turbine?.title}</h2>
          <p className="wrap-break-word">{turbine?.equipment}</p>
        </div>
        <span className="shrink-0 rounded-full border px-2 py-0.5 text-xs capitalize">
          {turbine?.priority}
        </span>
      </header>

      <div className="grid grid-cols-2 gap-3">
        <label className="flex min-w-0 flex-col gap-1">
          Type
          <select
            name="type"
            defaultValue={turbine?.type}
            className="rounded-md border p-1"
          >
            <option value="electrical">Electrical</option>
            <option value="mechanical">Mechanical</option>
            <option value="hydraulic">Hydraulic</option>
          </select>
        </label>
        <label className="flex min-w-0 flex-col gap-1">
          Status
          <select
            name="status"
            defaultValue={turbine?.status}
            className="rounded-md border p-1"
            onChange={(e) => editCard(turbine.id, e.target.value as Turbine["status"] )}
          >
            <option value="open">Open</option>
            <option value="in progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </label>
      </div>

      <section className="flex-1">
        <h3 className="font-semibold">Notes:</h3>
        <p className="wrap-break-word">{turbine?.notes}</p>
        {/* The textarea for entering descriptions will be written on the front of the card and can be read on the back of the card. */}
      </section>

      <footer className="flex items-center justify-between gap-2 border-t pt-2 text-xs">
        <span className="min-w-0 truncate font-mono" title={turbine?.id}>
          ID: {turbine?.id}
        </span>
        <time dateTime={turbine?.updatedAt} className="shrink-0">
          Updated: {dateFormat.format(new Date(turbine?.updatedAt))}
        </time>
      </footer>
      {/* Image link: image will pop up as preview when hovered/selected */}
    </article>
  );
};

export default AssessmentCards;
