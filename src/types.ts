export enum TableKeys {
  County = "County",
  Population = "Population",
  Circuit = "Judical Circuit",
  District = "Appellate District",
  PDFY23Budget = "PD FY 23 Budget",
  SAFY23Budget = "SA FY 23 Budget",
  AnnualCriminalFilings = "2022 Criminal Filings",
  AnnualJuvenileFilings = "2022 Juvenile Filings",
  DefenseAttorneys = "Defense Attorneys",
  Investigators = "Investigators",
  SupportStaff = "Support Staff",
  MentalHealthStaff = "Mental Health Staff",
}

export interface CountyData {
  [TableKeys.County]: string;
  [TableKeys.Circuit]: number | string;
  [TableKeys.District]: number | string;
  [TableKeys.Population]: string;
  [TableKeys.PDFY23Budget]: string;
  [TableKeys.SAFY23Budget]: string;
  [TableKeys.AnnualCriminalFilings]: string;
  [TableKeys.AnnualJuvenileFilings]: string;
  subTable: {
    [TableKeys.DefenseAttorneys]: number[];
    [TableKeys.Investigators]: number[];
    [TableKeys.SupportStaff]: number[];
    [TableKeys.MentalHealthStaff]: number[];
  }
};

export interface CircuitData {
  [TableKeys.Circuit]: number | string;
  [TableKeys.Population]: string;
  [TableKeys.PDFY23Budget]: string;
  [TableKeys.SAFY23Budget]: string;
  [TableKeys.AnnualCriminalFilings]: string;
  [TableKeys.AnnualJuvenileFilings]: string;
  subTable: {
    [TableKeys.DefenseAttorneys]: number[];
    [TableKeys.Investigators]: number[];
    [TableKeys.SupportStaff]: number[];
    [TableKeys.MentalHealthStaff]: number[];
  }
};

export interface DistrictData {
  [TableKeys.District]: number | string;
  [TableKeys.Population]: string;
  [TableKeys.PDFY23Budget]: string;
  [TableKeys.SAFY23Budget]: string;
  [TableKeys.AnnualCriminalFilings]: string;
  [TableKeys.AnnualJuvenileFilings]: string;
  subTable: {
    [TableKeys.DefenseAttorneys]: number[];
    [TableKeys.Investigators]: number[];
    [TableKeys.SupportStaff]: number[];
    [TableKeys.MentalHealthStaff]: number[];
  }
};
// ENV
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'test' | 'development' | 'production';
      PG_USER: string;
      PG_PASSWORD: string;
      PG_HOST: string;
      PG_PORT: string;
      PG_DATABASE: string;
      URL: string;
    }
  }
}

// METHODOLOGY

