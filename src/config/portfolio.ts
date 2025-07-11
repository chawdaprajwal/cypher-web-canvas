
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
