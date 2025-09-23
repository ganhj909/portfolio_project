export interface Education {
    id: string;
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    gpa?: string;
    description?: string;
  }
  
  export const education: Education[] = [
    {
      id: "northeastern",
      degree: "Bachelor's in Computer Science",
      institution: "The University of Malaya",
      location: "Kuala Lumpur, Malaysia",
      startDate: "April 2015",
      endDate: "March 2019"
    }
  ];