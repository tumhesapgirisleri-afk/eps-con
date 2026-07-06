import { Eyebrow } from "@/components/ui-kit";

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
}: {
  image: string;
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <img
        src={image}
        alt=""
        width={1280}
        height={960}
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 eps-grid-bg opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      </div>
    </section>
  );
}
