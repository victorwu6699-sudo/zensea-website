const content = {

'en':{
heroTitle:'Global Investment, Trade & Supply Chain Solutions',
heroDesc:'Connecting opportunities, creating value, and building a sustainable global business network.',

aboutTitle:'About Us',
aboutText:'ZENSEA is a Hong Kong based business platform specializing in investment, international trade, and supply chain solutions. We connect global partners and create sustainable business value.',

servicesTitle:'Our Services',

investment:'Investment',
investmentText:'Strategic investments, asset allocation, and partnership opportunities.',

trade:'International Trade',
tradeText:'Global sourcing, import-export operations, and market development.',

sc:'Supply Chain',
scText:'Procurement, logistics coordination, and supply chain optimization.',

why:'Why Choose ZENSEA',
w1:'Global Business Network',
w2:'Professional Expertise',
w3:'Reliable Partners',
w4:'Long-Term Value Creation',

contact:'Contact Us',

location:'Hong Kong SAR'
},

'zh-cn':{
heroTitle:'全球投资、贸易与供应链解决方案',
heroDesc:'连接全球机遇，创造长期价值，构建可持续发展的商业网络。',

aboutTitle:'关于我们',
aboutText:'ZENSEA是一家立足香港的国际商业平台，专注于投资、国际贸易及供应链解决方案。',

servicesTitle:'核心业务',

investment:'投资业务',
investmentText:'战略投资、资产配置及合作机会。',

trade:'国际贸易',
tradeText:'全球采购、进出口及市场拓展。',

sc:'供应链管理',
scText:'采购管理、物流协调及供应链优化。',

why:'为什么选择我们',
w1:'全球商业网络',
w2:'专业经验',
w3:'可靠合作伙伴',
w4:'长期价值创造',

contact:'联系我们',

location:'中国香港'
},

'zh-tw':{
heroTitle:'全球投資、貿易與供應鏈解決方案',
heroDesc:'連接全球機遇，創造長期價值，建立可持續發展商業網絡。',

aboutTitle:'關於我們',
aboutText:'ZENSEA是一家立足香港的國際商業平台，專注於投資、國際貿易及供應鏈解決方案。',

servicesTitle:'核心業務',

investment:'投資業務',
investmentText:'戰略投資、資產配置及合作機會。',

trade:'國際貿易',
tradeText:'全球採購、進出口及市場拓展。',

sc:'供應鏈管理',
scText:'採購管理、物流協調及供應鏈優化。',

why:'為什麼選擇我們',
w1:'全球商業網絡',
w2:'專業經驗',
w3:'可靠合作夥伴',
w4:'長期價值創造',

contact:'聯絡我們',

location:'香港特別行政區'
}
};

function setLanguage(lang){

document.getElementById('hero-title').innerText=content[lang].heroTitle;
document.getElementById('hero-desc').innerText=content[lang].heroDesc;

document.getElementById('about-title').innerText=content[lang].aboutTitle;
document.getElementById('about-text').innerText=content[lang].aboutText;

document.getElementById('services-title').innerText=content[lang].servicesTitle;

document.getElementById('investment-title').innerText=content[lang].investment;
document.getElementById('investment-text').innerText=content[lang].investmentText;

document.getElementById('trade-title').innerText=content[lang].trade;
document.getElementById('trade-text').innerText=content[lang].tradeText;

document.getElementById('sc-title').innerText=content[lang].sc;
document.getElementById('sc-text').innerText=content[lang].scText;

document.getElementById('why-title').innerText=content[lang].why;

document.getElementById('why1').innerText=content[lang].w1;
document.getElementById('why2').innerText=content[lang].w2;
document.getElementById('why3').innerText=content[lang].w3;
document.getElementById('why4').innerText=content[lang].w4;

document.getElementById('contact-title').innerText=content[lang].contact;
document.getElementById('location').innerText=content[lang].location;
}
