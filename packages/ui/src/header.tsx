export function Header({ text }: { text: string }): JSX.Element {
  return <h1 className="bg-red-200 p-4 text-xl mb-2 font-semibold">{text}</h1>;
}
