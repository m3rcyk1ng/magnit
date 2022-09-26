export interface IProjects {
  projects: IProjectCard[];
}

export interface IOptionalBlock {
  optionalImage: string;
  optionalText: string;
  _id: string;
}

export interface IProjectCard {
  city: string;
  image: string;
  imageGallery: string[];
  month?: string;
  name: string;
  optionalBlock?: IOptionalBlock[];
  project: string;
  projectText?: string[];
  projectTitle?: string;
  squareMeters: string;
  street: string;
  year: string;
  __v?: number;
  _id: string | undefined;
  url?: string;
}
