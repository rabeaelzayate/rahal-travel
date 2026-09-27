import React from "react";
import { Container } from "@/components/ui/container";
import { companyData } from "@/data/company";
import { Eye, Target } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors duration-300 shadow-sm">
              <Eye className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                طموحنا المستقبلي
              </span>
              <h3 className="text-2xl font-black text-navy-900">
                رؤيتنا
              </h3>
              <p className="text-slate-600 text-base leading-relaxed pt-1">
                {companyData.vision.ar}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 space-y-4 relative overflow-hidden group">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors duration-300 shadow-sm">
              <Target className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                هدفنا اليومي
              </span>
              <h3 className="text-2xl font-black text-navy-900">
                رسالتنا
              </h3>
              <p className="text-slate-600 text-base leading-relaxed pt-1">
                {companyData.mission.ar}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
