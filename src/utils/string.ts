export const generateIds = (count: number = 10): string[] => {
  return Array(count)
    .fill(0)
    .map(() => Bun.randomUUIDv7());
};
