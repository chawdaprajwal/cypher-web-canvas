
export const portfolioConfig = {
  personal: {
    name: "{{NAME}}",
    tagline: "{{TAGLINE}}",
    bio: "{{BIO}}",
    email: "{{EMAIL}}",
    profileImage: "{{PROFILE_PICTURE_URL}}",
    skillsList: "{{SKILLS_LIST}}",
    social: {
      github: "{{GITHUB}}",
      linkedin: "{{LINKEDIN}}",
      twitter: "{{TWITTER}}"
    }
  },
  
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "JavaScript", proficiency: 85 },
        { name: "Java", proficiency: 75 },
        { name: "C++", proficiency: 70 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React/Next.js", proficiency: 85 },
        { name: "FastAPI", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "Node.js", proficiency: 80 },
        { name: "Express.js", proficiency: 75 }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "MongoDB", proficiency: 85 },
        { name: "AWS Cloud", proficiency: 70 },
        { name: "Supabase", proficiency: 80 },
        { name: "Firebase", proficiency: 80 },
        { name: "MySQL", proficiency: 75 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "scikit-learn", proficiency: 85 },
        { name: "PyTorch", proficiency: 80 },
        { name: "Matplotlib API", proficiency: 80 },
        { name: "Gemini API", proficiency: 85 },
        { name: "Hugging Face", proficiency: 80 }
      ]
    },
    {
      category: "Automation & Tools",
      skills: [
        { name: "RMI", proficiency: 85 },
        { name: "GIS/GitHub", proficiency: 85 },
        { name: "Docker", proficiency: 70 },
        { name: "Workflow Automation", proficiency: 85 },
        { name: "API Integration", proficiency: 85 }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", proficiency: 85 },
        { name: "NumPy", proficiency: 85 },
        { name: "Data Analysis", proficiency: 85 },
        { name: "Statistical Modeling", proficiency: 75 },
        { name: "Data Visualization", proficiency: 80 }
      ]
    }
  ],
  
  projects: [
    {
      title: "{{PROJECT_TITLE}}",
      description: "{{PROJECT_DESCRIPTION}}",
      link: "{{PROJECT_LINK}}",
      image: "{{PROJECT_IMAGE_URL}}"
    },
    {
      title: "{{PROJECT_TITLE}}",
      description: "{{PROJECT_DESCRIPTION}}",
      link: "{{PROJECT_LINK}}",
      image: "{{PROJECT_IMAGE_URL}}"
    },
    {
      title: "{{PROJECT_TITLE}}",
      description: "{{PROJECT_DESCRIPTION}}",
      link: "{{PROJECT_LINK}}",
      image: "{{PROJECT_IMAGE_URL}}"
    }
  ]
};

export type PortfolioConfig = typeof portfolioConfig;
