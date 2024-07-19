import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { usePathname, useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="h-full bg-[#EFF2F6]">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
