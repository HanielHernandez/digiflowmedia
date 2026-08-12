import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactEmail =
    process.env.RESEND_TO_EMAIL || process.env.RESEND_FROM_EMAIL;

  return (
    <>
      <Navbar contactEmail={contactEmail} />
      {children}
      <Footer />
    </>
  );
}
