import profileImage from '../../images/EricOrellana-Pic.webp';
import budgetingBitesImage from '../../images/budgetingbitespic.webp';
import hummingBotImage from '../../images/hummingBot.webp';
import websiteImage from '../../images/websnap.webp';
import githubIcon from '../../images/icons/github.svg';
import linkedInIcon from '../../images/icons/linkedin.svg';
import buyMeCoffeeIcon from '../../images/bmc-logo.png';
import legupscholarImage from '../../images/LegUpScholars_Pic.webp';

export const profile = {
  name: 'Eric Orellana',
  imageSrc: profileImage,
  imageAlt: 'Profile picture of Eric Orellana',
  bioParagraphs: [
    'Hi! My name is Eric Orellana. Welcome and thank you for checking out my website!',
    'I have always been described as curious. This website is where I investigate and share my creations and activities. I enjoy learning new topics, building things, solving problems with others, and overcoming challenges.',
    'Take a look at what I’m up to below, and feel free to email me at ericorellana42@gmail.com'
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

export const projects = [
    {
    id: 'hummingBot',
    title: 'HummingBot',
    imageSrc: hummingBotImage,
    imageAlt: 'hummingBot instance screenshot',
    imageLink: 'https://hummingbot.org/',
    descriptionParagraphs: [
      'I have been working with Hummingbot, an open-source framework for automating crypto trading with Python. Using it as a foundation, I have built custom bots and modified my own environment to support different strategies and experiments. This project has helped me deepen my Python skills while also giving me hands-on experience with Docker and Docker Compose for managing isolated, repeatable runtime environments. Running multiple bots concurrently has also taught me more about orchestration, configuration management, and designing systems that are easier to scale and maintain.'
    ],
    links: [
      {
        label: 'Visit hummingbot.org to read about the project',
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
      'Budgeting Bites is a web app that uses AI to capture meal details and estimate nutritional values (calories, fats, protein, etc). I built it to reduce friction when tracking calories and to practice advanced frontend development and API integration. You can save items for later and revisit stored entries when you return to the app.', 
      'I plan on expanding this out further to allow users to sign up and store their meals online. I use Budgeting Bites for my own tracking, and I\'m actively building it into the kind of tool I wish already existed.'
    ],
    links: [
      {
        label: 'Visit budgetingbitesforyou.com',
        url: 'https://budgetingbitesforyou.com'
      }
    ]
  },
    {
    id: 'Leg-Up',
    title: 'Leg Up Scholars Mentor',
    imageSrc: legupscholarImage,
    imageAlt: 'Leg Up Scholars website screenshot',
    imageLink: 'https://tpi.org/leg-up-scholarship-program/',
    descriptionParagraphs: [
      'I have been a mentor with the Leg Up Scholars program since 2022. I value the opportunity to get to know the students in the program and support them as they work toward their goals. Many come from low-income backgrounds, as I did, and bring a great deal of talent and potential. The program helps ease the financial burden of undergraduate education by supporting expenses beyond tuition.',
      'As a mentor, I provide guidance, encouragement, and reassurance as students navigate college. Many of them are first-generation college students, and I hope to help make that path feel more manageable.'
    ],
    links: [
      {
        label: 'Learn more about the Scholars Program here',
        url: 'https://tpi.org/leg-up-scholarship-program/'
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
      'This site started as a fork of LittleLink and has evolved through many custom edits. It’s deployed on Netlify with continuous deployment, so pushes to GitHub automatically publish updates. Working on it has been a practical way to sharpen my frontend skills and improve my debugging workflow.'
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
    id: 'Soccer-Warrior',
    title: 'Soccer Warrior',
    description:
      'I am in the process of making a video game! It\'s an idea I had for a while but only recently got started on it. It is a wave based survival game where to fight off enemies with your soccer ball. I am using Unity to build it out. Currently, I am deliberating on the art style. More to come soon!'
  },
  {
    id: 'Spotify-Data',
    title: 'Lifetime Spotify Data Review',
    description:
      'I’ve used Spotify since 2015, and I recently requested my full Spotify data export. I’m exploring the dataset and writing small Python scripts to parse it for interesting insights about my listening habits. There’s a lot more I want to analyze, and I’m treating it as a lightweight data project.'
  }
];
