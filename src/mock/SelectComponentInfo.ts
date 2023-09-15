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
        { label: 'Job Seekers', value: 1 },
        { label: 'Employers', value: 2 },
        { label: 'Manager', value: 3 },
        { label: 'Client', value: 4 },
      ],
    },
    {
      label: 'My Jobs',
      options: [
        { label: 'Job Seekers', value: 1 },
        { label: 'Employers', value: 2 },
        { label: 'Manager', value: 3 },
        { label: 'Client', value: 4 },
      ],
    },
    {
      label: 'Reports',
      options: [
        { label: 'Job Seekers', value: 1 },
        { label: 'Employers', value: 2 },
        { label: 'Manager', value: 3 },
        { label: 'Client', value: 4 },
      ],
    },
    {
      label: 'Jobs',
      options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    },
  ];
  