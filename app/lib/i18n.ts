import { capabilityGroups, profile, projects } from "./content";

export type Locale = "en" | "ar";

export const messages = {
  en: {
    contact: {
      home: "Back to home", title: "Let’s connect.", formTitle: "Contact Dana",
      intro: "Have a software engineering role, a full-stack or backend project, or an opportunity in Data & AI? Tell me what you’re working on. I’m also open to technical collaborations.",
      notice: "Message delivery is not available yet. You can reach me through the LinkedIn or Email links here.",
      fields: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
      errors: { required: "Please fill in this field.", email: "Enter a valid email address.", tooLong: "Please shorten this field." },
      send: "Send Message", sending: "Sending…",
      success: "Message sent successfully. I’ll get back to you soon.",
      unavailable: "Your message was not sent. Message delivery is not connected yet. Your text is still here; please contact me using the details on this page.",
      failure: "Your message could not be sent. Your text is still here. Please try again or use the contact details on this page.",
      details: "Contact details",
    },
    nav: { work: "Projects", capabilities: "Stack", about: "About", contact: "Contact" },
    hero: {
      status: "Available for software engineering opportunities",
      eyebrow: "Software Engineer / Full-stack developer",
      title: "I engineer digital products that stay clear as they scale.",
      body: profile.introduction,
      primary: "Explore selected work",
      secondary: "View résumé",
      detail: "Based in Palestine · Working across product, web, and applied AI",
    },
    work: { title: "Selected work", intro: "Production-minded projects across full-stack products, collaboration, operations, and data.", contribution: "Engineering focus", live: "Live product", source: "Source code", more: "More projects", fewer: "Show fewer projects" },
    capabilities: { title: "Technical stack", intro: "A focused toolkit organized around the systems it helps me build." },
    about: { title: "Engineering with structure, clarity, and care.", body: profile.about, detail: "My work spans TypeScript product development, backend services, relational databases, Java applications, and applied machine learning. I aim to make every system easier to use and easier to maintain." },
    footer: { availability: "Have a role or product worth discussing?", title: "Let’s build something dependable.", email: "Email Dana", built: "Designed and engineered with Next.js" },
    projects,
    capabilityGroups,
  },
  ar: {
    contact: {
      home: "العودة للرئيسية", title: "لنتواصل.", formTitle: "تواصل مع دانا",
      intro: "لديك فرصة في هندسة البرمجيات، أو مشروع Full-stack أو Backend، أو فرصة في البيانات والذكاء الاصطناعي؟ أخبرني بما تعمل عليه. أرحب أيضاً بالتعاون في المشاريع التقنية.",
      notice: "إرسال الرسائل غير متاح حالياً. يمكنك التواصل معي عبر رابط LinkedIn أو رابط البريد الإلكتروني هنا.",
      fields: { name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة" },
      errors: { required: "يرجى تعبئة هذا الحقل.", email: "أدخل عنوان بريد إلكتروني صالحاً.", tooLong: "يرجى اختصار محتوى هذا الحقل." },
      send: "إرسال الرسالة", sending: "جارٍ الإرسال…",
      success: "تم إرسال الرسالة بنجاح. سأرد عليك قريباً.",
      unavailable: "لم تُرسل رسالتك. خدمة الإرسال غير متصلة بعد. النص ما زال محفوظاً في النموذج؛ يرجى استخدام بيانات التواصل في هذه الصفحة.",
      failure: "تعذر إرسال رسالتك. النص ما زال في النموذج. حاول مجدداً أو استخدم بيانات التواصل في هذه الصفحة.",
      details: "بيانات التواصل",
    },
    nav: { work: "المشاريع", capabilities: "التقنيات", about: "عني", contact: "تواصل" },
    hero: {
      status: "متاحة لفرص هندسة البرمجيات",
      eyebrow: "مهندسة برمجيات / مطورة Full-stack",
      title: "أطوّر منتجات رقمية واضحة وقابلة للتوسع.",
      body: "أصمم وأطوّر منتجات ويب موثوقة، من الواجهات المكتوبة بأنواع دقيقة إلى الأنظمة الغنية بالبيانات وتدفقات العمل المدعومة بالذكاء الاصطناعي.",
      primary: "استكشف المشاريع المختارة",
      secondary: "عرض السيرة الذاتية",
      detail: "من فلسطين · أعمل على المنتجات والويب والذكاء الاصطناعي التطبيقي",
    },
    work: { title: "مشاريع مختارة", intro: "مشاريع عملية تجمع بين تطوير المنتجات المتكاملة وأدوات التعاون والأنظمة التشغيلية وتحليل البيانات.", contribution: "التركيز الهندسي", live: "عرض المشروع", source: "الشيفرة المصدرية", more: "المزيد من المشاريع", fewer: "عرض مشاريع أقل" },
    capabilities: { title: "المهارات التقنية", intro: "مجموعة أدوات مركزة ومنظمة بحسب الأنظمة التي تساعدني على بنائها." },
    about: { title: "هندسة مبنية على التنظيم والوضوح والاهتمام بالتفاصيل.", body: "لدي خبرة عامين في تطوير الواجهات والأنظمة المتكاملة، وأحوّل أفكار المنتجات إلى برمجيات منظمة وسريعة الاستجابة. أهتم بقابلية قراءة الأنظمة وسرعة الواجهات والتفاصيل التي تجعل المنتجات المعقدة سهلة الاستخدام.", detail: "يمتد عملي من تطوير المنتجات باستخدام TypeScript إلى خدمات الخادم وقواعد البيانات العلائقية وتطبيقات Java وتعلم الآلة التطبيقي. هدفي أن يكون كل نظام أسهل استخداماً وصيانةً." },
    footer: { availability: "لديك فرصة أو منتج يستحق النقاش؟", title: "لنبنِ نظاماً يمكن الاعتماد عليه.", email: "راسل دانا", built: "تم التصميم والتطوير باستخدام Next.js" },
    projects: [
      { ...projects[0], category: "منصة متكاملة لإدارة الفعاليات", summary: "منصة واحدة تتيح للمنظمين والحضور والإداريين إدارة دورة حياة الفعالية كاملة.", detail: "تربط لوحات التحكم المبنية حسب الأدوار بين اكتشاف الفعاليات والدفع والتحكم في الوصول وتسجيل الحضور ضمن سير عمل موحد.", image: { ...projects[0].image, alt: "واجهة منصة إيفينزا لإدارة الفعاليات" } },
      { ...projects[1], category: "مراجعة الشيفرة بشكل تعاوني", summary: "بيئة مركزة تتيح للمطورين مراجعة الشيفرة معاً في الوقت الفعلي.", detail: "تُنظم نقاشات المراجعة والتغذية الراجعة المباشرة داخل واجهة هادئة وواضحة تحافظ على سرعة النقاش التقني.", image: { ...projects[1].image, alt: "واجهة كريتيك لمراجعة الشيفرة بشكل تعاوني" } },
      { ...projects[2], category: "الذكاء الاصطناعي وأدوات التطوير", summary: "وكيل برمجة يعمل من سطر الأوامر باستخدام Python ونموذج لغوي لفحص الملفات وتحليل الشيفرة وتشغيل أدوات تطوير محددة مسبقاً.", detail: "بُني ضمن مشروع AI Agent من Boot.dev، ويشمل استدعاء الدوال وعمليات نظام الملفات وحلقة تنفيذ تكرارية وحدود أمان للوصول إلى الأدوات، مع هندسة التعليمات وإعداد API عبر متغيرات البيئة لدعم تحليل الشيفرة آلياً.", image: { ...projects[2].image, alt: "صورة مؤقتة لوكيل البرمجة: فحص الملفات والتحليل بنموذج لغوي وأدوات محددة مسبقاً" } },
      { ...projects[3], category: "مجمّع مدونات RSS عبر سطر الأوامر", summary: "مجمّع RSS بلغة TypeScript يعمل من الطرفية ويستخدم PostgreSQL لتسجيل المستخدمين وتسجيل الدخول وإدارة اشتراكات الخلاصات.", detail: "بُني ضمن مشروع Gator من Boot.dev. يستخدم Drizzle ORM وترحيلات قاعدة البيانات لإدارة المستخدمين والخلاصات واشتراكات متعدد إلى متعدد عبر feed_follows. تتيح الأوامر غير المتزامنة إضافة الخلاصات ومتابعتها وإلغاء متابعتها وجلب محتوى RSS وتحليله وحفظ المنشورات لتصفحها من الطرفية.", image: { ...projects[3].image, alt: "صورة مؤقتة لمشروع Gator: خلاصات RSS والاشتراكات والتخزين في PostgreSQL" } },
      { ...projects[4], category: "تطبيق مكتبي لإدارة العيادات", summary: "تطبيق Java يوحّد العمليات اليومية للعيادة الطبية.", detail: "يجمع تسجيل المرضى والمواعيد وإدارة الأطباء والسجلات الطبية ضمن سير عمل مكتبي متسق وواضح.", image: { ...projects[4].image, alt: "واجهة تطبيق ميدي ديسك لإدارة العيادة" } },
      { ...projects[5], category: "تعلم الآلة وتحليل البيانات", summary: "مسار تحليلي لاكتشاف أنماط ترك الموظفين وتصنيف مستوى المخاطر.", detail: "يجمع التحليل الاستكشافي والتجميع وموازنة الفئات وعدة نماذج تعلم خاضع للإشراف ضمن سير عمل قابل لإعادة الإنتاج.", image: { ...projects[5].image, alt: "رسوم تحليل بيانات ترك الموظفين" } },
    ],
    capabilityGroups: [
      { ...capabilityGroups[0], title: "واجهات المنتجات", description: "واجهات تطبيقات متجاوبة وأنظمة UI قابلة لإعادة الاستخدام وحالات وصول واضحة وتسلسل معلومات مدروس." },
      { ...capabilityGroups[1], title: "الخدمات والبيانات", description: "واجهات API بأنواع دقيقة ومصادقة ونماذج بيانات علائقية ومنطق خادم قابل للصيانة." },
      { ...capabilityGroups[2], title: "الذكاء التطبيقي", description: "تكاملات ذكاء اصطناعي وتدفقات بيانات عملية تضيف قيمة واضحة للمنتج دون تعقيد غير ضروري." },
    ],
  },
} as const;

export type Messages = (typeof messages)[Locale];
