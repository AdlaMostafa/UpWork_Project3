export interface SelectOption {
    label: string;
    value: string | number; 
  }
  
  export interface SelectGroup {
    label: string;
    options: SelectOption[];
  }
  
  export const selectData: SelectGroup[] = [
    {
      label: 'Find Work',
      options: [
        { label: 'Find Work', value: 1 },
        { label: 'Saved Jobs', value: 2 },
        { label: 'Proposal', value: 3 },
        { label: 'Profile', value: 4 },
        { label: 'My State', value: 5 },
        { label: 'My Project Dashboard', value: 6 },
      ],
    },
    {
      label: 'My Jobs',
      options: [
        { label: 'My Jobs', value: 1 },
        { label: 'All Contracts', value: 2 },
        { label: 'Work Diary', value: 3 },
      ],
    },
    {
      label: 'Reports',
      options: [
        { label: 'OvervIEW', value: 1 },
        { label: 'mY Reports', value: 2 },
        { label: 'Billings & Earning', value: 3 },
        { label: 'Connects Hostory', value: 4 },
        { label: 'Transaction History', value: 5 },
        { label: 'Certificate of Earning', value: 6 },
      ]
    },
    {
      label: 'Jobs',
      options: [
        { value: 'option1', label: 'Jobs' },
        { value: 'option2', label: 'Talent' },
        { value: 'option3', label: 'Projects' },
      ],
    },
  ];
  