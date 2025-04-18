import { NodeSchema } from "@/app/lib/ViewBuilder";
import { ApexIconsDevelopers } from "./apex-icons/developers";
import { ApexIconsInstallation } from "./apex-icons/installation";
import { ApexIconsIntro } from "./apex-icons/intro";
import { ApexIconsList } from "./apex-icons/list";
import { DeploymentAgentDev } from "./deployment/agent-dev";
import { DeploymentDevelopers } from "./deployment/developers";
import { DeploymentIntro } from "./deployment/intro";
import { ThirdPartyBull } from "./third-party/bull";
import { ThirdPartyDevelopers } from "./third-party/developers";
import { ThirdPartyICDServer } from "./third-party/icdserver";
import { ThirdPartyIntro } from "./third-party/intro";
import { ThirdPartyMobaXterm } from "./third-party/mobaxterm";
import { UIComponentsButton } from "./ui-components/button";
import { UIComponentsContribute } from "./ui-components/contribute";
import { UIComponentsDevelopers } from "./ui-components/developers";
import { UIComponentsInputText } from "./ui-components/input-text";
import { UIComponentsInstallation } from "./ui-components/installation";
import { UIComponentsIntro } from "./ui-components/intro";
import { UIComponentsRadio } from "./ui-components/radio";
import { UIComponentsSingleSelect } from "./ui-components/single-select";
import { UIComponentsTabs } from "./ui-components/tabs";
import { ViewEngineDevelopers } from "./view-engine/developers";
import { ViewEngineInstallation } from "./view-engine/installation";
import { ViewEngineIntro } from "./view-engine/intro";
import { DeploymentAgentProd } from "./deployment/agent-prod";
import { UIComponentsGradientCardGroup } from "./ui-components/gradient-card-group";

export type PageName = "apex-icons" | "deployment" | "third-party" | "ui-components" | "view-engine";

export type NestedPages =
  | "apex-icons/installation"
  | "apex-icons/list"
  | "apex-icons/developers"
  | "deployment/developers"
  | "deployment/agent-dev"
  | "deployment/agent-prod"
  | "third-party/bullmq"
  | "third-party/developers"
  | "third-party/icd-server"
  | "third-party/mobaxterm"
  | "ui-components/installation"
  | "ui-components/contribute"
  | "ui-components/developers"
  | "ui-components/button"
  | "ui-components/gradient-card-group"
  | "ui-components/input-text"
  | "ui-components/radio"
  | "ui-components/single-select"
  | "ui-components/tabs"
  | "view-engine/installation"
  | "view-engine/developers"

export type AllPages = PageName | NestedPages;

type SchemaMap = {
  [key in AllPages]: NodeSchema;
};

type H3Text = { id?: string; text: string };

class Schema {
  private static schemas: SchemaMap = {
    "apex-icons": ApexIconsIntro,
    "apex-icons/installation": ApexIconsInstallation,
    "apex-icons/developers": ApexIconsDevelopers,
    "apex-icons/list": ApexIconsList,
    "deployment": DeploymentIntro,
    "deployment/developers": DeploymentDevelopers,
    "deployment/agent-dev": DeploymentAgentDev,
    "deployment/agent-prod": DeploymentAgentProd,
    "third-party": ThirdPartyIntro,
    "third-party/bullmq": ThirdPartyBull,
    "third-party/developers": ThirdPartyDevelopers,
    "third-party/icd-server": ThirdPartyICDServer,
    "third-party/mobaxterm": ThirdPartyMobaXterm,
    "ui-components": UIComponentsIntro,
    "ui-components/installation": UIComponentsInstallation,
    "ui-components/contribute": UIComponentsContribute,
    "ui-components/developers": UIComponentsDevelopers,
    "ui-components/button": UIComponentsButton,
    "ui-components/gradient-card-group": UIComponentsGradientCardGroup,
    "ui-components/input-text": UIComponentsInputText,
    "ui-components/radio": UIComponentsRadio,
    "ui-components/single-select": UIComponentsSingleSelect,
    "ui-components/tabs": UIComponentsTabs,
    "view-engine": ViewEngineIntro,
    "view-engine/installation": ViewEngineInstallation,
    "view-engine/developers": ViewEngineDevelopers
  };

  static get(pageName: AllPages): NodeSchema {
    const schema = this.schemas?.[pageName];
    if (!schema) {
      // throw new Error(`Schema for page "${pageName}" not found.`);
      return {
        type: "div",
        children: [],
      } as NodeSchema; // Return a default empty schema for non-existent pages.
    }
    return schema;
  }
  static getH3Texts(schema: NodeSchema): H3Text[] {
    const h3Texts: H3Text[] = [];

    const traverse = (node: NodeSchema) => {
      if (["h3"].includes(node.type) && "text" in node) {
        h3Texts.push({
          id: node.id || "",
          text: node.text as string,
        });
      }

      if ("children" in node && node.children) {
        node.children.forEach((child) => traverse(child));
      }
    };

    traverse(schema);
    return h3Texts;
  }
}

export default Schema;
