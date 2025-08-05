import { Container } from "@mui/material";

import {
  aboutProject,
  backFeatureBlocks,
  frontFeatureBlocks,
  intro,
  techStack,
  testBlock,
} from "../constants";
import {
  InfoSection,
  FeatureSection,
  AuthorSection,
  SectionContainer,
} from "../components";

export const AboutPage = () => {
  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <SectionContainer
        title={intro.title}
        children={<InfoSection content={intro.content} />}
      />
      <SectionContainer
        title={aboutProject.title}
        children={<InfoSection content={aboutProject.content} />}
      />
      <SectionContainer
        title={techStack.title}
        children={<InfoSection list={techStack.list} />}
      />
      <SectionContainer
        title={frontFeatureBlocks.title}
        children={<FeatureSection features={frontFeatureBlocks.features} />}
      />
      <SectionContainer
        title={backFeatureBlocks.title}
        children={<FeatureSection features={backFeatureBlocks.features} />}
      />
      <SectionContainer
        title={testBlock.title}
        children={<InfoSection content={testBlock.content} />}
      />
      <SectionContainer title="Author" children={<AuthorSection />} />
    </Container>
  );
};
