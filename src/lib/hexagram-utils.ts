import { Lines, findHexagramByLines, Hexagram } from '@/data/hexagrams';

/** Calculate 互卦 (mutual hexagram) from lines */
export function calculateMutualHexagram(lines: Lines): Lines {
  // Lower trigram = lines 2,3,4 (index 1,2,3), Upper trigram = lines 3,4,5 (index 2,3,4)
  return [lines[1], lines[2], lines[3], lines[2], lines[3], lines[4]];
}

/** Calculate 錯卦 (opposite hexagram) - invert all lines */
export function calculateOppositeHexagram(lines: Lines): Lines {
  return lines.map(l => l === 1 ? 0 : 1) as Lines;
}

/** Calculate 綜卦 (reverse hexagram) - reverse order */
export function calculateReverseHexagram(lines: Lines): Lines {
  return [...lines].reverse() as Lines;
}

/** Generate random hexagram with changing lines */
export function generateRandomCast(): {
  mainLines: Lines;
  changingLines: boolean[];
  changedLines: Lines;
} {
  const mainLines: number[] = [];
  const changingLines: boolean[] = [];

  for (let i = 0; i < 6; i++) {
    // Simulate three-coin method: values 6,7,8,9
    const value = Math.floor(Math.random() * 4) + 6;
    // 6 = old yin (changing), 7 = young yang, 8 = young yin, 9 = old yang (changing)
    mainLines.push(value === 7 || value === 9 ? 1 : 0);
    changingLines.push(value === 6 || value === 9);
  }

  // Ensure at least one changing line
  if (!changingLines.some(c => c)) {
    const idx = Math.floor(Math.random() * 6);
    changingLines[idx] = true;
  }

  const changedLines = mainLines.map((line, i) =>
    changingLines[i] ? (line === 1 ? 0 : 1) : line
  ) as Lines;

  return {
    mainLines: mainLines as Lines,
    changingLines,
    changedLines,
  };
}

export interface HexagramSet {
  main: Hexagram;
  changed: Hexagram;
  mutual: Hexagram;
  opposite: Hexagram;
  reverse: Hexagram;
  changingLines?: boolean[];
}

export function buildHexagramSet(
  mainLines: Lines,
  changedLines: Lines,
  changingLines?: boolean[]
): HexagramSet | null {
  const main = findHexagramByLines(mainLines);
  const changed = findHexagramByLines(changedLines);
  const mutualLines = calculateMutualHexagram(mainLines);
  const mutual = findHexagramByLines(mutualLines);
  const oppositeLines = calculateOppositeHexagram(mainLines);
  const opposite = findHexagramByLines(oppositeLines);
  const reverseLines = calculateReverseHexagram(mainLines);
  const reverse = findHexagramByLines(reverseLines);

  if (!main || !changed || !mutual || !opposite || !reverse) return null;

  return { main, changed, mutual, opposite, reverse, changingLines };
}
