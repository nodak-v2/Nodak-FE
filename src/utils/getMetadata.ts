import type { Metadata } from 'next';

import { META } from '@/src/constants/meta';

interface GetMetadataProps {
  title?: string;
  description?: string;
  asPath?: string;
  image?: string;
  icon?: string;
}

export const getMetadata = (metadataProps?: GetMetadataProps) => {
  const { title, description, asPath, image, icon } = metadataProps || {};

  const TITLE = title ? `${title} | picky` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? META.url + asPath : META.url;
  const IMAGE = image || META.image;
  const ICON = icon || META.icon;
  const metadata: Metadata = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    manifest: '/manifest.json',
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    icons: {
      icon: ICON,
    },
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: IMAGE,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: IMAGE,
      },
    },
  };

  return metadata;
};
