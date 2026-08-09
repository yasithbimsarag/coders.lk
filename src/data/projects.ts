export interface ProjectData {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  technologies: string[];
  features: string[];
  actionLabel: string;
}

export const projects: ProjectData[] = [
  {
    id: 'techmart',
    number: '01',
    category: 'E-Commerce',
    name: 'Techmart.lk',
    description: 'A modern technology e-commerce platform built for browsing, discovering and purchasing premium gadgets and technology products.',
    tags: ['E-Commerce', 'Web Development', 'SEO', 'Digital Commerce'],
    image: '/projects/techmart-preview-real.png',
    link: 'https://techmart.lk',
    technologies: ['React', 'PHP', 'MySQL'],
    features: ['Product catalog', 'Search', 'Categories', 'Shopping cart', 'User accounts', 'Online ordering'],
    actionLabel: 'Live Website',
  },
  {
    id: 'gembook',
    number: '02',
    category: 'Enterprise Software',
    name: 'GemBook.lk',
    description: 'A specialized business management platform designed for the gem and jewelry industry, helping businesses manage inventory, operations and transactions.',
    tags: ['Custom Software', 'Inventory Management', 'Business Dashboard', 'Enterprise'],
    image: '/projects/gembook-preview-real.png',
    link: 'https://gembook.lk',
    technologies: ['Modern Web Technologies', 'PHP', 'MySQL'],
    features: ['Inventory management', 'Business records', 'Transaction management', 'Reporting', 'Secure user access'],
    actionLabel: 'Live Website',
  },
  {
    id: 'gembook-erp',
    number: '03',
    category: 'ERP System',
    name: 'GemBook ERP',
    description: 'An enterprise-grade management system developed to centralize inventory, transactions and branch operations for growing businesses.',
    tags: ['ERP', 'Enterprise Software', 'Custom Development', 'Business Systems'],
    image: '/projects/gembook-erp-preview-real.png',
    link: 'https://demo.gembook.lk',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    features: ['Multi-user access', 'Inventory management', 'Transaction tracking', 'Branch management', 'Business reporting'],
    actionLabel: 'Open Demo',
  },
];
