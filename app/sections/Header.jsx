import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Popover, Transition } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { Images } from '../constants';

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 
               hover:text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-150"
  >
    {children}
  </Link>
);

const Button = ({ href, color = "green", className = "", children }) => (
  <Link
    href={href}
    className={`
      inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg
      transition-all duration-200 shadow-sm
      ${color === "green" ? "bg-colorPrimary text-white hover:bg-green-600 hover:shadow-md" : "bg-white text-gray-700 hover:bg-gray-50"}
      ${className}
    `}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Popover.Button
    as={Link}
    href={href}
    className="block w-full p-3 text-sm font-medium text-gray-700 hover:bg-green-50 
               hover:text-green-600 rounded-md transition-colors duration-150"
  >
    {children}
  </Popover.Button>
);

function MobileNavigation() {

  const uid = 'allan';

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg
                       hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-colorPrimary"
            aria-label="Toggle Navigation"
          >
            {open ? (
              <X className="h-5 w-5 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 text-gray-600" />
            )}
          </Popover.Button>

          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay
                className="fixed inset-0 bg-gray-800/40 backdrop-blur-sm"
              />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                className="absolute right-4 top-full mt-4 w-screen max-w-xs rounded-xl 
                          bg-white p-3 shadow-lg ring-1 ring-gray-200"
              >
                <div className="space-y-1">
                  <MobileNavLink href="#features">Features</MobileNavLink>
                  <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
                  <MobileNavLink href="#pricing">Pricing</MobileNavLink>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  {!uid && (
                    <MobileNavLink href="/authentication">Sign in</MobileNavLink>
                  )}
                  <Button
                    href={uid ? "/console" : "/authentication"}
                    className="w-full mt-3 justify-center"
                  >
                    {uid ? "Go to Console" : "Try 14 Days Free Trial"}
                  </Button>
                </div>
              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  );
}

export function Header() {

  const uid = 'allan';
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="#" className="flex items-center gap-2 group">
              <Image
                alt="Logo"
                src={Images.LOGO}
                className="h-8 w-8 transition-transform duration-200 group-hover:scale-110"
              />
              <span className="text-xl font-bold text-gray-900">
                Footprints Collective
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-1">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-x-4">
            {!uid && (
              <div className="hidden md:block">
                <NavLink href="/authentication">Sign In</NavLink>
              </div>
            )}

            <div className="hidden md:block">
              <Button
                href={uid ? "/console" : "/authentication"}
                color="green"
              >
                {uid ? (
                  "Go to Console"
                ) : (
                  <>
                    Start <span className="hidden lg:inline">Today</span>
                  </>
                )}
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}