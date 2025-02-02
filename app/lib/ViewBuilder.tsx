"use client";
import { ElementExecutor } from "@apexcura/core";
import { Image, Snippet, User } from "@heroui/react";
import { Outfit } from "next/font/google";
import React, { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useScreenDimensions from "../(hooks)/useScreenDimensions";
import IconsList from "./IconsList";
import RevealWrapper from "./Motion";
import TabsComponent from "./TabsComponent";
const outfit = Outfit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-outfit",
});
interface BaseNode {
  type: string;
  className?: string;
  id?: string;
  isApplyMotion?: boolean;
}

interface TextNode extends BaseNode {
  type: "h1" | "h2" | "h3" | "h4" | "p" | "li";
  text: string | ReactNode;
}

interface SnippetNode extends BaseNode {
  text: string;
}
interface CodeNode extends BaseNode {
  code: ReactNode;
}

export interface TabNode {
  key: string;
  title: string;
  schema: NodeSchema;
}

interface TabsNode extends BaseNode {
  id: string;
  items: TabNode[];
}

interface ExecutorNode extends BaseNode {
  schema: any;
}

interface IconsListNode extends BaseNode {
  type: "icons";
}
interface UserNode extends BaseNode {
  type: "user";
  avatar?: string;
  url?: string;
  name: string;
  urlName?: string;
}

interface ImageNode extends BaseNode {
  type: "image";
  src: string;
  alt: string;
  isBlurred?: boolean;
  isZoomed?: boolean;
}

interface ContainerNode extends BaseNode {
  type: "div" | "ul";
  children: NodeSchema[];
}

interface ListNode extends BaseNode {
  type: "ul";
  children: ListItemNode[];
}

interface ListItemNode extends BaseNode {
  type: "li";
  text: string;
}

export type NodeSchema =
  | TextNode
  | CodeNode
  | TabsNode
  | SnippetNode
  | ExecutorNode
  | IconsListNode
  | ImageNode
  | ContainerNode
  | ListNode
  | UserNode
  | ListItemNode;

interface ViewBuilderProps {
  schema: NodeSchema;
}

const ViewBuilder: React.FC<ViewBuilderProps> = ({ schema }) => {
  const { type, className, id, isApplyMotion } = schema;
  const dimensions = useScreenDimensions();

  const renderChildren = () => {
    if ("children" in schema) {
      return schema.children.map((child, index) => (
        <ViewBuilder key={index} schema={child} />
      ));
    }
    return null;
  };

  const renderElement = (element: ReactNode) => {
    if (isApplyMotion !== false) {
      return <RevealWrapper>{element}</RevealWrapper>;
    }
    return element;
  };

  switch (type) {
    case "h1":
      return renderElement(
        <h1
          id={id}
          className={`text-4xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h1>
      );
    case "h2":
      return renderElement(
        <h2
          id={id}
          className={`text-3xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h2>
      );
    case "h3":
      return renderElement(
        <h3
          id={id}
          className={`text-2xl sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h3>
      );
    case "h4":
      return renderElement(
        <h4
          id={id}
          className={`text-lg sm:font-semibold font-bold ${outfit.className} ${className}`}
        >
          {(schema as TextNode).text}
        </h4>
      );
    case "p":
      return renderElement(
        <p id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </p>
      );
    case "li":
      return renderElement(
        <li id={id} className={`leading-8 ${className}`}>
          {(schema as TextNode).text}
        </li>
      );
    case "image":
      const imageNode = schema as ImageNode;
      return renderElement(
        <Image
          src={imageNode.src}
          alt={imageNode.alt}
          classNames={{ wrapper: "w-full !max-w-full" }}
          className={`h-[300px] w-full object-cover ${className}`}
          isZoomed={imageNode.isZoomed}
          isBlurred={imageNode.isBlurred}
        />
      );
    case "snippet":
      const snippetNode = schema as SnippetNode;
      return renderElement(
        <div className="w-full overflow-x-auto">
          <Snippet size={dimensions?.width < 639 ? "sm" : "md"}>
            {snippetNode?.text}
          </Snippet>
        </div>
      );
    case "code":
      const codeNode = schema as CodeNode;
      return renderElement(
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ borderRadius: "10px", padding: "15px" }}
        >
          {String(codeNode?.code)}
        </SyntaxHighlighter>
      );
    case "user":
      const userNode = schema as UserNode;
      return renderElement(
        <User
          className="border font-medium w-full p-4 justify-start"
          avatarProps={{
            src: userNode?.avatar,
            name: userNode?.name,
            color: "primary",
          }}
          description={
            <p className="text-xs font-medium text-primary">
              {userNode?.urlName || userNode?.url}
            </p>
          }
          name={userNode?.name}
        />
      );
    case "tabs":
      const tabsNode = schema as TabsNode;
      return renderElement(<TabsComponent items={tabsNode.items} />);
    case "element-executor":
      const executorNode = schema as ExecutorNode;
      console.log(executorNode.schema);
      return <ElementExecutor data={executorNode?.schema} />;
    case "icons":
      return renderElement(<IconsList />);
    case "div":
      return renderElement(
        <div id={id} className={className}>
          {renderChildren()}
        </div>
      );
    case "ul":
      return renderElement(
        <ul id={id} className={`list-disc ml-8 ${className}`}>
          {renderChildren()}
        </ul>
      );
    default:
      console.warn(`Unknown element type: ${type}`);
      return null;
  }
};

export default ViewBuilder;
