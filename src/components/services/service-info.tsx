import React from "react";
import { Container } from "@/components/ui/container";
import { ServiceData } from "@/data/services";
import { Info } from "lucide-react";

interface ServiceInfoProps {
  service: ServiceData;
}

export function ServiceInfo({ service }: ServiceInfoProps) {
  if (!service.importantInfo || service.importantInfo.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-gold-50/40 border-b border-gold-200/60">
      <Container>
        <div className="max-w-4xl mx-auto rounded-2xl bg-white p-6 sm:p-8 border border-gold-300/80 shadow-xs space-y-4 text-right">
          <div className="flex items-center gap-2.5 text-gold-800">
            <Info className="w-5 h-5 text-gold-600 shrink-0" />
            <h3 className="text-base font-bold">معلومات وإرشادات مهمة</h3>
          </div>

          <div className="space-y-3 pt-1">
            {service.importantInfo.map((info, idx) => (
              <div key={idx} className="space-y-1">
                <h4 className="text-sm font-bold text-navy-900">{info.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
