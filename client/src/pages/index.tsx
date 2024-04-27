import { GithubIcon, Logo } from "@/components/icons";
import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Code, Link, Snippet, button as buttonStyles } from "@nextui-org/react";
import { motion } from "framer-motion";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg justify-center text-center">
          <h1 className={title()}>beat the </h1>
          <h1 className={title({ color: "green" })}>odds together</h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Logo className="gap-4" size={300} />
        </motion.div>
        <div className="flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            Free trial
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            Login
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="bordered">
            <span>
              Get started with <Code color="success">100 free tokens</Code>
            </span>
          </Snippet>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default IndexPage;
