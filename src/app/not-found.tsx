import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة 404",
  description: "عذرًا، الصفحة التي تبحث عنها غير موجودة.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <Container className="text-center space-y-6 max-w-lg">
        <div className="w-16 h-16 rounded-2xl bg-gold-100 text-gold-700 flex items-center justify-center mx-auto shadow-xs">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>
        <h1 className="text-4xl font-extrabold text-navy-900">404</h1>
        <h2 className="text-xl font-bold text-slate-800">
          عذرًا، الصفحة التي تبحث عنها غير موجودة
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          ربما تم نقل الصفحة أو تغيير الرابط. يمكنك العودة إلى الصفحة الرئيسية أو استعراض خدماتنا.
        </p>
        <div className="pt-2">
          <Button href="/" variant="gold" icon={<ArrowRight className="w-4 h-4" />}>
            العودة للرئيسية
          </Button>
        </div>
      </Container>
    </div>
  );
}
