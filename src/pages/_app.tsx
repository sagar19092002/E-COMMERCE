import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/navigation";
import { NavBar } from "@/components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div className="h-[100vh]">
      {/* <NavBar /> */}
      <Component {...pageProps} />
    </div>
  );
}