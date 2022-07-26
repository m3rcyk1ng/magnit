export interface IProjects {
  projects: IProjectCard[];
  onSubmit: any;
}

export interface IProjectCard {
  month: string;
  year: string;
  city: string;
  project: string;
  image: string;
  street: string;
  name: string;
  id: string;
  onSubmit: any;
  _id?: string | undefined;
}