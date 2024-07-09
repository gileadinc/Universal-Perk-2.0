import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'features' },
    { name: 'Portfolio', href: 'projects' },
    { name: 'Book Consultation', href: 'schedule' },
    { name: 'Contact us', href: 'contact' },
]

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Universal Perk</span>
                        <img
                            alt=""
                            src="https://www.universalperk.com/images/logo4.png"
                            className="h-20 w-auto"
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
                        <a key={item.name} href={`#${item.href}`} onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.href)
                        }} className="text-sm font-semibold leading-6 text-gray-900">
                            {item.name}
                        </a>
                    ))}
                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Universal Perk</span>
                            <img
                                alt=""
                                src="https://www.universalperk.com/images/logo4.png"
                                className="h-8 w-auto"
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
                                        href={`#${item.href}`}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href)
                                        }}
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
    )
}

export default Header;