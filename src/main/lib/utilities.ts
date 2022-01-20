export default function mergeClassNames(...classNames: string[]): string {
  return classNames.filter(Boolean).join(' ');
}
