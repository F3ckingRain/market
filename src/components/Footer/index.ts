type FooterLinkType = {
  link: string;
  path: string;
};

type LinkColumnType = {
  title: 'Магазин' | 'Каталог' | 'Компания' | 'Партнерам';
  links: FooterLinkType[];
};

type FooterLinks = LinkColumnType[];

const footerLinks: FooterLinks = [
  { title: 'Магазин', links: [{ path: 'Главная', link: '' }] },
  { title: 'Каталог', links: [] },
  { title: 'Компания', links: [] },
  { title: 'Партнерам', links: [] },
];

export { footerLinks };
