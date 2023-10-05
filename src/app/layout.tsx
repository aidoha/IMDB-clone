import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/Providers";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDB Clone",
  description: "This is the IMDB Clone website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
      {/* <script src="//cdnjs.cloudflare.com/ajax/libs/d3/3.5.3/d3.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/topojson/1.6.9/topojson.min.js"></script>
      <script src="bower_components/datamaps/dist/datamaps.world.min.js"></script>
      <div id="container" style="position: relative; width: 500px; height: 300px;"></div>
      <script>
          var map = new Datamap({element: document.getElementById('container')});
      </script> */}
    </html>
  );
}
