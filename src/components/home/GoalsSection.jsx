import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, Heart, GraduationCap, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GoalsSection() {
  const goals = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "دعم التعليم للجميع",
      desc: "توفير فرص تعليمية عادلة وشاملة لجميع فئات المجتمع.",
      color: "#218875"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "التعلم مدى الحياة",
      desc: "تشجيع ثقافة التعلم المستمر وتطوير الذات.",
      color: "#4ABA78"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "المشاركة المجتمعية",
      desc: "تعزيز دور الفرد في بناء وتطوير المجتمع.",
      color: "#98C673"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "تعزيز القيم والهوية",
      desc: "ترسيخ القيم الإسلامية والاعتزاز بالهوية الوطنية.",
      color: "#2E4A8F"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "تطوير الكوادر",
      desc: "رفع كفاءة المعلمين والتربويين ببرامج متخصصة.",
      color: "#415BA9"
    }
  ];

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="goals" className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#25343F] mb-4 font-dubai">
            الأهداف الاستراتيجية
          </h2>
          <div className="h-1 w-20 bg-[#BB9661] mx-auto rounded-full"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-2 w-full" style={{ backgroundColor: goal.color }}></div>
                <CardContent className="p-8 text-center">
                  <div 
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform rotate-3 hover:rotate-0 transition-transform"
                    style={{ backgroundColor: goal.color }}
                  >
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#25343F] mb-3">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{goal.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
