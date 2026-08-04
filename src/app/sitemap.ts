import type { MetadataRoute } from "next";
import { workProjects } from "@/lib/work";
import { journalPosts } from "@/lib/journal";

const BASE_URL = "https://stagetwo.media";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/work`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/journal`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
  ];

  const workRoutes: MetadataRoute.Sitemap = workProjects.map((project) => ({
    url: `${BASE_URL}/work/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const journalRoutes: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: `${BASE_URL}/journal/${post.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...journalRoutes];
}
