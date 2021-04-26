import { BusinessTheme } from '@enlear/react-material-themes.themes.business-theme';
import { CasualTheme } from '@enlear/react-material-themes.themes.casual-theme';
import React from 'react';
import { Dashboard } from './dashboard';

const profiles = [{
  name: "Cheryl Chavez",
  title: "Software Developer",
  workSummary: "Developer with experiance on developing, testing and implementing new software programs."
},
{
  name: "Dexter Schneider",
  title: "Accountant",
  workSummary: "Experiance in preparing accounts and tax returns. administering payrolls and controlling income and expenditure. auditing financial information. compiling and presenting reports, budgets, business plans, commentaries and financial statements. analysing accounts and business plans."
},
{
  name: "Carla Edwards",
  title: "Software Tester",
  workSummary: "Experience in conducting automated and manual tests to ensure the software created by developers is fit for purpose and any bugs or issues are removed within a product before it gets deployed to everyday users."
},
{
  name: "Alfredo Johnson",
  title: "Plumber",
  workSummary: "Experiance in Installing, repairing, and maintaining pipes, valves, fittings, drainage systems, and fixtures in commercial and residential structures. Collaborate with general contractors, electricians, and other construction professionals."
}
];

export const BusinessDashboard = () => (
  <BusinessTheme>
    <Dashboard profiles={profiles}></Dashboard>
  </BusinessTheme>
);

export const CasualDashboard = () => (
  <CasualTheme>
    <Dashboard profiles={profiles}></Dashboard>
  </CasualTheme>
);