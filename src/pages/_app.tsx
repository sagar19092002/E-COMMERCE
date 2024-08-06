import { NavBar } from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { usePathname, useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="">
      {/* <NavBar /> */}
      <div className="pt-15">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
