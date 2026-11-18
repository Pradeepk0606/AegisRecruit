export type CertKind = "image" | "pdf" | "record";

export type CertificateItem = {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  category: "Certificate" | "Forage" | "Prepinsta" | "Workshop";
  href?: string;
  kind: CertKind;
};

export const certificateItems: CertificateItem[] = [
  {"id": "ibm-design-thinking", "title": "Enterprise Design Thinking Practitioner", "issuer": "IBM", "category": "Certificate", "href": "/projects/Enterprise_Design_Thinking_Practitioner_Badge.jpg", "kind": "image"},
  {"id": "nptel-cloud", "title": "Cloud Computing", "issuer": "NPTEL", "category": "Certificate", "kind": "record"},
  {"id": "guvi-mern", "title": "MERN Stack Development", "issuer": "GUVI Geek Networks", "category": "Certificate", "href": "/projects/GuviCertification - MERN Stack.png", "kind": "image"},
  {"id": "prepin-python", "title": "Python Programming", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/Python.jpg", "kind": "image"},
  {"id": "prepin-java", "title": "Java Programming", "issuer": "PrepInsta", "category": "Prepinsta", "kind": "record"},
  {"id": "sns-prompt-ai", "title": "Prompt to Product AI Workshop", "issuer": "SNS Groups", "category": "Workshop", "kind": "record"},
  {"id": "great-learning-uiux", "title": "UI/UX for Beginners", "issuer": "Great Learning", "category": "Certificate", "href": "/projects/UiUx certificate.jpg", "kind": "image"},
  {"id": "forage-accenture-data", "title": "Data Analytics and Visualization Job Simulation", "issuer": "Accenture · Forage", "category": "Forage", "href": "/projects/Forage/Data Analytics and Visualization job.jpg", "kind": "image"},
  {"id": "forage-jpmorgan-se", "title": "Software Engineering Job Simulation", "issuer": "JPMorgan Chase & Co. · Forage", "category": "Forage", "href": "/projects/Forage/Software Engineering job Simulation.jpg", "kind": "image"},
  {"id": "forage-accenture-devtech", "title": "Developer and Technology Job Simulation", "issuer": "Accenture · Forage", "category": "Forage", "href": "/projects/Forage/Developer and Technology job Simulation.jpg", "kind": "image"},
  {"id": "forage-cognizant-agile", "title": "Agile Methodology Job Simulation", "issuer": "Cognizant · Forage", "category": "Forage", "href": "/projects/Forage/Agile Methodology.jpg", "kind": "image"},
  {"id": "forage-walmart-advanced", "title": "Advanced Software Engineering Job Simulation", "issuer": "Walmart Global Tech · Forage", "category": "Forage", "href": "/projects/Forage/Advanced Software Engineering Job Simulation.jpg", "kind": "image"},
  {"id": "prepinsta-git", "title": "Git Course", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/Git.jpg", "kind": "image"},
  {"id": "prepinsta-react", "title": "React Course", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/certificate_React_625743.png", "kind": "image"},
  {"id": "prepinsta-dsa-c", "title": "Data Structures and Algorithms in C", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/DSA in C.jpg", "kind": "image"},
  {"id": "prepinsta-statistics", "title": "Statistics Course", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/Statistics.jpg", "kind": "image"},
  {"id": "prepinsta-css", "title": "CSS Course", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/CSS.jpg", "kind": "image"},
  {"id": "prepinsta-basic-coding", "title": "Basic Coding Courses", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/Basic Coding Courses.jpg", "kind": "image"},
  {"id": "prepinsta-html", "title": "HTML Course", "issuer": "PrepInsta", "category": "Prepinsta", "href": "/projects/Prepinsta/Html.jpg", "kind": "image"},
];
