import { ALL_BOOKS } from '@/lib/classics';
import type { Book, Paragraph } from '@/lib/classics';
import type { ClassicChunk, CorpusSource, OriginalWorkStatus } from './types';

const DEFAULT_MAX_CHARS = 360;
const DEFAULT_OVERLAP = 48;

export function normalizeClassicText(text: string): string {
  return text
    .normalize('NFKC')
    .replace(/[\s\u3000]+/g, '')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .toLowerCase();
}

function originalWorkStatus(book: Book): OriginalWorkStatus {
  return /明|清|宋|元|唐|汉|古代/.test(book.dynasty)
    ? 'historical-public-domain'
    : 'unknown';
}

function sourceFor(book: Book, chapterTitle: string, paragraph: Paragraph): CorpusSource {
  return {
    bookSlug: book.slug,
    bookTitle: book.title,
    dynasty: book.dynasty,
    author: book.author,
    chapterTitle,
    paragraphId: paragraph.id,
    originalWorkStatus: originalWorkStatus(book),
    transcriptionProvenance: 'repository-transcription',
    provenanceVerified: false,
    provenanceNote: '历史原著年代与当前仓库转录文本的来源是两个问题；当前仅记录仓库内转录，发布前仍应独立核验底本与转录来源。',
  };
}

function splitText(text: string, maxChars: number, overlap: number): string[] {
  if (text.length <= maxChars) return [text];
  const result: string[] = [];
  let start = 0;
  while (start < text.length) {
    let end = Math.min(text.length, start + maxChars);
    if (end < text.length) {
      const punctuation = Math.max(
        text.lastIndexOf('。', end),
        text.lastIndexOf('；', end),
        text.lastIndexOf('！', end),
        text.lastIndexOf('？', end),
      );
      if (punctuation > start + Math.floor(maxChars * 0.55)) end = punctuation + 1;
    }
    result.push(text.slice(start, end));
    if (end >= text.length) break;
    start = Math.max(start + 1, end - overlap);
  }
  return result;
}

export function buildClassicCorpus(
  books: readonly Book[] = ALL_BOOKS,
  maxChars = DEFAULT_MAX_CHARS,
  overlap = DEFAULT_OVERLAP,
): ClassicChunk[] {
  if (maxChars < 80) throw new RangeError('maxChars must be >= 80');
  if (overlap < 0 || overlap >= maxChars) throw new RangeError('overlap must be >= 0 and < maxChars');

  const chunks: ClassicChunk[] = [];
  for (const book of books) {
    for (const chapter of book.chapters) {
      for (const paragraph of chapter.paragraphs) {
        const parts = splitText(paragraph.text.trim(), maxChars, overlap);
        parts.forEach((text, index) => {
          chunks.push({
            id: `classic:${book.slug}:${paragraph.id}:${index}`,
            text,
            normalizedText: normalizeClassicText(text),
            source: sourceFor(book, chapter.title, paragraph),
          });
        });
      }
    }
  }
  return chunks;
}

export const CLASSIC_CORPUS: readonly ClassicChunk[] = buildClassicCorpus();
