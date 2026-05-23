import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import type { APIContext } from 'astro';

const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const updates = await getCollection('updates');
  const sorted = updates.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'kurohomeless updates',
    description: 'a running log of kuro activity',
    site: context.site!,
    customData: `<language>en-us</language>`,
    items: sorted.map((entry) => ({
      title: entry.data.date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      pubDate: entry.data.date,
      description: entry.body.trim().slice(0, 280) + (entry.body.length > 280 ? '…' : ''),
      content: sanitizeHtml(parser.render(entry.body)),
      link: '/updates',
    })),
  });
}
