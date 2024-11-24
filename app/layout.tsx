
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body>
        <div className="layoutContainer">
            <nav>
              {/* Additional shared UI like a sidebar can go here */}
            </nav>
        <main className="content">{children}</main>
      </div>
        </body>
      </html>
  );
}
