/**
 * Parses a Vimeo ID/URL that may include a privacy hash for unlisted videos,
 * e.g. "1215650317/a959907d6c" or ".../video/1215650317/a959907d6c?...".
 */
export function parseVimeoId(idOrUrl: string): { id: string; hash?: string } {
  const withHash = idOrUrl.match(/(\d+)\/([a-zA-Z0-9]+)/);
  if (withHash) return { id: withHash[1], hash: withHash[2] };
  const idOnly = idOrUrl.match(/(\d+)/);
  return { id: idOnly ? idOnly[1] : idOrUrl };
}

export function extractVimeoId(idOrUrl: string): string {
  return parseVimeoId(idOrUrl).id;
}

export function buildVimeoEmbedUrl(idOrUrl: string, autoplay = false): string {
  const { id, hash } = parseVimeoId(idOrUrl);
  return `https://player.vimeo.com/video/${id}?dnt=1&color=c1402c&title=0&byline=0&portrait=0${
    hash ? `&h=${hash}` : ""
  }${autoplay ? "&autoplay=1" : ""}`;
}

export function VimeoEmbed({
  idOrUrl,
  title,
  autoplay = false,
}: {
  idOrUrl: string;
  title: string;
  autoplay?: boolean;
}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-md bg-black">
      <iframe
        src={buildVimeoEmbedUrl(idOrUrl, autoplay)}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
