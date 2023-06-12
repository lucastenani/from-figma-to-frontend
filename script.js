const challengesData = [
  {
    link: "challenges/beginner/cookbook/",
    thumbnail: "assets/images/cookbook.webp",
    title: '"Cookbook" Challenge',
    description:
      "In this challenge, you will recreate a cake recipe page based on the provided Figma design.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "challenges/beginner/social-tree/",
    thumbnail: "assets/images/social-tree.webp",
    title: '"Social Tree" Challenge',
    description:
      "In this challenge you must create a page with a list of links (menu) that can be used in social network profiles to direct the user to the chosen location.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "challenges/beginner/portfolio/",
    thumbnail: "assets/images/portfolio.webp",
    title: '"Portfolio" Challenge',
    description:
      "In this challenge you will be able to create a web page to be your portfolio and resume.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "challenges/beginner/rocketnews/",
    thumbnail: "assets/images/rocketnews.webp",
    title: '"RocketNews" Challenge',
    description:
      "Develop a simple web page that will serve in the future for lead capture or newsletter subscription.",
    difficulty: "Beginner",
    tags: ["HTML", "CSS"],
  },
  {
    link: "challenges/beginner/login-form-css/",
    thumbnail: "assets/images/login-form-css.webp",
    title: '"Login Form CSS" Challenge',
    description: "In this challenge you will create a login form.",
    difficulty: "Intermediate",
    tags: ["HTML", "CSS"],
  },
];

const container = document.getElementById("challenges-container");

challengesData.forEach(function (challenge) {
  const article = document.createElement("article");
  article.className = "challenge";

  const link = document.createElement("a");
  link.href = challenge.link;

  const img = document.createElement("img");
  img.src = challenge.thumbnail;
  img.className = "challenge-thumbnail";
  img.alt = `${challenge.title} image`;

  link.appendChild(img);
  article.appendChild(link);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "challenge-description";

  const titleLink = document.createElement("a");
  titleLink.href = challenge.link;

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = challenge.title;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = challenge.description;

  titleLink.appendChild(titleHeading);
  descriptionDiv.appendChild(titleLink);
  descriptionDiv.appendChild(descriptionParagraph);

  const ul = document.createElement("ul");

  const difficultyLi = document.createElement("li");
  difficultyLi.className = "difficulty";

  const difficultyImg = document.createElement("img");
  difficultyImg.src = "assets/images/dumbbell-weight-beginner.svg";
  difficultyImg.alt = "dumbbell weight";

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

  container.appendChild(article);
});
