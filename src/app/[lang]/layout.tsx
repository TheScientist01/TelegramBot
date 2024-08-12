import { getDictionary } from "../_dictionaries";
import DictionaryProvider from "../dictionary-provaider";

export default async function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const dictionary = await getDictionary(lang);

  return (
    <DictionaryProvider dictionary={dictionary}>{children}</DictionaryProvider>
  );
}
