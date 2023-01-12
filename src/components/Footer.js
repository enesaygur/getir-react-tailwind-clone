import Menu from "components/ui/Menu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
export default function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "Teknoloji Kariyerleri",
        },
        {
          title: "İletişim",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular",
        },
        {
          title: "Kişisel Verilerin Korunması",
        },
        {
          title: "Gizlilik Politikası",
        },
        {
          title: "Kullanım Koşulları",
        },
        {
          title: "Çerez Politikası",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun",
        },
        {
          title: "Deponuzu Kiralayın",
        },
        {
          title: "GetirYemek Restoranı Olun",
        },
        {
          title: "GetirÇarşı İşletmesi Olun",
        },
        {
          title: "Zincir Restoranlar",
        },
      ],
    },
  ];
  return (
    <div className="bg-white mt-10">
      <div className="container mx-auto w-5/6">
        <div className="grid grid-cols-5 pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-primary-brand-color text-lg">
                Getir'i indirin!
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#" alt>
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu} />
          ))}
          <section className="flex justify-center">
            <picture className="w-[100px] pt-5">
              <a href="# ">
                <img
                  className=" w-[72px] h-[84px]"
                  src="https://cdn.getir.com/getirweb-images/common/etbis.png"
                />
              </a>
            </picture>
          </section>
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 pt-6">
          <div className="text-xs text-gray-700 flex gap-x-8">
            © 2023 Getir
            <a
              href="#"
              className="text-brand-color hover:underline relative before:w-[3px] before:h-[3px] before:bg-brand-color before:absolute before:-left-4 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
            >
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center"
            >
              <FaInstagram size={20} />
            </a>
            <a href="#" className=" h-8 gap-x-2 flex items-center justify-center border border-gray-200 text-sm  text-gray-500 transition-colors hover:bg-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent">
            <BiGlobe size={20}/> Türkçe(TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
