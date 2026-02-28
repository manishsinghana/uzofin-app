export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  children?: MenuItem[];
}

export interface IndustryItem {
  id: number;
  title: string;
  description: string;
}

export interface FeaturedCard {
  id: number  
  title: string;
  description: string;
  link: string;
}
