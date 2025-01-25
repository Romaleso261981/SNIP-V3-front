export type HeroStrapiData = {
  text: string;
  image: StrapiImage;
};

export type StrapiImage = {
  id: string;
  url: string;
  width: number;
  height: number;
  name: string;
  formats: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
      name: string;
    };
  };
};

export type ImageResponsive = {
  url: string;
  width: number;
  height: number;
  name: string;
  sizeInBytes: number;
  mime: string;
  ext: string;
};

export type StrapiImageResponsive = {
  id: string;
  url: string;
  width: number;
  height: number;
  name: string;
  formats: {
    large: ImageResponsive;
    medium: ImageResponsive;
    small: ImageResponsive;
    thumbnail: ImageResponsive;
  };
};

export type AboutStrapiData = {
  title: string;
  text: string;
};

export type ButtonStrapiData = {
  isExternal?: boolean;
  link: string;
  name: string;
};

export type HomeGalaryStrapiData = {
  images: StrapiImage[];
};

export type HomeStrapiResponce = {
  about: AboutStrapiData;
  gallery: HomeGalaryStrapiData;
  button: ButtonStrapiData;
  hero: HeroStrapiData;
};

export type AboutStrapiResponce = {
  id: number;
  bottomFirstText: string;
  bottomSecondText: string;
  desctopSeparatorImage: StrapiImage;
  separatorImageMobile: StrapiImage;
  imagesDesctop: StrapiImage[];
  images: {
    images: StrapiImage[];
  };
  leftFounder: string;
  main: {
    id: string;
    text: string;
    title: string;
    bottomText: string;
  };

  rightFounder: string;
};

export type BuyFromUsResponce = {
  id: number;
  examples: {
    id: number;
    text: string;
    image: StrapiImage;
  }[];
  main: { id: number; text: string; title: string };
  mainBottomText: string;
};

export type DoItYourselfResponce = {
  id: number;
  main: {
    id: number;
    bottomText: string;
    title: string;
    text: string;
  };
  examples: {
    id: number;
    image: StrapiImage;
    title: string;
  };
};

export type InviteUsResponce = {
  data: InviteUsStrapiResponce;
};

export type InviteUsStrapiResponce = {
  id: number;
  desctopGalleryimages: StrapiImage[];
  cardsExample: {
    text: string;
    title: string;
    imageExample: StrapiImage;
  }[];
  locale: string;
  text: string;
  title: string;
};

export type InviteUsCardsStrapiResponce = {
  id: number;
  img: StrapiImage;
  text: string;
  title: string;
  buttontext: string;
};

export type Card = {
  id: number;
  images: StrapiImage[];
  includes: string;
  material: string;
  name: string;
  price: number;
  size: string;
  count?: number;
  union: string;
  image: StrapiImage;
};

export type NaboriResponce = Card[];
