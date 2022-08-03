export interface IVacancies {
  vacancies: IVacancyCard[];
  onSubmit: any;
}

export interface IVacancyCard {
  conditions?: string[];
  description: string;
  education: string;
  experience: string;
  image: string;
  name: string;
  phoneNumber: string;
  salary: number;
  updatedBy: string;
  workload: string;
  __v?: number;
  _id: string | undefined;
}
