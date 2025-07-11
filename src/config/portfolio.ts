
export const portfolioConfig = {
  personal: {
    name: "{{NAME}}",
    tagline: "{{TAGLINE}}",
    bio: "{{BIO}}",
    email: "{{EMAIL}}",
    profileImage: "/placeholder.svg",
    social: {
      github: "{{GITHUB_URL}}",
      linkedin: "{{LINKEDIN_URL}}",
      twitter: "{{TWITTER_URL}}",
      website: "{{WEBSITE_URL}}"
    }
  },
  
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "Python", proficiency: 80 },
        { name: "Java", proficiency: 75 }
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", proficiency: 90 },
        { name: "Next.js", proficiency: 85 },
        { name: "Node.js", proficiency: 80 },
        { name: "Express", proficiency: 75 }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { name: "PostgreSQL", proficiency: 80 },
        { name: "MongoDB", proficiency: 75 },
        { name: "AWS", proficiency: 70 },
        { name: "Docker", proficiency: 75 }
      ]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", proficiency: 70 },
        { name: "PyTorch", proficiency: 65 },
        { name: "OpenAI API", proficiency: 80 },
        { name: "Hugging Face", proficiency: 75 }
      ]
    },
    {
      category: "Automation & Tools",
      skills: [
        { name: "Git", proficiency: 90 },
        { name: "CI/CD", proficiency: 80 },
        { name: "Webpack", proficiency: 75 },
        { name: "Terraform", proficiency: 70 }
      ]
    },
    {
      category: "Data Science",
      skills: [
        { name: "Pandas", proficiency: 80 },
        { name: "NumPy", proficiency: 85 },
        { name: "Matplotlib", proficiency: 75 },
        { name: "Jupyter", proficiency: 80 }
      ]
    }
  ],
  
  projects: [
    {
      title: "{{PROJECT_TITLE_1}}",
      description: "{{PROJECT_DESCRIPTION_1}}",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      liveUrl: "{{PROJECT_LIVE_URL_1}}",
      githubUrl: "{{PROJECT_GITHUB_URL_1}}",
      image: "/placeholder.svg"
    },
    {
      title: "{{PROJECT_TITLE_2}}",
      description: "{{PROJECT_DESCRIPTION_2}}",
      technologies: ["Python", "Django", "React", "AWS"],
      liveUrl: "{{PROJECT_LIVE_URL_2}}",
      githubUrl: "{{PROJECT_GITHUB_URL_2}}",
      image: "/placeholder.svg"
    },
    {
      title: "{{PROJECT_TITLE_3}}",
      description: "{{PROJECT_DESCRIPTION_3}}",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "{{PROJECT_LIVE_URL_3}}",
      githubUrl: "{{PROJECT_GITHUB_URL_3}}",
      image: "/placeholder.svg"
    }
  ]
};

export type PortfolioConfig = typeof portfolioConfig;
