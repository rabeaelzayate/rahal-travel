"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/common/icons";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: servicesData[0]?.title || "حج وعمرة",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("يرجى كتابة الاسم بالكامل.");
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError("يرجى إدخال رقم هاتف أو واتساب صحيح للتواصل.");
      return;
    }

    setError(null);

    // Format WhatsApp message
    const messageLines = [
      `*طلب استفسار جديد — شركة رحال للسفر والسياحة*`,
      `---------------------------------`,
      `*الاسم:* ${formData.name.trim()}`,
      `*رقم الهاتف:* ${formData.phone.trim()}`,
      `*الخدمة المطلوبة:* ${formData.service}`,
      formData.message.trim()
        ? `*التفاصيل:* ${formData.message.trim()}`
        : `*التفاصيل:* أود معرفة كافة التفاصيل والأسعار المتاحة.`,
      `---------------------------------`,
      `مرسل من موقع رحال للسياحة`,
    ];

    const fullMessage = messageLines.join("\n");
    const cleanNumber = companyData.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
      fullMessage
    )}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/80 shadow-xl text-right relative overflow-hidden">
      {/* Subtle Top Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-gold" />

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-start">
            <Badge variant="gold" size="sm">
              استجابة فورية
            </Badge>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-navy-900">
            نموذج طلب استشارة أو حجز
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            املأ البيانات وسنقوم بفتح محادثة واتساب منسقة فورًا مع فريق خدمة العملاء.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 text-center animate-in fade-in duration-300">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-emerald-900">
                تم تجهيز وفتح طلبك بنجاح!
              </h4>
              <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                إذا لم تفتح نافذة الواتساب تلقائيًا، يمكنك النقر على الزر أدناه لإرسال رسالتك مباشرة.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                href={`https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, "")}`}
                variant="whatsapp"
                size="md"
                icon={<WhatsAppIcon className="w-4 h-4" />}
              >
                متابعة في واتساب
              </Button>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    phone: "",
                    service: servicesData[0]?.title || "حج وعمرة",
                    message: "",
                  });
                }}
                className="text-xs font-bold text-slate-600 hover:text-navy-900 underline cursor-pointer"
              >
                إرسال استفسار جديد
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            {/* Field 1: Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-xs font-bold text-navy-900"
              >
                الاسم بالكامل <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="أدخل اسمك الكريم"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-slate-50/50 hover:bg-white focus:bg-white"
              />
            </div>

            {/* Field 2: Phone */}
            <div className="space-y-1.5">
              <label
                htmlFor="phone"
                className="block text-xs font-bold text-navy-900"
              >
                رقم الهاتف / الواتساب <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="مثال: 010xxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-slate-50/50 hover:bg-white focus:bg-white text-right"
                dir="ltr"
              />
            </div>

            {/* Field 3: Service Selection */}
            <div className="space-y-1.5">
              <label
                htmlFor="service"
                className="block text-xs font-bold text-navy-900"
              >
                الخدمة المطلوبة <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, service: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-slate-50/50 hover:bg-white focus:bg-white cursor-pointer"
              >
                {servicesData.map((service) => (
                  <option key={service.id} value={service.title}>
                    {service.title}
                  </option>
                ))}
                <option value="استفسار عام / خدمات أخرى">استفسار عام / خدمات أخرى</option>
              </select>
            </div>

            {/* Field 4: Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="block text-xs font-bold text-navy-900"
              >
                تفاصيل الاستفسار (اختياري)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="اكتب أي تفاصيل إضافية حول موعد السفر، عدد الأفراد، أو المتطلبات الخاصة..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all bg-slate-50/50 hover:bg-white focus:bg-white resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full justify-center shadow-lg hover:shadow-xl py-3.5"
                icon={<Send className="w-4 h-4 rotate-180" />}
              >
                إرسال الطلب عبر واتساب
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
