import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Youtube, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const XIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Framer Motion animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_vwcx35d',     // استبدلي بـ Service ID من EmailJS
      'template_x1ulb5d',    // استبدلي بـ Template ID
      formData,
      '46T90dTJ1pL54YSv_'      // استبدلي بـ Public Key
    )
    .then(() => {
      toast({
        title: "تم الإرسال بنجاح",
        description: "شكراً لتواصلك معنا، سنقوم بالرد عليك قريباً.",
        variant: "default",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.error(err);
      toast({
        title: "فشل الإرسال",
        description: "حاول مرة أخرى لاحقاً.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#25343F] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <span className="text-[#BB9661] font-bold text-lg mb-2 block">تواصل معنا</span>
            <h2 className="text-4xl font-bold mb-8 font-dubai">نحن هنا للإجابة على استفساراتكم</h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              يسعدنا استقبال مقترحاتكم واستفساراتكم. فريقنا جاهز للرد عليكم في أقرب وقت ممكن.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#BB9661]/20 flex items-center justify-center text-[#BB9661]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">رقم الهاتف</p>
                  <p className="text-xl font-bold ltr:text-left" dir="ltr">0590595916</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#BB9661]/20 flex items-center justify-center text-[#BB9661]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">البريد الإلكتروني</p>
                  <p className="text-xl font-bold font-sans">saeed.alm.1447@gmail.com</p>
                </div>
              </div>

              <div className="pt-8 border-t border-gray-700">
                <p className="text-gray-400 mb-6">تابعنا على منصات التواصل الاجتماعي</p>
                <div className="flex gap-4">
                  <a href="https://x.com/saeedalm1447" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-700 hover:bg-[#BB9661] flex items-center justify-center transition-colors">
                    <XIcon className="h-5 w-5" />
                  </a>
                  <a href="https://www.youtube.com/@saeed.alm.1447" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-700 hover:bg-[#F15D4C] flex items-center justify-center transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <Card className="bg-white text-[#25343F] shadow-2xl border-none">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-6">أرسل رسالة</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">الاسم</label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="الاسم الثلاثي"
                        className="bg-gray-50 border-gray-200 focus:ring-[#BB9661]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                      <Input 
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.com"
                        className="bg-gray-50 border-gray-200 focus:ring-[#BB9661]"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">الموضوع</label>
                    <Input 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="عنوان الرسالة"
                      className="bg-gray-50 border-gray-200 focus:ring-[#BB9661]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">الرسالة</label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      className="bg-gray-50 border-gray-200 focus:ring-[#BB9661]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#BB9661] hover:bg-[#a38253] text-[#25343F] font-bold py-6 text-lg">
                    إرسال الرسالة
                    <Send className="mr-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
