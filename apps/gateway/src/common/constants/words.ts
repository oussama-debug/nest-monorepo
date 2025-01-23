export const words = [
  'red',
  'blue',
  'green',
  'swift',
  'cloud',
  'star',
  'moon',
  'rain',
  'wind',
  'fire',
  'earth',
  'wave',
  'leaf',
  'tree',
  'bird',
  'fish',
  'lion',
  'tiger',
  'bear',
  'wolf',
  'deer',
  'dark',
  'light',
  'soft',
  'hard',
  'cold',
  'warm',
  'deep',
  'high',
  'low',
  'fast',
  'slow',
  'good',
  'best',
  'wise',
  'calm',
  'bold',
  'cool',
  'wild',
  'free',
];

export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomNumbers(length: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
}

export function generateSubdomain({
  wordCount = 2,
  includeNumbers = true,
  numberLength = 4,
} = {}) {
  // Ensure we don't try to get more words than available
  wordCount = Math.min(wordCount, words.length);

  // Get random words without duplicates
  const selectedWords = new Set();
  while (selectedWords.size < wordCount) {
    const randomIndex = Math.floor(Math.random() * words.length);
    selectedWords.add(words[randomIndex]);
  }

  let subdomain = Array.from(selectedWords).join('-');

  if (includeNumbers) {
    subdomain += `-${generateRandomNumbers(numberLength)}`;
  }

  return subdomain.toLowerCase();
}
