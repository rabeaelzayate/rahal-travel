import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/layout/page-header";
import { ContactInfoCards } from "@/components/contact/contact-info-cards";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactCta } from "@/components/contact/contact-cta";
import { contactFaqs } from "@/data/faq";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع شركة رحال للسفر والسياحة للاستفسار وحجز برامج الحج والعمرة، رحلات السياحة، تأشيرات العمل للخليج وليبيا، وتذاكر الطيران والفنادق.",
  keywords: [
    "تواصل معنا رحال",
    "رقم شركة رحال",
    "واتساب رحال للسياحة",
    "عنوان شركة رحال",
    "حجز رحلات وتأشيرات",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "تواصل معنا | شركة رحال للسفر والسياحة",
    description:
      "تواصل مباشر عبر الواتساب والهاتف للاستفسار وحجز كافة خدمات السفر والسياحة والتأشيرات.",
    url: "https://rahal-travel.com/contact",
    type: "website",
    locale: "ar_EG",
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل مع شركة رحال للسفر والسياحة",
    description: "فريق مستشاري السفر جاهزون للرد على كافة استفساراتكم وحجوزاتكم.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      <BreadcrumbJsonLd
        items={[
          { name: "الرئيسية", item: "/" },
          { name: "تواصل معنا", item: "/contact" },
        ]}
      />
      <FaqJsonLd faqs={contactFaqs} />

      <PageHeader
        badge="يسعدنا تواصلك"
        title="تواصل معنا"
        description="نحن هنا لمساعدتك في التخطيط لرحلتك القادمة والإجابة عن كافة استفساراتك حول برامج الحج والعمرة، التأشيرات، وحجوزات الطيران والفنادق."
        backgroundImage="/images/banners/contact-banner.png"
        breadcrumbs={[{ label: "تواصل معنا" }]}
      />

      {/* Main Interactive Contact Section */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Contact Details & Socials (5 Cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ContactInfoCards />
            </div>

            {/* Interactive WhatsApp Form (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Office Location & Visit Guide */}
      <ContactMap />

      {/* Common Contact FAQ */}
      <ContactFaq />

      {/* Final High-Conversion CTA */}
      <ContactCta />
    </div>
  );
}
