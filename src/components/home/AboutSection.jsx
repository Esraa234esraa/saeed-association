import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Lightbulb, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  // إعدادات الانيميشن العامة
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            className="text-[#BB9661] font-bold text-lg mb-2 block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            من نحن
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#25343F] mb-6 font-dubai"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            عن الجمعية
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-[#BB9661] mx-auto rounded-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gray-50 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#218875] group-hover:w-4 transition-all"></div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#218875]/10 rounded-full">
                    <Lightbulb className="h-10 w-10 text-[#218875]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#25343F] mb-4">الرؤية</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      الريادة في تمكين التعليم الجودة المستدام وبناء مجتمع واعٍ قائم على المعرفة.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gray-50 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#4ABA78] group-hover:w-4 transition-all"></div>
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-[#4ABA78]/10 rounded-full">
                    <Target className="h-10 w-10 text-[#4ABA78]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#25343F] mb-4">الرسالة</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      دعم التعليم للجميع من خلال مبادرات مبتكرة وشراكات وبرامج تطور القدرات التعليمية وتخلق تأثيراً اجتماعياً مستداماً.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* General Goals Text Block */}
        <motion.div
          className="mt-16 bg-[#25343F] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#BB9661] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2E4A8F] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-[#BB9661]">أهدافنا العامة</h3>
            <p className="text-lg md:text-xl leading-loose text-gray-200">
              نسعى لدعم التعليم للجميع، وتعزيز التعلم مدى الحياة، وتشجيع المشاركة المجتمعية الفعالة. نؤمن بأهمية ترسيخ القيم الإسلامية والهوية الوطنية في نفوس النشء، ونعمل بجد على تطوير الكوادر التعليمية لضمان مستقبل مشرق لمجتمعنا.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
