import Link from 'next/link';

const links = [
  // {
  //   id: 1,
  //   title: 'About',
  //   src: '/about',
  // },
  {
    id: 1,
    title: 'Team',
    src: '/team',
  },
  {
    id: 2,
    title: 'Programs',
    src: '/programs',
  },
  {
    id: 3,
    title: 'Marketplace',
    src: '/marketplace',
  },
  {
    id: 4,
    title: 'Innovation zones',
    src: '/zones',
  },
];

export const Paths = ({styles, linkStyles, children}) => {
  return (
    <div className={styles}>
        {children}
        {
          links.map(link => (
            <Link href={link.src} key={link.id} className={`text-black font-medium ${linkStyles}`}>
              {link.title}
            </Link>
          ))
        }
    </div>
  )
}
