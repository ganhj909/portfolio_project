export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
  }
  
  export const socialLinks: SocialLink[] = [
    {
      id: "github",
      name: "GitHub",
      url: "https://github.com/ganhj909",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jian-hong-gan-64bba5192",
      icon: "linkedin"
    },
    {
      id: "email",
      name: "Email",
      url: "mailto:codecraft058@gmail.com",
      icon: "mail"
    },
    {
      id: "whatsapp",
      name: "Whatsapp",
      url: "https://wa.me/17637428520",
      icon: "whatsapp"
    }
  ];