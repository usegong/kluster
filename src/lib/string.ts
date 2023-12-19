export function join(self: string, ...args: Array<string | undefined | null>) {
  return args.reduceRight((a, b) => (b ? a + " " + b : a), self) as string;
}
