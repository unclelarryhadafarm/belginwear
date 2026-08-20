/* ================================================================
   BELGIN WEAR — VERSION 1.0
   Bilingual content, navigation, image fallbacks and contact validation.
   ================================================================ */

(function () {
  "use strict";

  const SELECTORS = {
    header: "[data-site-header]",
    menuToggle: "[data-menu-toggle]",
    mobileMenu: "[data-mobile-menu]",
    languageButtons: "[data-language]",
    heroImage: "[data-hero-image]",
    aboutImage: "[data-about-image]",
    contentImages: "[data-content-image]",
    revealItems: "[data-reveal]",
    contactForm: "[data-contact-form]",
    currentYear: "[data-current-year]"
  };

  const STORAGE_KEY = "belginWearLanguage";
  let currentLanguage = "en";

  /* EDIT: TRANSLATIONS. Keep the English and Turkish keys aligned. */
  const translations = {
    en: {
      metaTitle: "Belgin Wear | Garment Development & Production in Bursa",
      metaDescription: "Belgin Wear supports garment development and production projects with flexible, practical expertise shaped by 42 years of craftsmanship in Bursa, Türkiye.",
      metaSocialTitle: "Belgin Wear | Garment Development & Production",
      skipLink: "Skip to main content",
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      categories: "Categories",
      process: "Process",
      quality: "Quality",
      contactBelginWear: "Contact Belgin Wear",
      heroFromSample: "From Sample",
      heroToProduction: "to Production",
      heroIntroduction: "Flexible garment development and production, shaped by 42 years of craftsmanship in Bursa, Türkiye.",
      exploreServices: "Explore Our Services",
      contactUs: "Contact Us",
      heroNote: "Garment development & production",
      aboutEyebrow: "About Belgin Wear",
      aboutTitle: "Built on Experience, Shaped by Care",
      aboutParagraphOne: "Belgin Wear is built on forty-two years of practical garment and textile craftsmanship, bringing long-standing hands-on knowledge into every new project.",
      aboutParagraphTwo: "Belgin’s experience spans garment development, sewing and textile production, with the flexibility to adapt to different product categories and production requirements.",
      aboutParagraphThree: "Belgin Wear brings that experience into a modern, project-focused model centered on responsibility, transparent communication and attentive follow-up.",
      aboutPlaceholder: "Garment & Textile Craftsmanship",
      aboutCaption: "Practical craftsmanship, applied with care.",
      highlightOneTitle: "42 Years of Craftsmanship",
      highlightOneText: "Hands-on knowledge built through decades of garment and textile work.",
      highlightTwoTitle: "Versatile Production Experience",
      highlightTwoText: "Experience across sewing, product development and varied textile requirements.",
      highlightThreeTitle: "Direct Project Follow-Up",
      highlightThreeText: "Clear communication and practical attention throughout each production project.",
      servicesEyebrow: "Core Services",
      servicesTitle: "What We Can Help You Produce",
      servicesIntroduction: "Belgin Wear supports different garment and textile projects through flexible production services shaped around practical project requirements.",
      sampleDevelopment: "Sample Development",
      sampleDevelopmentText: "Turning a design or reference into a practical sample for review and refinement.",
      productDevelopment: "Product Development",
      productDevelopmentText: "Supporting fit, construction and production details as a garment moves forward.",
      privateLabel: "Private Label Production",
      privateLabelText: "Garment production for brands using their own name, specifications and designs.",
      contractSewing: "Contract Sewing",
      contractSewingText: "Sewing support for projects with prepared designs, patterns or production materials.",
      batchProduction: "Small & Medium Batch Production",
      batchProductionText: "Project-based production for suitable small and medium batch requirements.",
      fabricSourcing: "Fabric Sourcing Support",
      fabricSourcingText: "Support in identifying fabric options suited to the product and its requirements.",
      categoriesEyebrow: "Product Range",
      categoriesTitle: "Product Categories",
      categoriesIntroduction: "Belgin Wear supports a wide variety of garment and textile production projects, depending on each product’s requirements and production planning.",
      photographyPlaceholder: "Photography placeholder",
      womensWear: "Women’s Wear",
      womensWearText: "Development and production support for women’s garments across varied styles and construction needs.",
      childrensWear: "Children’s Wear",
      childrensWearText: "Careful garment production for children’s styles, shaped around the product’s specifications.",
      menswearStreetwear: "Menswear & Streetwear",
      menswearStreetwearText: "Practical support for casual menswear and streetwear pieces, from sampling onward.",
      homeTextiles: "Home Textiles",
      homeTextilesText: "Production experience across selected household textile products and soft furnishings.",
      customProjects: "Custom Textile Projects",
      customProjectsText: "Project-focused support for textile products outside standard garment categories.",
      portfolioEyebrow: "Production Experience",
      portfolioTitle: "Selected Work",
      portfolioIntroduction: "This gallery is prepared for representative examples of product types Belgin Wear has experience producing. Verified project photography will be added as it becomes available.",
      photographyNote: "Photography note:",
      photographyDisclaimer: "the image areas below are temporary placeholders and do not represent completed client work.",
      portfolioPlaceholder: "Portfolio photography placeholder",
      summerSet: "Summer Co-Ord Set",
      summerSetText: "Coordinated separates developed as one product set.",
      beachKimono: "Women’s Beach Kimono",
      beachKimonoText: "A lightweight outer layer requiring clean edge finishing.",
      girlsDress: "Girls’ Occasion Dress",
      girlsDressText: "A detailed children’s style suited to sample-led development.",
      bridalDress: "Children’s Bridal Dress",
      bridalDressText: "A formal children’s style with detail-focused construction.",
      menswear: "Women's Wear",
      mensTshirt: "Women’s Long Skirt",
      mensTshirtText: "A long women’s skirt developed with attention to fit, drape and finishing.",
      streetwear: "Children's Wear",,
      hoodie: "Children’s Summer Dress",
      hoodieText: "A lightweight children’s summer dress developed for comfort and practical construction.",
      duvetSet: "Duvet Cover Set",
      duvetSetText: "Coordinated bedding pieces produced to shared measurements.",
      cushion: "Decorative Cushion",
      cushionText: "A soft furnishing adaptable to fabric and size specifications.",
      hospitalityTextiles: "Hospitality Textiles",
      tableRunner: "Restaurant Table Runner",
      tableRunnerText: "A hospitality textile produced to practical dimensions and finishes.",
      healthcareTextiles: "Healthcare Textiles",
      mattressProtector: "Healthcare Mattress Protector",
      mattressProtectorText: "A functional textile developed around its use requirements.",
      customTextiles: "Custom Textiles",
      supporterFlag: "Supporter Flag",
      supporterFlagText: "A custom textile format shaped by artwork and finishing needs.",
      customSample: "Custom Textile Sample",
      customSampleText: "A project-specific sample used to review construction and materials.",
      processEyebrow: "Production Process",
      processTitle: "How We Work",
      processIntroduction: "Every project follows a structured production workflow, with clear communication and a practical project review before manufacturing begins.",
      initialInquiry: "Initial Inquiry",
      initialInquiryText: "The client shares project information by email, WhatsApp or the contact form.",
      projectReview: "Project Review",
      projectReviewText: "Product type, estimated quantity, materials and production requirements are reviewed.",
      clarification: "Clarification",
      clarificationText: "Any missing technical details are discussed before production planning begins.",
      assessment: "Preliminary Assessment",
      assessmentText: "Production feasibility, sample requirements and the expected timeline are evaluated.",
      sampleProcessText: "A sample is prepared after all production details have been confirmed.",
      approvalQuotation: "Approval & Quotation",
      approvalQuotationText: "Pricing, production quantities and project expectations are confirmed.",
      productionPlanning: "Production Planning",
      productionPlanningText: "Materials, workflow and quality checkpoints are organized.",
      production: "Production",
      productionText: "Manufacturing begins while communication continues throughout the project.",
      finalInspection: "Final Inspection",
      finalInspectionText: "Products are checked, finished and prepared for packing.",
      deliveryCoordination: "Delivery Coordination",
      deliveryCoordinationText: "Delivery arrangements are confirmed according to the agreed project requirements.",
      qualityEyebrow: "Quality Control",
      qualityTitle: "Quality Throughout the Process",
      qualityIntroduction: "Quality is monitored throughout production, not only after the final garment has been completed.",
      materialInspection: "Material Inspection",
      materialInspectionText: "Fabric quality, color consistency, accessories and visible defects are reviewed before use.",
      cuttingInspection: "Cutting Inspection",
      cuttingInspectionText: "Pattern accuracy, fabric direction, symmetry and cutting precision are checked before sewing.",
      sewingControl: "In-Line Sewing Control",
      sewingControlText: "Stitch quality, seam consistency, clean finishing and construction accuracy are monitored during sewing.",
      measurementVerification: "Measurement Verification",
      measurementVerificationText: "Measurements are checked against approved specifications for size consistency and agreed tolerances.",
      finalGarmentInspection: "Final Garment Inspection",
      finalGarmentInspectionText: "Threads, stains, pressing, labels and the overall garment finish are reviewed.",
      packingCheck: "Packing & Quantity Check",
      packingCheckText: "Models, sizes, colors and quantities are checked before carton preparation.",
      qualityMessage: "Products requiring correction are separated before final packing so that agreed quality expectations can be maintained throughout the production process.",
      contactEyebrow: "Start a Project",
      contactTitle: "Tell Us About Your Project",
      contactIntroduction: "Share your product type, estimated quantity and any relevant details. We will review your inquiry and contact you to discuss the next steps.",
      directContact: "Direct contact",
      contactChoice: "Choose the way that suits you.",
      contactChoiceText: "Email, call or send a WhatsApp message to begin a practical conversation about your production requirements.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      linkedIn: "LinkedIn",
      pageComingSoon: "Page coming soon",
      productionInquiry: "Production inquiry",
      projectDetails: "Project Details",
      requiredFields: "Required fields",
      name: "Name",
      company: "Company",
      phoneNumber: "Phone Number",
      country: "Country",
      productType: "Product Type",
      estimatedQuantity: "Estimated Quantity",
      message: "Message",
      messageHelp: "Please share as much detail as possible about your product, materials, quantities and expected timeline.",
      submitInquiry: "Send Project Inquiry",
      submissionPending: "Thank you for your interest. Online submissions will be available soon. In the meantime, please contact us by email or WhatsApp.",
      privacyNote: "The information you provide will only be used to review your production inquiry.",
      footerIntroduction: "Garment development and production shaped by practical craftsmanship in Bursa, Türkiye.",
      quickLinks: "Quick Links",
      follow: "Follow",
      privacyPolicy: "Privacy Policy",
      comingSoon: "Coming soon",
      cookiePolicy: "Cookie Policy",
      validationRequired: "Please complete this field.",
      validationName: "Please enter your name.",
      validationEmailRequired: "Please enter your email address.",
      validationMessage: "Please tell us about your project.",
      validationEmail: "Please enter a valid email address.",
      english: "English",
      turkish: "Turkish",
      ariaHome: "Belgin Wear home",
      ariaPrimaryNavigation: "Primary navigation",
      ariaLanguageSelector: "Language selector",
      ariaOpenMenu: "Open navigation menu",
      ariaCloseMenu: "Close navigation menu",
      ariaMobileNavigation: "Mobile navigation",
      ariaHeroActions: "Hero actions",
      ariaHighlights: "Belgin Wear highlights",
      ariaProcess: "Ten-step production process",
      ariaMaterialIcon: "Material inspection icon",
      ariaCuttingIcon: "Cutting inspection icon",
      ariaSewingIcon: "In-line sewing control icon",
      ariaMeasurementIcon: "Measurement verification icon",
      ariaFinalIcon: "Final garment inspection icon",
      ariaPackingIcon: "Packing and quantity check icon",
      ariaQualityCorrection: "Quality correction process",
      ariaContactOptions: "Contact options",
      ariaWhatsApp: "Contact Belgin Wear on WhatsApp",
      ariaEmail: "Email Belgin Wear",
      ariaPhone: "Call Belgin Wear",
      ariaInstagram: "Visit Belgin Wear on Instagram",
      ariaFooterNavigation: "Footer navigation",
      ariaPolicies: "Future policy pages",
      altAbout: "Temporary placeholder for future photograph of hands working with fabric during garment production",
      altWomens: "Temporary placeholder for future women’s wear production photography",
      altChildren: "Temporary placeholder for future children’s wear production photography",
      altMenswear: "Temporary placeholder for future menswear and streetwear production photography",
      altHome: "Temporary placeholder for future home textile production photography",
      altCustom: "Temporary placeholder for future custom textile project photography",
      altSummer: "Temporary placeholder for future photograph of a summer co-ord set",
      altKimono: "Temporary placeholder for future photograph of a women’s beach kimono",
      altGirlsDress: "Temporary placeholder for future photograph of a girls’ occasion dress",
      altBridal: "Temporary placeholder for future photograph of a children’s bridal dress",
      altTshirt: "Photograph of a women’s long skirt produced by Belgin Wear",
      altHoodie: "Photograph of a children’s summer dress produced by Belgin Wear",
      altDuvet: "Temporary placeholder for future photograph of a duvet cover set",
      altCushion: "Temporary placeholder for future photograph of a decorative cushion",
      altRunner: "Temporary placeholder for future photograph of a restaurant table runner",
      altMattress: "Temporary placeholder for future photograph of a healthcare mattress protector",
      altFlag: "Temporary placeholder for future photograph of a custom supporter flag",
      altSample: "Temporary placeholder for future photograph of a custom textile sample"
    },
    tr: {
      metaTitle: "Belgin Wear | Bursa’da Giysi Geliştirme ve Üretim",
      metaDescription: "Belgin Wear, Bursa, Türkiye’de 42 yıllık ustalıkla şekillenen esnek ve uygulamaya dönük giysi geliştirme ve üretim desteği sunar.",
      metaSocialTitle: "Belgin Wear | Giysi Geliştirme ve Üretim",
      skipLink: "Ana içeriğe geç",
      home: "Ana Sayfa",
      about: "Hakkımızda",
      services: "Hizmetler",
      portfolio: "Portföy",
      contact: "İletişim",
      categories: "Kategoriler",
      process: "Süreç",
      quality: "Kalite",
      contactBelginWear: "Belgin Wear ile İletişime Geçin",
      heroFromSample: "Numuneden",
      heroToProduction: "Üretime",
      heroIntroduction: "Belgin Wear, Bursa, Türkiye’de 42 yıllık ustalığın şekillendirdiği esnek giysi geliştirme ve üretim desteği sunar.",
      exploreServices: "Hizmetlerimizi İnceleyin",
      contactUs: "Bize Ulaşın",
      heroNote: "Giysi geliştirme ve üretim",
      aboutEyebrow: "Belgin Wear Hakkında",
      aboutTitle: "Deneyim Üzerine Kurulu, Özenle Şekillenen",
      aboutParagraphOne: "Belgin Wear, kırk iki yıllık uygulamalı giysi ve tekstil ustalığı üzerine kuruludur; uzun yıllara dayanan pratik bilgiyi her yeni projeye taşır.",
      aboutParagraphTwo: "Belgin’in deneyimi; giysi geliştirme, dikim ve tekstil üretimini kapsar ve farklı ürün kategorileri ile üretim gereksinimlerine uyum sağlama esnekliği sunar.",
      aboutParagraphThree: "Belgin Wear bu deneyimi; sorumluluk, şeffaf iletişim ve dikkatli proje takibi merkezinde şekillenen modern, proje odaklı bir üretim modeliyle bir araya getirir.",
      aboutPlaceholder: "Giysi ve Tekstil Ustalığı",
      aboutCaption: "Özenle uygulanan pratik ustalık.",
      highlightOneTitle: "42 Yıllık Ustalık",
      highlightOneText: "On yıllara yayılan giysi ve tekstil çalışmalarıyla oluşan uygulamalı bilgi.",
      highlightTwoTitle: "Çok Yönlü Üretim Deneyimi",
      highlightTwoText: "Dikim, ürün geliştirme ve farklı tekstil gereksinimlerini kapsayan deneyim.",
      highlightThreeTitle: "Doğrudan Proje Takibi",
      highlightThreeText: "Her üretim projesi boyunca açık iletişim ve uygulamaya dönük özen.",
      servicesEyebrow: "Temel Hizmetler",
      servicesTitle: "Üretmenize Nasıl Yardımcı Olabiliriz",
      servicesIntroduction: "Belgin Wear, farklı giysi ve tekstil projelerini, projenin uygulama gereksinimlerine göre şekillenen esnek üretim hizmetleriyle destekler.",
      sampleDevelopment: "Numune Geliştirme",
      sampleDevelopmentText: "Bir tasarımı veya referansı, değerlendirme ve iyileştirme için uygulanabilir bir numuneye dönüştürme.",
      productDevelopment: "Ürün Geliştirme",
      productDevelopmentText: "Ürün geliştirme sürecinde kalıp uyumu, yapı ve üretim detaylarına destek.",
      privateLabel: "Özel Markalı Üretim",
      privateLabelText: "Markalara kendi isim, teknik özellik ve tasarımlarıyla giysi üretim desteği.",
      contractSewing: "Fason Dikim",
      contractSewingText: "Hazır tasarım, kalıp veya üretim malzemelerine sahip projeler için dikim desteği.",
      batchProduction: "Küçük ve Orta Partili Üretim",
      batchProductionText: "Uygun küçük ve orta parti gereksinimleri için proje bazlı üretim.",
      fabricSourcing: "Kumaş Tedarik Desteği",
      fabricSourcingText: "Ürüne ve gereksinimlerine uygun kumaş seçeneklerinin belirlenmesine destek.",
      categoriesEyebrow: "Ürün Yelpazesi",
      categoriesTitle: "Ürün Kategorileri",
      categoriesIntroduction: "Belgin Wear, her ürünün gereksinimlerine ve üretim planlamasına bağlı olarak çok çeşitli giysi ve tekstil üretim projelerini destekler.",
      photographyPlaceholder: "Fotoğraf alanı",
      womensWear: "Kadın Giyim",
      womensWearText: "Farklı stil ve yapı gereksinimlerine sahip kadın giyim ürünleri için geliştirme ve üretim desteği.",
      childrensWear: "Çocuk Giyim",
      childrensWearText: "Çocuk ürünleri için ürünün teknik özelliklerine göre şekillenen özenli üretim.",
      menswearStreetwear: "Erkek Giyim ve Sokak Modası",
      menswearStreetwearText: "Günlük erkek giyim ve sokak modası ürünleri için numune aşamasından itibaren uygulamaya dönük destek.",
      homeTextiles: "Ev Tekstili",
      homeTextilesText: "Seçili ev tekstili ve yumuşak dekorasyon ürünlerinde üretim deneyimi.",
      customProjects: "Özel Tekstil Projeleri",
      customProjectsText: "Standart giysi kategorilerinin dışındaki tekstil ürünleri için proje odaklı destek.",
      portfolioEyebrow: "Üretim Deneyimi",
      portfolioTitle: "Seçili Çalışmalar",
      portfolioIntroduction: "Bu galeri, Belgin Wear’ın üretim deneyimine sahip olduğu ürün türlerinden örnekler sunmak üzere hazırlanmıştır. Doğrulanmış proje fotoğrafları mevcut oldukça eklenecektir.",
      photographyNote: "Fotoğraf notu:",
      photographyDisclaimer: "Aşağıdaki görsel alanlar geçici yer tutuculardır ve tamamlanmış müşteri çalışmalarını temsil etmez.",
      portfolioPlaceholder: "Portföy fotoğraf alanı",
      summerSet: "Yazlık Takım",
      summerSetText: "Tek bir ürün seti olarak geliştirilen uyumlu parçalar.",
      beachKimono: "Kadın Plaj Kimonosu",
      beachKimonoText: "Temiz kenar bitişi gerektiren hafif bir dış katman.",
      girlsDress: "Kız Çocuk Özel Gün Elbisesi",
      girlsDressText: "Numune odaklı geliştirmeye uygun, detaylı bir çocuk giyim ürünü.",
      bridalDress: "Çocuk Gelinliği",
      bridalDressText: "Detay odaklı yapıya sahip resmi bir çocuk giyim ürünü.",
      menswear: "Kadın Giyim",
      mensTshirt: "Kadın Uzun Etek",
      mensTshirtText: "Duruş, döküm ve bitiş detaylarına dikkat edilerek hazırlanan uzun kadın eteği.",
      streetwear: "Çocuk Giyim",
      hoodie: "Çocuk Yazlık Elbise",
      hoodieText: "Konfor ve pratik üretim detayları gözetilerek hazırlanan hafif çocuk yazlık elbisesi.",
      duvetSet: "Nevresim Takımı",
      duvetSetText: "Ortak ölçülere göre üretilen uyumlu yatak tekstili parçaları.",
      cushion: "Dekoratif Minder",
      cushionText: "Kumaş ve ölçü özelliklerine uyarlanabilen yumuşak dekorasyon ürünü.",
      hospitalityTextiles: "Konaklama Tekstilleri",
      tableRunner: "Restoran Masa Runnerı",
      tableRunnerText: "Uygulamaya dönük ölçü ve bitişlerle üretilen bir konaklama tekstili.",
      healthcareTextiles: "Sağlık Tekstilleri",
      mattressProtector: "Sağlık Sektörü Yatak Koruyucusu",
      mattressProtectorText: "Kullanım gereksinimlerine göre geliştirilen işlevsel bir tekstil ürünü.",
      customTextiles: "Özel Tekstiller",
      supporterFlag: "Taraftar Bayrağı",
      supporterFlagText: "Görsel çalışma ve bitiş gereksinimlerine göre şekillenen özel bir tekstil ürünü.",
      customSample: "Özel Tekstil Numunesi",
      customSampleText: "Yapı ve malzemeleri değerlendirmek için kullanılan projeye özel numune.",
      processEyebrow: "Üretim Süreci",
      processTitle: "Nasıl Çalışıyoruz",
      processIntroduction: "Her proje, üretim başlamadan önce açık iletişimi ve uygulamaya dönük proje değerlendirmesini içeren yapılandırılmış bir iş akışını izler.",
      initialInquiry: "İlk Talep",
      initialInquiryText: "Müşteri proje bilgilerini e-posta, WhatsApp veya iletişim formu üzerinden paylaşır.",
      projectReview: "Proje İncelemesi",
      projectReviewText: "Ürün türü, tahmini adet, malzemeler ve üretim gereksinimleri incelenir.",
      clarification: "Detayların Netleştirilmesi",
      clarificationText: "Üretim planlaması başlamadan önce eksik teknik detaylar görüşülür.",
      assessment: "Ön Değerlendirme",
      assessmentText: "Üretim uygunluğu, numune gereksinimleri ve beklenen zaman planı değerlendirilir.",
      sampleProcessText: "Tüm üretim detayları doğrulandıktan sonra bir numune hazırlanır.",
      approvalQuotation: "Onay ve Fiyatlandırma",
      approvalQuotationText: "Fiyatlandırma, üretim adetleri ve proje beklentileri doğrulanır.",
      productionPlanning: "Üretim Planlaması",
      productionPlanningText: "Malzemeler, iş akışı ve kalite kontrol noktaları düzenlenir.",
      production: "Üretim",
      productionText: "Proje boyunca iletişim sürerken üretim başlar.",
      finalInspection: "Son Kontrol",
      finalInspectionText: "Ürünler kontrol edilir, tamamlanır ve paketlemeye hazırlanır.",
      deliveryCoordination: "Teslimat Koordinasyonu",
      deliveryCoordinationText: "Teslimat düzenlemeleri, kararlaştırılan proje gereksinimlerine göre doğrulanır.",
      qualityEyebrow: "Kalite Kontrol",
      qualityTitle: "Süreç Boyunca Kalite",
      qualityIntroduction: "Kalite yalnızca son ürün tamamlandıktan sonra değil, üretimin tüm aşamalarında takip edilir.",
      materialInspection: "Malzeme Kontrolü",
      materialInspectionText: "Kumaş kalitesi, renk tutarlılığı, aksesuarlar ve görünür kusurlar kullanımdan önce incelenir.",
      cuttingInspection: "Kesim Kontrolü",
      cuttingInspectionText: "Kalıp doğruluğu, kumaş yönü, simetri ve kesim hassasiyeti dikimden önce kontrol edilir.",
      sewingControl: "Üretim İçi Dikim Kontrolü",
      sewingControlText: "Dikiş kalitesi, dikiş tutarlılığı, temiz bitiş ve yapı doğruluğu üretim sırasında takip edilir.",
      measurementVerification: "Ölçü Doğrulama",
      measurementVerificationText: "Ölçüler; beden tutarlılığı ve kararlaştırılan toleranslar için onaylı teknik özelliklere göre kontrol edilir.",
      finalGarmentInspection: "Nihai Ürün Kontrolü",
      finalGarmentInspectionText: "İplikler, lekeler, ütü, etiketler ve ürünün genel bitişi incelenir.",
      packingCheck: "Paketleme ve Adet Kontrolü",
      packingCheckText: "Modeller, bedenler, renkler ve adetler koli hazırlığından önce kontrol edilir.",
      qualityMessage: "Düzeltme gerektiren ürünler, kararlaştırılan kalite beklentilerinin üretim süreci boyunca korunabilmesi için son paketlemeden önce ayrılır.",
      contactEyebrow: "Projeye Başlayın",
      contactTitle: "Projenizi Bize Anlatın",
      contactIntroduction: "Ürün türünüzü, tahmini adedi ve ilgili diğer bilgileri paylaşın. Talebinizi inceleyerek sonraki adımları görüşmek üzere sizinle iletişime geçelim.",
      directContact: "Doğrudan iletişim",
      contactChoice: "Size en uygun iletişim yöntemini seçin.",
      contactChoiceText: "Üretim gereksinimleriniz hakkında uygulamaya dönük bir görüşme başlatmak için e-posta gönderin, arayın veya WhatsApp üzerinden yazın.",
      email: "E-posta",
      phone: "Telefon",
      location: "Konum",
      linkedIn: "LinkedIn",
      pageComingSoon: "Sayfa yakında eklenecek",
      productionInquiry: "Üretim talebi",
      projectDetails: "Proje Bilgileri",
      requiredFields: "Zorunlu alanlar",
      name: "Ad Soyad",
      company: "Firma",
      phoneNumber: "Telefon Numarası",
      country: "Ülke",
      productType: "Ürün Türü",
      estimatedQuantity: "Tahmini Adet",
      message: "Mesaj",
      messageHelp: "Lütfen ürününüz, malzemeler, adetler ve beklediğiniz zaman planı hakkında mümkün olduğunca ayrıntılı bilgi paylaşın.",
      submitInquiry: "Proje Talebini Gönder",
      submissionPending: "İlginiz için teşekkür ederiz. Çevrim içi gönderimler yakında kullanıma açılacaktır. Bu sürede lütfen e-posta veya WhatsApp üzerinden bizimle iletişime geçin.",
      privacyNote: "Paylaştığınız bilgiler yalnızca üretim talebinizi değerlendirmek amacıyla kullanılacaktır.",
      footerIntroduction: "Bursa, Türkiye’de pratik ustalıkla şekillenen giysi geliştirme ve üretim.",
      quickLinks: "Hızlı Bağlantılar",
      follow: "Sosyal Medya",
      privacyPolicy: "Gizlilik Politikası",
      comingSoon: "Yakında",
      cookiePolicy: "Çerez Politikası",
      validationRequired: "Lütfen bu alanı doldurun.",
      validationName: "Lütfen adınızı ve soyadınızı girin.",
      validationEmailRequired: "Lütfen e-posta adresinizi girin.",
      validationMessage: "Lütfen projeniz hakkında bilgi verin.",
      validationEmail: "Lütfen geçerli bir e-posta adresi girin.",
      english: "İngilizce",
      turkish: "Türkçe",
      ariaHome: "Belgin Wear ana sayfa",
      ariaPrimaryNavigation: "Ana gezinme",
      ariaLanguageSelector: "Dil seçimi",
      ariaOpenMenu: "Gezinme menüsünü aç",
      ariaCloseMenu: "Gezinme menüsünü kapat",
      ariaMobileNavigation: "Mobil gezinme",
      ariaHeroActions: "Ana bölüm bağlantıları",
      ariaHighlights: "Belgin Wear öne çıkan özellikleri",
      ariaProcess: "On adımlı üretim süreci",
      ariaMaterialIcon: "Malzeme kontrolü simgesi",
      ariaCuttingIcon: "Kesim kontrolü simgesi",
      ariaSewingIcon: "Üretim içi dikim kontrolü simgesi",
      ariaMeasurementIcon: "Ölçü doğrulama simgesi",
      ariaFinalIcon: "Nihai ürün kontrolü simgesi",
      ariaPackingIcon: "Paketleme ve adet kontrolü simgesi",
      ariaQualityCorrection: "Kalite düzeltme süreci",
      ariaContactOptions: "İletişim seçenekleri",
      ariaWhatsApp: "Belgin Wear ile WhatsApp üzerinden iletişime geçin",
      ariaEmail: "Belgin Wear’a e-posta gönderin",
      ariaPhone: "Belgin Wear’ı arayın",
      ariaInstagram: "Belgin Wear Instagram sayfasını ziyaret edin",
      ariaFooterNavigation: "Alt bilgi gezinmesi",
      ariaPolicies: "Gelecekte eklenecek politika sayfaları",
      altAbout: "Giysi üretiminde kumaşla çalışan ellerin gelecekte eklenecek fotoğrafı için geçici alan",
      altWomens: "Gelecekte eklenecek kadın giyim üretim fotoğrafı için geçici alan",
      altChildren: "Gelecekte eklenecek çocuk giyim üretim fotoğrafı için geçici alan",
      altMenswear: "Gelecekte eklenecek erkek giyim ve sokak modası üretim fotoğrafı için geçici alan",
      altHome: "Gelecekte eklenecek ev tekstili üretim fotoğrafı için geçici alan",
      altCustom: "Gelecekte eklenecek özel tekstil projesi fotoğrafı için geçici alan",
      altSummer: "Gelecekte eklenecek yazlık takım fotoğrafı için geçici alan",
      altKimono: "Gelecekte eklenecek kadın plaj kimonosu fotoğrafı için geçici alan",
      altGirlsDress: "Gelecekte eklenecek kız çocuk özel gün elbisesi fotoğrafı için geçici alan",
      altBridal: "Gelecekte eklenecek çocuk gelinliği fotoğrafı için geçici alan",
      altTshirt: "Belgin Wear tarafından üretilen kadın uzun etek fotoğrafı",
      altHoodie: "Belgin Wear tarafından üretilen çocuk yazlık elbise fotoğrafı",
      altDuvet: "Gelecekte eklenecek nevresim takımı fotoğrafı için geçici alan",
      altCushion: "Gelecekte eklenecek dekoratif minder fotoğrafı için geçici alan",
      altRunner: "Gelecekte eklenecek restoran masa runnerı fotoğrafı için geçici alan",
      altMattress: "Gelecekte eklenecek sağlık sektörü yatak koruyucusu fotoğrafı için geçici alan",
      altFlag: "Gelecekte eklenecek özel taraftar bayrağı fotoğrafı için geçici alan",
      altSample: "Gelecekte eklenecek özel tekstil numunesi fotoğrafı için geçici alan"
    }
  };

  const translationKeyByValue = new Map();

  Object.keys(translations.en).forEach(function (key) {
    Object.keys(translations).forEach(function (language) {
      const value = translations[language][key];

      if (typeof value === "string") {
        translationKeyByValue.set(value.replace(/\s+/g, " ").trim(), key);
      }
    });
  });

  function getTranslation(key, language) {
    const selectedLanguage = translations[language] ? language : currentLanguage;
    return translations[selectedLanguage][key] || translations.en[key] || key;
  }

  function translateValue(value, language) {
    const normalizedValue = value.replace(/\s+/g, " ").trim();
    const key = translationKeyByValue.get(normalizedValue);

    return key ? getTranslation(key, language) : null;
  }

  function translateTextNodes(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while (node) {
      const parent = node.parentElement;
      const translatedValue = parent && !parent.closest("script, style, noscript")
        ? translateValue(node.nodeValue || "", language)
        : null;

      if (translatedValue) {
        const leadingWhitespace = (node.nodeValue || "").match(/^\s*/)[0];
        const trailingWhitespace = (node.nodeValue || "").match(/\s*$/)[0];
        node.nodeValue = leadingWhitespace + translatedValue + trailingWhitespace;
      }

      node = walker.nextNode();
    }
  }

  function translateAttributes(language) {
    const attributeNames = ["aria-label", "alt", "title", "data-error-required"];

    document.querySelectorAll("[aria-label], [alt], [title], [data-error-required]").forEach(function (element) {
      attributeNames.forEach(function (attributeName) {
        const value = element.getAttribute(attributeName);
        const translatedValue = value ? translateValue(value, language) : null;

        if (translatedValue) {
          element.setAttribute(attributeName, translatedValue);
        }
      });
    });
  }

  function updateMetadata(language) {
    const metaBindings = {
      'meta[name="description"]': "metaDescription",
      'meta[property="og:title"]': "metaSocialTitle",
      'meta[property="og:description"]': "heroIntroduction",
      'meta[name="twitter:title"]': "metaSocialTitle",
      'meta[name="twitter:description"]': "heroIntroduction"
    };

    document.title = getTranslation("metaTitle", language);

    Object.keys(metaBindings).forEach(function (selector) {
      const element = document.querySelector(selector);

      if (element) {
        element.setAttribute("content", getTranslation(metaBindings[selector], language));
      }
    });

    const locale = document.querySelector('meta[property="og:locale"]');
    if (locale) {
      locale.setAttribute("content", language === "tr" ? "tr_TR" : "en_US");
    }

    const alternateLocale = document.querySelector('meta[property="og:locale:alternate"]');
    if (alternateLocale) {
      alternateLocale.setAttribute("content", language === "tr" ? "en_US" : "tr_TR");
    }

    const structuredData = document.querySelector("[data-structured-data]");
    if (structuredData) {
      try {
        const data = JSON.parse(structuredData.textContent);
        data.description = getTranslation("metaDescription", language);
        structuredData.textContent = JSON.stringify(data);
      } catch {
        // Invalid editable structured data should not block the language controls.
      }
    }
  }

  function applyLanguage(language) {
    currentLanguage = translations[language] ? language : "en";
    document.documentElement.lang = currentLanguage;
    translateTextNodes(currentLanguage);
    translateAttributes(currentLanguage);
    updateMetadata(currentLanguage);

    document.querySelectorAll(SELECTORS.languageButtons).forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
    });
  }

  function initializeHeader() {
    const header = document.querySelector(SELECTORS.header);

    if (!header) {
      return;
    }

    let isUpdateScheduled = false;

    const updateHeader = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      isUpdateScheduled = false;
    };

    const requestHeaderUpdate = function () {
      if (!isUpdateScheduled) {
        window.requestAnimationFrame(updateHeader);
        isUpdateScheduled = true;
      }
    };

    updateHeader();
    window.addEventListener("scroll", requestHeaderUpdate, { passive: true });
  }

  function initializeMobileMenu() {
    const header = document.querySelector(SELECTORS.header);
    const toggle = document.querySelector(SELECTORS.menuToggle);
    const menu = document.querySelector(SELECTORS.mobileMenu);

    if (!header || !toggle || !menu) {
      return;
    }

    let closeTimer;
    let menuIsOpen = false;

    const prefersReducedMotion = function () {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    };

    const getFocusableElements = function () {
      return Array.from(
        header.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(function (element) {
        return !element.closest("[hidden]");
      });
    };

    const openMenu = function () {
      window.clearTimeout(closeTimer);
      menuIsOpen = true;
      menu.hidden = false;
      document.body.classList.add("menu-open");
      header.classList.add("is-menu-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", getTranslation("ariaCloseMenu"));

      window.requestAnimationFrame(function () {
        menu.classList.add("is-open");
      });

      const firstLink = menu.querySelector("a");
      if (firstLink) {
        firstLink.focus();
      }
    };

    const closeMenu = function (restoreFocus) {
      if (!menuIsOpen) {
        return;
      }

      menuIsOpen = false;
      document.body.classList.remove("menu-open");
      header.classList.remove("is-menu-open");
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", getTranslation("ariaOpenMenu"));

      const finishClosing = function () {
        if (!menuIsOpen) {
          menu.hidden = true;
        }
      };

      if (prefersReducedMotion()) {
        finishClosing();
      } else {
        closeTimer = window.setTimeout(finishClosing, 420);
      }

      if (restoreFocus) {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", function () {
      if (menuIsOpen) {
        closeMenu(false);
      } else {
        openMenu();
      }
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        closeMenu(false);
      }
    });

    document.addEventListener("click", function (event) {
      if (menuIsOpen && !header.contains(event.target)) {
        closeMenu(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (!menuIsOpen) {
        return;
      }

      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024 && menuIsOpen) {
        closeMenu(false);
      }
    });
  }

  function initializeLanguageSelector() {
    const buttons = Array.from(document.querySelectorAll(SELECTORS.languageButtons));

    if (!buttons.length) {
      return;
    }

    let selectedLanguage = "en";

    try {
      selectedLanguage = window.localStorage.getItem(STORAGE_KEY) || "en";
    } catch {
      selectedLanguage = "en";
    }

    if (!buttons.some(function (button) {
      return button.dataset.language === selectedLanguage;
    })) {
      selectedLanguage = "en";
    }

    applyLanguage(selectedLanguage);

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        const language = button.dataset.language;
        applyLanguage(language);

        try {
          window.localStorage.setItem(STORAGE_KEY, language);
        } catch {
          // The selector remains usable even when browser storage is unavailable.
        }
      });
    });
  }

  function initializeImageFallback(selector) {
    const images = Array.from(document.querySelectorAll(selector));

    if (!images.length) {
      return;
    }

    images.forEach(function (image) {
      const showImage = function () {
        image.classList.remove("has-error");
        image.classList.add("is-loaded");
      };

      const showFallback = function () {
        image.classList.remove("is-loaded");
        image.classList.add("has-error");
      };

      image.addEventListener("load", showImage);
      image.addEventListener("error", showFallback);

      if (image.complete) {
        if (image.naturalWidth > 0) {
          showImage();
        } else {
          showFallback();
        }
      }
    });
  }

  function initializeImages() {
    initializeImageFallback(SELECTORS.heroImage);
    initializeImageFallback(SELECTORS.aboutImage);
    initializeImageFallback(SELECTORS.contentImages);
  }

  function initializeScrollReveal() {
    const items = Array.from(document.querySelectorAll(SELECTORS.revealItems));

    if (!items.length) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      return;
    }

    items.forEach(function (item) {
      item.classList.add("is-reveal-pending");
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12
      }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initializeContactForm() {
    const form = document.querySelector(SELECTORS.contactForm);

    if (!form) {
      return;
    }

    const fields = Array.from(form.querySelectorAll("[data-validate]"));
    const status = form.querySelector("[data-form-status]");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const hideStatus = function () {
      if (status) {
        status.hidden = true;
      }
    };

    const validateField = function (field) {
      const fieldContainer = field.closest(".form-field");
      const errorElement = fieldContainer
        ? fieldContainer.querySelector("[data-field-error]")
        : null;
      const value = field.value.trim();
      let errorMessage = "";

      if (field.required && !value) {
        errorMessage = field.dataset.errorRequired || getTranslation("validationRequired");
      } else if (field.type === "email" && value && !emailPattern.test(value)) {
        errorMessage = getTranslation("validationEmail");
      }

      if (errorElement) {
        errorElement.textContent = errorMessage;
      }

      if (fieldContainer) {
        fieldContainer.classList.toggle("has-error", Boolean(errorMessage));
      }

      if (errorMessage) {
        field.setAttribute("aria-invalid", "true");
      } else {
        field.removeAttribute("aria-invalid");
      }

      return !errorMessage;
    };

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        validateField(field);
      });

      field.addEventListener("input", function () {
        hideStatus();

        if (field.getAttribute("aria-invalid") === "true") {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      hideStatus();

      let firstInvalidField = null;

      fields.forEach(function (field) {
        const isValid = validateField(field);

        if (!isValid && !firstInvalidField) {
          firstInvalidField = field;
        }
      });

      if (firstInvalidField) {
        firstInvalidField.focus();
        return;
      }

      if (status) {
        status.hidden = false;
        status.focus();
      }
    });
  }

  function initializeCurrentYear() {
    const year = document.querySelector(SELECTORS.currentYear);

    if (year) {
      year.textContent = String(new Date().getFullYear());
    }
  }

  function initialize() {
    initializeHeader();
    initializeMobileMenu();
    initializeLanguageSelector();
    initializeImages();
    initializeScrollReveal();
    initializeContactForm();
    initializeCurrentYear();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
