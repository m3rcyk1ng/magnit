export interface IVacancies {
  vacancies: IVacancyCard[];
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
  responsibilities?: string[];
  fullEducation?: string;
  __v?: number;
  _id: string | undefined;
}
