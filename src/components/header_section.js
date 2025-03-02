"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "home" },
  { name: "Services", href: "features" },
  { name: "Portfolio", href: "projects" },
  { name: "Contact us", href: "contact" },
  { name: "About", link: "About" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleNavigation = (link) => {
    console.log(link, "link")
    router.push(`/${link}`);
  };
  
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Universal Perk</span>
            <Image
              alt=""
              src="/logo.svg"
              width={40}
              height={40}
              className="h-10 w-auto text-[#4F46E5]"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex justify-center w-[90%] lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={""}
              onClick={
                !item.link
                  ? (e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }
                  : (e) => {
                    e.preventDefault();
                    handleNavigation(item.link)
                  }
              }
              className={`text-sm font-semibold leading-6 `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                alt=""
                src="/logo.svg"
                width={32}
                height={32}
                className="h-8 w-auto text-[#4F46E5]"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={
                      !item.link
                        ? (e) => {
                            e.preventDefault();
                            scrollToSection(item.href);
                          }
                        : (e) => handleNavigation(e, item.link)
                    }
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;