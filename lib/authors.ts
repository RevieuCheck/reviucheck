export interface Author {
  slug: string
  name: string
  role: string
  bio: string
  image: string
  linkedin?: string
  email?: string
  phone?: string
}

export const authors: Author[] = [
  {
    slug: 'divyaansh-tandon',
    name: 'Divyaansh Tandon',
    role: 'Founder & CEO',
    bio: 'Divyaansh Tandon is the Founder and CEO of ReviuCheck. With a passion for AI and customer experience, he founded ReviuCheck to transform how businesses manage customer feedback. He is focused on building intelligent solutions that help companies understand and act on customer sentiment at scale.',
    image: '/divyaansh.png',
    linkedin: 'https://www.linkedin.com/in/divyaansh-tandon/',
    email: 'divyaanshtandon09@gmail.com',
    phone: '7223837854',
  },
  {
    slug: 'team',
    name: 'ReviuCheck Team',
    role: 'Editorial Team',
    bio: 'The ReviuCheck team brings together expertise in AI, customer experience, and product development to deliver insights that help businesses grow through better review management.',
    image: '/divyaansh.png',
  },
  {
    slug: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Product Lead',
    bio: 'Sarah leads product strategy at ReviuCheck, focusing on building features that make review management intuitive and powerful for businesses of all sizes.',
    image: '/divyaansh.png',
  },
  {
    slug: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    role: 'Customer Success',
    bio: 'Michael ensures ReviuCheck customers achieve their goals through exceptional onboarding, training, and ongoing support.',
    image: '/divyaansh.png',
  },
  {
    slug: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Product Manager',
    bio: 'Priya manages product development at ReviuCheck, translating customer needs into features that deliver real business value.',
    image: '/divyaansh.png',
  },
]

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find(a => a.slug === slug)
}

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(a => a.name === name)
}
