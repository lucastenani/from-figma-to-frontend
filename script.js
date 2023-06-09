const challengesData = [
  {
    link: "cookbook",
    thumbnail: "cookbook.webp",
    title: "Cookbook",
    description:
      "In this challenge, you will recreate a cake recipe page based on the provided Figma design.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "social-tree",
    thumbnail: "social-tree.webp",
    title: "Social Tree",
    description:
      "In this challenge you must create a page with a list of links (menu) that can be used in social network profiles to direct the user to the chosen location.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "portfolio",
    thumbnail: "portfolio.webp",
    title: "Portfolio",
    description:
      "In this challenge you will be able to create a web page to be your portfolio and resume.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "rocketnews",
    thumbnail: "rocketnews.webp",
    title: "RocketNews",
    description:
      "Develop a simple web page that will serve in the future for lead capture or newsletter subscription.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "login-form-css",
    thumbnail: "login-form-css.webp",
    title: "Login Form CSS",
    description: "In this challenge you will create a login form.",
    difficulty: "Intermediate",
    tags: ["HTML", "CSS"],
  },
  {
    link: "rocket-shoes",
    thumbnail: "rocket-shoes.webp",
    title: "RocketShoes",
    description:
      "In this challenge you must develop a mini e-commerce for sports shoes.",
    difficulty: "Intermediate",
    tags: ["HTML", "CSS"],
  },
  {
    link: "sidebar",
    thumbnail: "sidebar.webp",
    title: "Sidebar",
    description: `Create a sidebar that toggles between "open" and "closed" states when the user clicks on the menu icon.`,
    difficulty: "Intermediate",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "theme-switcher",
    thumbnail: "theme-switcher.webp",
    title: "Theme Switcher",
    description: `A page that contains a toggle to switch between dark and light theme.`,
    difficulty: "Intermediate",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    link: "nfts",
    thumbnail: "NFTs.webp",
    title: "Rocket NFTs",
    description: `In this challenge you must build a complete landing page about NFTs.`,
    difficulty: "Advanced",
    tags: ["HTML", "CSS"],
  },
];

const container = document.getElementById("challenges-container");
const filterSelect = document.getElementById("filter-select");

function createChallengeLink(difficulty, link) {
  if (difficulty === "Beginner") {
    return `challenges/beginner/${link}/index.html`;
  } else if (difficulty === "Intermediate") {
    return `challenges/intermediate/${link}/index.html`;
  } else if (difficulty === "Advanced") {
    return `challenges/advanced/${link}/index.html`;
  }
}

function createDifficultyImage(difficulty) {
  const img = document.createElement("img");
  img.alt = "dumbbell weight";

  if (difficulty === "Beginner") {
    img.src = "assets/images/dumbbell-weight-beginner.svg";
  } else if (difficulty === "Intermediate") {
    img.src = "assets/images/dumbbell-weight-intermediate.svg";
  } else if (difficulty === "Advanced") {
    img.src = "assets/images/dumbbell-weight-advanced.svg";
  }
  return img;
}

function createChallengeElement(challenge) {
  const article = document.createElement("article");
  article.className = "challenge";

  const link = document.createElement("a");
  link.href = createChallengeLink(challenge.difficulty, challenge.link);

  const img = document.createElement("img");
  img.src = `assets/images/${challenge.thumbnail}`;
  img.className = "challenge-thumbnail";
  img.alt = `${challenge.title} image`;

  link.appendChild(img);
  article.appendChild(link);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "challenge-description";

  const titleLink = document.createElement("a");
  titleLink.href = createChallengeLink(challenge.difficulty, challenge.link);

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = `"${challenge.title}" Challenge`;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = challenge.description;

  titleLink.appendChild(titleHeading);
  descriptionDiv.appendChild(titleLink);
  descriptionDiv.appendChild(descriptionParagraph);

  const ul = document.createElement("ul");

  const difficultyLi = document.createElement("li");
  difficultyLi.className = "difficulty";

  const difficultyImg = createDifficultyImage(challenge.difficulty);

  const difficultySpan = document.createElement("span");
  difficultySpan.textContent = challenge.difficulty;

  difficultyLi.appendChild(difficultyImg);
  difficultyLi.appendChild(difficultySpan);

  ul.appendChild(difficultyLi);

  challenge.tags.forEach(function (tag) {
    const tagLi = document.createElement("li");
    tagLi.textContent = tag;
    ul.appendChild(tagLi);
  });

  descriptionDiv.appendChild(ul);
  article.appendChild(descriptionDiv);

  return article;
}

function renderChallenges() {
  container.innerHTML = "";

  const selectedDifficulty = filterSelect.value;

  const filteredChallenges = challengesData
    .filter((challenge) => {
      if (selectedDifficulty === "All") {
        return true;
      } else {
        return challenge.difficulty === selectedDifficulty;
      }
    })
    .reverse();

  filteredChallenges.forEach(function (challenge) {
    const challengeElement = createChallengeElement(challenge);
    container.appendChild(challengeElement);
  });
}

filterSelect.addEventListener("change", renderChallenges);

renderChallenges();
