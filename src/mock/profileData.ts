export const profileData: {
  videoInstruction: {
    title: string;
    icon: string;
  };
  hoursPerWeek: {
    title: string;
    icon: string;
    content: {
      hours: string;
      preference: string;
    };
  };
  languages: {
    title: string;
    addIcon: string;
    editIcon: string;
    content: [string, string][];
  };
  verifications: {
    title: string;
    content: string;
  };
  education: {
    title: string;
    addIcon: string;
    content: {
      university: string;
      details: string;
      date: string;
    };
  };
} = {
  videoInstruction: {
    title: "Video instruction",
    icon: "AddIcon",
  },
  hoursPerWeek: {
    title: "Hours per week",
    icon: "EditIcon",
    content: {
      hours: "More than 30 hrs/week",
      preference: "No contract-to-hire preference set",
    },
  },
  languages: {
    title: "Languages",
    addIcon: "AddIcon",
    editIcon: "EditIcon",
    content: [
      ["English", ": Fluent"],
      ["Arabic", ": Native or Bilingual"],
    ],
  },
  verifications: {
    title: "Verifications",
    content: "Military Veteran",
  },
  education: {
    title: "Education",
    addIcon: "AddIcon",
    content: {
      university: "AL-AZHAR UNIVERSITY-Gaza",
      details: "Bachelors degree, software engineering",
      date: "2021-2026(expected)",
    },
  },
};
