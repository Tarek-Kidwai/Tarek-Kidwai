import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Welcome</GradientText> 👋
        </>
      }
      description={
        <span className="text-lg md:text-xl">
          Tarek Kidwai is a skilled Melbourne-based{' '}
          <a className="text-cyan-400 hover:underline">Frontend Developer</a>{' '}
          specializing in{' '}
          <a className="text-cyan-400 hover:underline">
            React, Tailwind CSS, and JavaScript.
          </a>{' '}
          With a strong eye for design and attention to detail, he creates
          visually stunning and intuitive user interfaces. Committed to
          excellence, Tarek delivers exceptional web experiences that surpass
          expectations.
        </span>
      }
      avatar={
        <img
          className="h-[400px] w-full object-cover object-top"
          style={{
            borderRadius: '10px',
          }}
          src="/assets/images/profile-picture.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <div className="mb-3 flex w-full justify-center gap-4 md:justify-start">
          <a
            target="_blank"
            href="https://github.com/Tarek-Kidwai"
            className="w-[32px]"
          >
            <HeroSocial src="/assets/icons/github.svg" alt="GitHub icon" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/tarek-kidwai/"
            className="w-[32px]"
          >
            <HeroSocial src="/assets/icons/linkedin.svg" alt="LinkedIn icon" />
          </a>
          <a
            target="_blank"
            href="https://twitter.com/trekevan39"
            className="w-[32px]"
          >
            <HeroSocial src="/assets/icons/twitter.svg" alt="Twitter icon" />
          </a>
        </div>
      }
    />
  </Section>
);

export { Hero };
