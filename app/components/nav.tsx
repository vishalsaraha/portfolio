'use client'

import { useState } from 'react'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

// 1. Updated hrefs to match section IDs
const navigation = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Connect', href: '#connect' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div>
      <header className="absolute inset-x-0 z-50 top-0 backdrop-blur-2xl font-mono">
        <nav aria-label="Global" className="flex items-center justify-between border-2 border-primary p-2 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <Image
                src="/images/vishal.png"
                alt="Logo"
                width={100} 
                height={100}
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-8 w-8" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 bg-white text-primary font-semibold text-sm transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="https://www.linkedin.com/in/vishal-muthappa/"
              target="_blank"
              className="px-4 py-2 bg-white text-primary font-semibold text-sm transition-colors duration-300 ease-in-out hover:bg-primary hover:text-white"
            >
              Linkedin <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <Transition show={mobileMenuOpen}>
          <Dialog onClose={setMobileMenuOpen} className="relative z-50 lg:hidden">
            <TransitionChild
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-primary" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <DialogPanel className="min-h-full w-full flex flex-col p-6">
                <div className="flex items-center justify-between">
                  <Image src="/images/vishal.png" alt="Logo" width={60} height={60} />
                  <button onClick={() => setMobileMenuOpen(false)} className="text-white">
                    <XMarkIcon className="h-8 w-8" />
                  </button>
                </div>
                
                <div className="mt-10 flex flex-col divide-y divide-white/10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex justify-between items-center py-5 text-2xl font-semibold text-white tracking-tight"
                    >
                      {item.name}
                      <span className="text-lg opacity-40">↗</span>
                    </a>
                  ))}
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </Transition>
      </header>
    </div>
  )
}