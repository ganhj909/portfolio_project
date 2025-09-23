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
      url: "https://github.com/ganhj99",
      icon: "github"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gan-hong-jian-133262385/",
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
    },
    {
      id: "telegram",
      name: "Telegram",
      url: "https://t.me/ganhj_works",
      icon: "telegram"
    }
  ];