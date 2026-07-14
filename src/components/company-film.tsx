import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { useT } from "@/i18n/language";
import { SectionHeading } from "@/components/ui-kit";

const YOUTUBE_ID = "fNkq8RtkcfI";
const WATCH_URL = `https://youtu.be/${YOUTUBE_ID}`;

export function CompanyFilm() {
  const t = useT();
  const [playing, setPlaying] = useState(false);

  return (
    <section className="eps-section border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("Inside EPS", "EPS'in İçinden")}
          title={t("The Team Behind the Results", "Sonuçların Ardındaki Ekip")}
          align="center"
        />

        <div className="group relative mt-12 aspect-video overflow-hidden rounded-2xl border border-border bg-black shadow-card ring-1 ring-primary/10">
          {playing ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title={t("EPS company film", "EPS tanıtım filmi")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              aria-label={t("Play company film", "Tanıtım filmini oynat")}
              className="absolute inset-0 h-full w-full"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/70 via-background/10 to-background/30 transition-colors hover:from-background/60">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 fill-primary-foreground text-primary-foreground" />
                </span>
                <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/90">
                  {t("Watch the film · English narration", "Filmi izle · İngilizce anlatım")}
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <a
            href={WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {t("Trouble playing? Open the film in a new tab", "Oynatma sorunu mu? Filmi yeni sekmede açın")}
          </a>
        </div>
      </div>
    </section>
  );
}
