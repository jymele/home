import Toolbar from "@/components/toolbar";

export default function ToolbarLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased p-4">
        {children}
        <Toolbar />
      </body>
    </html>
  );
}
