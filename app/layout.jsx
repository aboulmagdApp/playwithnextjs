import "./globals.css";
import { Open_Sans } from "@next/font/google";
import styles from "./rootStyle.module.css";
import "./globals.css";
import Link from "next/link";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <head />
      <body>
        <header>
          <h1>
            <Link className={styles.homeLink} href="/home">
              Globomantics
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLink} href="/conference">
              Conference
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href="/settings">
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href="/blog">
              Blog
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
