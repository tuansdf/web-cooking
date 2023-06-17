import { PropsWithChildren } from "react";
import { primaryFont } from "~/app/fonts";
import "~/styles/index.scss";

export const metadata = {
  title: "Web Cooking - Tuan Nguyen, Ngan Phan",
  description: "Web Cooking - Coded by Tuan Nguyen - Designed by Ngan Phan",
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
