import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-sky">
      <div className="wrap flex flex-col items-start gap-5 py-24">
        <h1 className="font-display text-5xl font-extrabold tracking-[-0.035em] text-harbour md:text-7xl">
          This door doesn&rsquo;t lead anywhere
        </h1>
        <p className="max-w-xl text-xl leading-relaxed text-body">The page you were looking for has moved or no longer exists.</p>
        <Link href="/" className="btn btn-primary">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
