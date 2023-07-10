import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="SAAS Diet App"
        description="SAAS Diet is a powerful app that tracks cloud storage spendings and suggests cost-effective alternatives, empowering users to save money and optimize resource allocation."
        link="https://saas-diet.vercel.app/Compare"
        img={{
          src: '/assets/project/saas-diet.png',
          alt: 'SAAS Diet Project',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.LIME}>Redux</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Shopping Cart Project"
        description="A Vanilla Javascript Shopping Cart Project where users can view products, add them to cart, and checkout. The main priority of the project was data structure and DOM manipulation."
        link="https://shopping-cart-js-project.vercel.app/"
        img={{
          src: '/assets/project/cart-check.svg',
          alt: 'Shopping Cart Project',
        }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>HTML</Tags>
            <Tags color={ColorTags.EMERALD}>BootStrap</Tags>
            <Tags color={ColorTags.LIME}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Rick and Morty Project"
        description="Rick & morty Characters website where you can search, filter and view characters from the show."
        link="https://rick-morty-wiki-project.vercel.app/"
        img={{
          src: '/assets/project/rick-svgrepo-com.svg',
          alt: 'Rick and Morty Project',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>CSS</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
