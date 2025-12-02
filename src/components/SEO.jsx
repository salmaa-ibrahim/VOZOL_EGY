import { useEffect } from 'react';

export default function SEO({ 
  title = 'VOZOLEGY - أفضل موقع لبيع منتجات ال vape  في مصر',
  description = 'VOZOLEGY  متجر إلكتروني لبيع أجهزة Vape  في مصر. أصلية . توصيل سريع و مجاني لكل المحافظات.',
  keywords=" سيجارة الكترونية مصر, فيب, vape مصر, زيرو نيكوتين,vozol , vozol egypt , zero nicotine , dispossible vape , اجهزة vape" ,
  image = '../../public/assets/logo.svg',
  url = 'https://vozolegy.com'
}) {
  useEffect(() => {
    // تغيير عنوان الصفحة
    document.title = title;
    
    // تحديث meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;
    
    // تحديث meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;
    
    // Open Graph tags للسوشيال ميديا
    const metaTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];
    
    metaTags.forEach(tag => {
      let element = document.querySelector(`[property="${tag.property}"]`) || 
                    document.querySelector(`[name="${tag.name}"]`);
      
      if (!element && tag.property) {
        element = document.createElement('meta');
        element.setAttribute('property', tag.property);
        document.head.appendChild(element);
      } else if (!element && tag.name) {
        element = document.createElement('meta');
        element.setAttribute('name', tag.name);
        document.head.appendChild(element);
      }
      
      if (element) {
        element.content = tag.content;
      }
    });
    
  }, [title, description, keywords, image, url]);
  
  return null; // هذا Component ما بيعرضش أي شيء
}