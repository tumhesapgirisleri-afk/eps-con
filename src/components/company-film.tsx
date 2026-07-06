import { useRef, useState } from "react";
import { Play, Loader2, ExternalLink } from "lucide-react";
import { useT } from "@/i18n/language";
import { SectionHeading } from "@/components/ui-kit";
import filmAsset from "@/assets/eps-company-film.mp4.asset.json";
import posterAsset from "@/assets/eps-film-poster.jpg.asset.json";

export function CompanyFilm() {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const start = async () => {
    const v = videoRef.current;
    if (!v) return;
    setLoading(true);
    v.muted = false;
    try {
      await v.play();
      setPlaying(true);
    } catch {
      // Some browsers/embeds block unmuted playback — fall back to muted start.
      try {
        v.muted = true;
        await v.play();
        setPlaying(true);
      } catch {
        // Autoplay blocked entirely — reveal native controls so the user can start it.
        v.controls = true;
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="eps-section border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("Inside EPS", "EPS'in İçinden")}
          title={t("The Team Behind the Results", "Sonuçların Ardındaki Ekip")}
          align="center"
        />


        <div className="group relative mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-card ring-1 ring-primary/10">
          <video
            ref={videoRef}
            src={filmAsset.url}
            poster={posterAsset.url}
            controls={playing}
            playsInline
            preload="metadata"
            className="aspect-video w-full bg-black"
            onPlay={() => setPlaying(true)}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <button
              type="button"
              onClick={start}
              disabled={loading}
              aria-label={t("Play company film", "Tanıtım filmini oynat")}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/70 via-background/10 to-background/30 transition-colors hover:from-background/60"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow transition-transform group-hover:scale-110">
                {loading ? (
                  <Loader2 className="h-8 w-8 animate-spin text-primary-foreground" />
                ) : (
                  <Play className="ml-1 h-8 w-8 fill-primary-foreground text-primary-foreground" />
                )}
              </span>
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold uppercase tracking-[0.25em] text-foreground/90">
                {t("Watch the film · English narration", "Filmi izle · İngilizce anlatım")}
              </span>
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <a
            href={filmAsset.url}
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
