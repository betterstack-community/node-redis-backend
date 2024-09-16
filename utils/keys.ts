export function getKeyName(...args: string[]) {
  return `bites:${args.join(":")}`;
}
