import { googleReviews } from "@/lib/google-reviews";
import { google, site } from "@/lib/site";

function Stars({ className = "", size = "h-6 w-6" }: { className?: string; size?: string }) {
  return (
    <span aria-hidden="true" className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${size} fill-sun-deep`}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

/** Google rating and a prompt to leave a review, shown above the footer on every page. */
export function GoogleReviewsBand() {
  const { rating } = google;
  return (
    <section aria-labelledby="google-reviews" className="bg-sky-soft">
      <div className="wrap flex flex-col gap-4 py-7 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2">
          <Stars size="h-5 w-5" />
          <h2 id="google-reviews" className="font-display text-xl font-bold tracking-[-0.01em] text-harbour">
            Worked with me before?
          </h2>
          <p className="text-muted">
            Rated {rating.value} from {rating.count} Google reviews. A short review helps other people find good advice.
          </p>
        </div>
        <a href={google.writeReviewUrl} target="_blank" rel="noopener" className="btn btn-primary shrink-0 self-start md:self-auto">
          Leave a Google review
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}

/** The office on Google Maps, with address, opening hours and directions. */
export function OfficeMap({ className = "" }: { className?: string }) {
  return (
    <section aria-labelledby="find-the-office" className={`overflow-hidden rounded-[20px] bg-white ${className}`}>
      <iframe
        src={google.mapEmbedUrl}
        title={`Map showing ${site.legalName} at the ${site.office.line1}, ${site.office.town}`}
        className="block h-72 w-full border-0 md:h-80"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <div className="flex flex-col gap-4 p-6">
        <h2 id="find-the-office" className="font-display text-2xl font-extrabold tracking-[-0.02em] text-harbour">
          Find the office
        </h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-muted">Address</dt>
            <dd className="leading-relaxed text-ink">
              {site.office.line1}
              <br />
              {site.office.line2}
              <br />
              {site.office.town} <span className="whitespace-nowrap">{site.office.postcode}</span>
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-muted">Opening hours</dt>
            <dd className="leading-relaxed text-ink">
              {site.hours.days}
              <br />
              {site.hours.label}
              <br />
              <span className="text-muted">{site.hours.note}</span>
            </dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-3">
          <a href={google.directionsUrl} target="_blank" rel="noopener" className="btn btn-primary">
            Get directions
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={google.profileUrl} target="_blank" rel="noopener" className="btn btn-light">
            View on Google
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Real Google reviews: one featured in large type, the rest as plain text. */
export function ReviewsSection({
  limit = 6,
  title = "What my clients say",
}: {
  limit?: number;
  title?: string;
}) {
  const { rating } = google;
  const [featured, ...rest] = googleReviews.slice(0, limit);
  return (
    <section aria-labelledby="client-reviews" className="py-20 md:py-28">
      <div className="wrap flex flex-col gap-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2 id="client-reviews" className="font-display text-4xl font-extrabold leading-[1.02] tracking-[-0.03em] text-harbour md:text-5xl">
              {title}
            </h2>
            <div className="flex flex-wrap items-center gap-3">
              <Stars size="h-5 w-5" />
              <p className="font-semibold text-ink">
                {rating.value} from {rating.count} reviews on Google
              </p>
            </div>
          </div>
        </div>

        <figure className="flex max-w-4xl flex-col gap-5">
          <blockquote className="font-display text-2xl font-semibold leading-[1.3] tracking-[-0.015em] text-harbour md:text-[2rem]">
            &ldquo;{featured.text}&rdquo;
          </blockquote>
          <figcaption className="text-lg">
            <span className="font-bold text-ink">{featured.name}</span>
            <a href={featured.url} target="_blank" rel="noopener" className="ml-3 text-muted underline-offset-4 hover:underline">
              Google review
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>

        {rest.length > 0 && (
          <ul className="gap-4 md:columns-2 lg:columns-3">
            {rest.map((r) => (
              <li key={r.id} className="mb-4 break-inside-avoid">
                <figure className="flex flex-col gap-4 rounded-[20px] bg-sky-soft p-6">
                  <blockquote className="whitespace-pre-line leading-relaxed text-ink">{r.text}</blockquote>
                  <figcaption className="text-sm">
                    <span className="font-bold text-harbour">{r.name}</span>
                    <a href={r.url} target="_blank" rel="noopener" className="ml-3 text-muted underline-offset-4 hover:underline">
                      Google review
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        )}
        <a href={google.reviewsUrl} target="_blank" rel="noopener" className="-mt-6 self-start font-bold text-harbour underline underline-offset-4 hover:no-underline">
          Read them all on Google
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
