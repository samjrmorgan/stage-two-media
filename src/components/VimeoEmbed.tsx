export function extractVimeoId(idOrUrl: string): string {
  const match = idOrUrl.match(/(\d+)/);
  return match ? match[1] : idOrUrl;
}

export function VimeoEmbed({
  idOrUrl,
  title,
}: {
  idOrUrl: string;
  title: string;
}) {
  const id = extractVimeoId(idOrUrl);

  return (
    <div className="relative aspect-video overflow-hidden rounded-md bg-black">
      <iframe
        src={`https://player.vimeo.com/video/${id}?dnt=1&color=c1402c&title=0&byline=0&portrait=0`}
        title={title}
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
