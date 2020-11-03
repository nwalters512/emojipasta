import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Emojipasta, getAllEmojipasta } from "../data/emojipasta";
import { Button, ContentContainer, Heading, Stack, Text } from "../components";

interface EmojipastaPageProps extends Emojipasta {}

interface EmojipastaPathsParam {
  slug: string;
  [param: string]: any;
}

const EmojipastaPage: React.FC<EmojipastaPageProps> = ({ title, contents }) => {
  // We don't know if the browser supports the `navigator.share` API on the
  // server, so we'll assume they do not during SSR and show the button on
  // the client if needed.
  const [supportsShare, setSupportsShare] = React.useState(false);
  React.useEffect(() => {
    setSupportsShare(typeof navigator.share !== "undefined");
  }, []);

  const share = async () => {
    try {
      await navigator.share({
        title,
        text: contents,
        url: window.location.href,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ContentContainer>
      <Stack>
        <Heading level={1}>{title}</Heading>
        <Text>{contents}</Text>
        {supportsShare && (
          <Button type="button" onClick={share}>
            Share with...
          </Button>
        )}
      </Stack>
    </ContentContainer>
  );
};

export default EmojipastaPage;

export const getStaticProps: GetStaticProps<
  EmojipastaPageProps,
  EmojipastaPathsParam
> = async (context) => {
  const { slug } = context.params;
  const { dataBySlug } = await getAllEmojipasta();
  return {
    props: {
      ...dataBySlug[slug],
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await getAllEmojipasta();
  return {
    paths: data.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
};
