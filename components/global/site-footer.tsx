import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { footerInfo } from "@/data/mock";


export function SiteFooter() {
  return (
    <footer className="bg-gray-100 py-12 md:py-16">
      <div className="container px-4 md:px-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/">
              <Image
                width={30}
                height={30}
                src={footerInfo.logo}
                alt="Workflow"
                className="h-8 w-auto mb-4"
              />
            </Link>
            <p className="text-sm text-gray-600 mb-2">{footerInfo.address}</p>
            <p className="text-sm text-gray-600">{footerInfo.phone}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Havolalar</h3>
            <ul className="space-y-2">
              {footerInfo.navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yordam</h3>
            <ul className="space-y-2">
              {footerInfo.helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Yangiliklar</h3>
            <p className="text-sm text-gray-600 mb-4">{footerInfo.newsletterText}</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="E-mail manzilingiz" className="flex-grow" />
              <Button type="submit">Obuna</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">{footerInfo.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
