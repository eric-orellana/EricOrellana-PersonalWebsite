import profileImage from '../../images/EricOrellana-Pic.webp';
import budgetingBitesImage from '../../images/budgetingbitespic.jpg';
import hummingBotImage from '../../images/hummingBot.jpg';
import websiteImage from '../../images/websnap.jpg';
import githubIcon from '../../images/icons/github.svg';
import linkedInIcon from '../../images/icons/linkedin.svg';
import buyMeCoffeeIcon from '../../images/bmc-logo.png';

export const profile = {
  name: 'Eric Orellana',
  imageSrc: profileImage,
  imageAlt: 'Profile picture of Eric Orellana',
  // Edit these paragraphs to update the intro text under your profile.
  bioParagraphs: [
    'Hi! My name is Eric Orellana. Thank you for checking out my website - welcome!',
    'I have always been described as curious. This website is where I investigate and share my creations. I enjoy learning new topics, building things, and overcoming challenges.',
    'Check out my projects below. Feel free to email me at ericorellana42@gmail.com.'
  ]
};

// Add new links here to update both the header and footer social icon rows.
export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/eric-orellana',
    icon: githubIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/orellanaeric/',
    icon: linkedInIcon
  },
  {
    name: 'Buy Me a Coffee',
    url: 'https://buymeacoffee.com/ericorellana42',
    icon: buyMeCoffeeIcon
  }
];

// Copy one object to add a new reusable project card.
// You can add links for live demos, source code, or deeper writeups.
export const projects = [
    {
    id: 'hummingBot',
    title: 'HummingBot',
    imageSrc: hummingBotImage,
    imageAlt: 'hummingBot instance screenshot',
    imageLink: 'https://hummingbot.org/',
    descriptionParagraphs: [
      'I have been working with HummingBot, which is an open source project that allows users to automate crypto trades using python scripts. This project has taught me about advanced Python development and utilizing Docker to manage a controlled environment. I use Docker Compose to instantiate multiple bots concurrently.'
    ],
    links: [
      {
        label: 'Visit hummingbot.org to learn more about the project',
        url: 'https://hummingbot.org/'
      }
    ]
  },
  {
    id: 'budgeting-bites',
    title: 'Budgeting Bites',
    imageSrc: budgetingBitesImage,
    imageAlt: 'Budgeting Bites website screenshot',
    imageLink: 'https://budgetingbitesforyou.com',
    descriptionParagraphs: [
      'Budgeting Bites is a web app that uses AI to capture meal details and estimate nutritional values.',
      'I built it to reduce friction when tracking calories and to practice advanced frontend development and API integration.',
      'You can save items for later and revisit stored entries when you return to the app.'
    ],
    links: [
      {
        label: 'Visit budgetingbitesforyou.com',
        url: 'https://budgetingbitesforyou.com'
      }
    ]
  },
  {
    id: 'personal-website',
    title: 'This Website',
    imageSrc: websiteImage,
    imageAlt: 'Screenshot of Eric Orellana personal website',
    imageLink: 'https://github.com/eric-orellana/EricOrellana-PersonalWebsite',
    descriptionParagraphs: [
      'This site started as a fork of LittleLink and has evolved through many custom edits.',
      'It is connected to Netlify, so pushing changes to GitHub automatically publishes updates.',
      'Working on this project has been a practical way to improve frontend skills and debugging workflows.'
    ],
    links: [
      {
        label: 'View source on GitHub',
        url: 'https://github.com/eric-orellana/EricOrellana-PersonalWebsite'
      }
    ]
  }
];

// Use this section for ideas, notes, and projects that are still evolving.
// You can delete these samples and replace them with your own in-progress work.
export const miscItems = [
  {
    id: 'project-writeups',
    title: 'Long-Form Project Writeups',
    status: 'Planning',
    description:
      'Drafting deeper breakdown pages for each project with architecture, tradeoffs, and lessons learned.'
  },
  {
    id: 'new-tools',
    title: 'Tooling Experiments',
    status: 'In Progress',
    description:
      'Testing additional UI patterns and project templates to speed up future builds while keeping design quality high.'
  },
  {
    id: 'content-pipeline',
    title: 'Content Workflow',
    status: 'Idea',
    description:
      'Exploring a simpler process for publishing quick thoughts and small updates directly to this site.'
  }
];
