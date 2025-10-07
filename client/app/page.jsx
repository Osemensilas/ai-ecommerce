import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from 'react';


export default function Home() {
  return (
    <>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <section id="hompage">
        <CTA />
      </section>
    </Suspense>
    <Footer />
    </>   
  );
}
