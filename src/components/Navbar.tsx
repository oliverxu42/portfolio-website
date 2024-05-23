import Link from 'next/link';

interface NavItem {
  text: string;
  href: string;
}

const navItems: NavItem[] = [
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Experience',
    href: '/experience',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Résumé',
    href: '/CV_OliverXu_2024.pdf',
  },
];

const Navbar: React.FC = () => {
  return (
    <div className='min-h-full'>
      <nav className='bg-white h-20 p-5 flex items-center border'>
        <div className='flex items-center m-5 w-screen'>
          <Link href='/' className='text-black font-bold text-3xl'>
            Oliver Xu
          </Link>
          <div className='flex items-baseline space-x-10 ml-auto'>
            {navItems.map((n, i) => (
              <a key={i} href={n.href}>
                {n.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
