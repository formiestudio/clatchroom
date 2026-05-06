import { siteContent } from "@/content/site";

const { nav, footer } = siteContent;

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 mb-12">
          <div className="flex flex-col leading-none">
            <span className="font-cormorant text-2xl font-light tracking-widest text-white">
              {nav.logo}
            </span>
            <span className="text-[9px] tracking-widest text-zinc-500 font-light mt-0.5">
              {nav.logoSub}
            </span>
          </div>

          <nav className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[10px] tracking-widest text-zinc-500 hover:text-white transition-colors font-light"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            {footer.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-widest text-zinc-500 hover:text-white transition-colors font-light"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-600 font-light">
            &copy; {new Date().getFullYear()} CLATCH PODCAST STUDIO. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-700 font-light">Tokyo, Japan</p>
        </div>
      </div>
    </footer>
  );
}
