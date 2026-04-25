import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  MapPin, 
  Menu, 
  X, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook,
  Award,
  BookOpen,
  Target,
  ArrowLeft,
  ChevronRight,
  Send
} from 'lucide-react';
import { TEAM_MEMBERS, SUCCESS_STORIES } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'فريقنا', href: '#team' },
    { name: 'تأثيرنا', href: '#impact' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-brand-cream font-sans selection:bg-brand-teal selection:text-white" dir="rtl">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="input_file_0.png" alt="YOURS Logo" className="w-12 h-12 rounded-lg object-cover shadow-sm" />
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tighter leading-none transition-colors ${scrolled ? 'text-brand-teal' : 'text-white md:text-brand-teal'}`}>YOURS</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 transition-colors ${scrolled ? 'text-brand-gray' : 'text-white/80 md:text-brand-gray'}`}>للتنمية</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-bold uppercase tracking-wide transition-colors ${scrolled ? 'text-brand-gray hover:text-brand-teal' : 'text-white hover:text-brand-teal-light'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-brand-teal bg-brand-teal/5' : 'text-white bg-white/10'}`}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-teal flex flex-col items-center justify-center gap-12"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-black uppercase text-white hover:text-brand-teal-light transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white p-2">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2070" 
              className="w-full h-full object-cover" 
              alt="Hero Background"
            />
            <div className="absolute inset-0 bg-brand-teal-dark/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-teal-dark/30 to-brand-cream"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.3em]">مؤسسة من أجل المستقبل</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                تمكين <br /> <span className="text-brand-teal-light">الشباب اليمني</span>
              </h1>
              <p className="text-lg md:text-2xl font-light max-w-3xl mx-auto mb-12 text-white/80 leading-relaxed italic">
                مؤسسة YOURS هي مبادرة شبابية تهدف إلى خلق فرص مستدامة من خلال التكنولوجيا والتعليم وتنمية المجتمع.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="#about" className="bg-brand-teal text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-brand-teal transition-all shadow-xl shadow-brand-teal/20 flex items-center gap-2 group">
                  اكتشف المزيد <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </a>
                <a href="#team" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                  تعرف على فريقنا
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </section>

        {/* Mission/About Section */}
        <section id="about" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 relative"
              >
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative z-10 shadow-3xl">
                  <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover shadow-2xl" alt="Mission" />
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-teal-light/20 rounded-full blur-3xl"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:w-1/2 text-right"
              >
                <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-xs mb-4 block">قصتنا</span>
                <h2 className="text-5xl font-black text-brand-dark mb-8 tracking-tighter leading-tight italic">
                  بنيت بأيدي الشباب، <br /> <span className="text-brand-teal underline decoration-brand-teal-light/30">من أجل المجتمع.</span>
                </h2>
                <p className="text-lg text-brand-gray/70 leading-relaxed mb-10 font-light">
                  ولدت مؤسسة YOURS من إيمان مشترك بأن شباب اليمن يمتلكون المفتاح لتعافي وازدهار الوطن. نحن نسد الفجوة بين الإمكانيات والفرص من خلال توفير الأدوات والإرشاد والشبكة اللازمة لإحداث تغيير حقيقي.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-brand-cream rounded-3xl border border-brand-teal/10 hover:border-brand-teal transition-colors">
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-4">
                      <Target />
                    </div>
                    <h4 className="font-bold text-brand-dark mb-2">رؤيتنا</h4>
                    <p className="text-sm text-brand-gray/60 leading-relaxed">يمن مُمكّن تقنياً حيث يستطيع كل شاب الابتكار والازدهار.</p>
                  </div>
                  <div className="p-6 bg-brand-cream rounded-3xl border border-brand-teal/10 hover:border-brand-teal transition-colors">
                    <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal mb-4">
                      <Award />
                    </div>
                    <h4 className="font-bold text-brand-dark mb-2">قيمنا</h4>
                    <p className="text-sm text-brand-gray/60 leading-relaxed">النزاهة، والابتكار، والدعم الثابت لنمو مجتمعنا.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="impact" className="py-24 bg-brand-teal text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2 underline decoration-brand-teal-light decoration-4 underline-offset-8">15k+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mt-4">حياة تأثرت بالإيجاب</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2 underline decoration-brand-white decoration-4 underline-offset-8">42</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mt-4">مشروع نشط</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2 underline decoration-brand-teal-light decoration-4 underline-offset-8">120+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mt-4">شريك محلي</p>
              </div>
              <div>
                <p className="text-5xl md:text-7xl font-black tracking-tighter mb-2 underline decoration-brand-white decoration-4 underline-offset-8">15</p>
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mt-4">محافظة نغطيها</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 bg-brand-cream">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 text-right">
              <div className="w-full">
                <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-xs mb-4 block">القيادة</span>
                <h2 className="text-5xl font-black text-brand-dark tracking-tighter">فريقنا الإداري</h2>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {TEAM_MEMBERS.map((member, i) => (
                <motion.div 
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 shadow-soft border-4 border-white transition-all group-hover:shadow-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-teal-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 text-white text-right">
                      <p className="text-xs font-bold mb-4 line-clamp-3 leading-relaxed">{member.bio}</p>
                      <div className="flex gap-4 justify-end">
                        <Twitter size={18} className="hover:text-brand-teal-light cursor-pointer transition-colors" />
                        <Instagram size={18} className="hover:text-brand-teal-light cursor-pointer transition-colors" />
                      </div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-black text-brand-dark tracking-tighter leading-none mb-1">{member.name}</h4>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-teal italic">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Work / Stories Section */}
        <section id="impact" className="py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-brand-teal font-black uppercase tracking-[0.4em] text-xs mb-4 block">قصص نجاح حديثة</span>
              <h2 className="text-5xl font-black text-brand-dark tracking-tighter">نصنع الفرق</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {SUCCESS_STORIES.map((story, i) => (
                <motion.div 
                  key={story.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-brand-cream rounded-[3rem] p-10 flex flex-col md:flex-row gap-10 items-center border border-brand-teal/5 hover:border-brand-teal transition-all shadow-sm text-right"
                >
                  <div className="w-32 h-32 shrink-0 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl">
                    <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-dark tracking-tight mb-4">{story.title}</h3>
                    <p className="text-brand-gray/70 text-sm leading-relaxed line-clamp-3 italic">"{story.description}"</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
               <button className="text-brand-teal font-black uppercase tracking-widest text-xs flex items-center gap-2 mx-auto hover:gap-4 transition-all group">
                 <ArrowLeft size={16} /> عرض جميع قصص النجاح
               </button>
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-32 relative overflow-hidden bg-brand-dark text-white">
           <div className="absolute top-0 left-0 w-max h-full opacity-10 pointer-events-none">
              <span className="text-[20rem] font-black leading-none select-none tracking-tighter italic">YOURS</span>
           </div>
           
           <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="order-2 lg:order-1 bg-white/5 backdrop-blur-xl p-12 rounded-[3.5rem] border border-white/10 text-right">
                   <form className="space-y-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/60">اسمك</label>
                          <input type="text" className="w-full bg-white/5 border-b border-white/20 py-3 focus:outline-none focus:border-brand-teal transition-all text-right" dir="rtl" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-white/60">بريدك الإلكتروني</label>
                          <input type="email" className="w-full bg-white/5 border-b border-white/20 py-3 focus:outline-none focus:border-brand-teal transition-all text-right" dir="ltr" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/60">رسالتك</label>
                        <textarea className="w-full bg-white/5 border-b border-white/20 py-3 focus:outline-none focus:border-brand-teal transition-all resize-none text-right" rows={4} dir="rtl"></textarea>
                      </div>
                      <button className="w-full bg-brand-teal text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-teal-light transition-all shadow-xl shadow-brand-teal/20 flex items-center justify-center gap-3">
                        إرسال الرسالة <Send size={18} />
                      </button>
                   </form>
                </div>

                <div className="order-1 lg:order-2 text-right">
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-12">
                    لنقم بالبناء <br /> <span className="text-brand-teal text-outline">معاً</span>
                  </h2>
                  <p className="text-xl text-white/50 font-light leading-relaxed mb-16 italic">
                    سواء كنت ترغب في الشراكة معنا، أو التطوع، أو مجرد التحية، فإن فريقنا في مؤسسة YOURS جاهز للتواصل.
                  </p>
                  
                  <div className="space-y-12">
                    <div className="flex items-center gap-6 justify-end text-right">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">راسلنا</p>
                        <p className="text-lg font-bold">hello@yours.foundation</p>
                      </div>
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-teal border border-white/10">
                        <Mail />
                      </div>
                    </div>
                    <div className="flex items-center gap-6 justify-end text-right">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30">موقعنا</p>
                        <p className="text-lg font-bold">صنعاء، اليمن</p>
                      </div>
                      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-brand-teal border border-white/10">
                        <MapPin />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-brand-cream py-20 border-t border-brand-teal/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
             <p className="text-[10px] font-black uppercase tracking-widest text-brand-gray/30 order-3 md:order-1">
              © 2026 جميع الحقوق محفوظة لمؤسسة YOURS للتنمية
            </p>
            
            <div className="flex gap-10 order-2">
              <a href="#" className="text-brand-gray/40 hover:text-brand-teal transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-brand-gray/40 hover:text-brand-teal transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-brand-gray/40 hover:text-brand-teal transition-colors"><Facebook size={24} /></a>
            </div>

            <div className="flex items-center gap-4 order-1 md:order-3">
              <img src="input_file_0.png" alt="YOURS Logo" className="w-12 h-12 grayscale opacity-40 shadow-inner rounded-md" />
              <span className="text-xl font-black tracking-tighter text-brand-teal/40">YOURS.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
