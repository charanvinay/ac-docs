"use client";
import CustomLink from "@/app/lib/CustomLink";
import { NodeSchema } from "@/app/lib/ViewBuilder";
import AGENTPRODPM2 from "@/public/assets/agent-prod-pm2.jpg";
import AGENTDEVPIPELINE from "@/public/assets/agent-dev-pipeline.png";
import GIT from "@/public/assets/github.svg";
import { Code } from "@heroui/react";
import ROCKET from "@/public/assets/rocket.png";

import { Constants } from "../../constants";
import Image from "next/image";
const project = Constants.PROJECTS.find(
  (project) => project.route === "/agent"
);
export const DeploymentAgentProd: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "ApexCura Agent",
    },
    {
      type: "div",
      className: "flex gap-2",
      children: [
        {
          type: "button",
          text: "Production",
          color: "default",
          size: "sm",
          startContent: (
            <Image src={ROCKET.src} alt="Production" width={16} height={16} />
          ),
          className: "bg-gray-200/40 text-gray-800",
        },
        {
          type: "button",
          text: "Github Repo",
          color: "default",
          size: "sm",
          startContent: (
            <Image src={GIT.src} alt="Github repo" width={16} height={16} />
          ),
          onPress: () => window.open(project?.git, "_blank"),
          className: "bg-gray-200/40 text-gray-800",
        },
      ],
    },
    {
      type: "p",
      text: (
        <>
          This document will guide you through building the{" "}
          <span className="font-semibold">ApexCura Agent</span> application
          manually and using CI/CD.
        </>
      ),
    },
    {
      type: "p",
      text: (
        <>
          Before starting, ensure MobaXterm is installed on your system. If not,
          visit{" "}
          <CustomLink
            href="https://apexcura-docs.vercel.app/third-party/mobaxterm"
            text="MobaXterm setup"
          />{" "}
          and follow the installation steps. Once done, proceed with this guide.
        </>
      ),
    },
    {
      type: "divider",
    },
    {
      type: "h3",
      id: "manual",
      text: "Manual Deployment",
    },
    {
      type: "p",
      text: "Mannual deployment is a straightforward process. Follow these steps:",
    },
    {
      type: "p",
      text: (
        <>
          Connect to <Code>production</Code> server and navigate to{" "}
          <Code>/home/ubuntu/apex/UI/PRODUCT_ADMIN/</Code>
        </>
      ),
    },
    {
      type: "ol",
      children: Constants.DEPLOYMENT_AGENT_PROD.manual.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
    {
      type: "p",
      text: "If everything is good, then you can find like this",
    },
    {
      type: "image",
      src: AGENTPRODPM2?.src,
      alt: `Agent prod Pm2 Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "alert",
      color: "success",
      text: "That's it! You have successfully deployed the agent application.",
    },
    {
      type: "divider",
      variant: "dotted"
    },
    {
      type: "h3",
      id: "cicd",
      text: "CI/CD Deployment",
    },
    {
      type: "p",
      text: "This is a very simple process.",
    },
    {
      type: "ol",
      children: Constants.DEPLOYMENT_AGENT_PROD.CICD.map((matter: any) => ({
        type: matter?.type || "li",
        isApplyMotion: true,
        text: (
          <>
            {matter?.heading && (
              <>
                <span className="font-semibold">{matter.heading}</span>:{" "}
              </>
            )}
            {matter?.description}
          </>
        ),
        code: matter?.code,
        className: matter?.className,
      })),
    },
    {
      type: "p",
      text: "If everything is good, then you can find like this",
    },
    {
      type: "image",
      src: AGENTDEVPIPELINE?.src,
      alt: `Agent dev pipeline Image`,
      className: "h-auto",
      isBlurred: false,
      isApplyMotion: true,
    },
    {
      type: "alert",
      color: "success",
      text: "That's it! You have successfully deployed the agent application.",
    },
  ],
};
