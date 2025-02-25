import { NodeSchema } from "@/app/lib/ViewBuilder";
import { Code } from "@heroui/react";
import Link from "next/link";

export const UIComponentsButton: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "h2",
      text: "Button",
    },
    {
      type: "p",
      text: "Buttons allow users to perform actions and choose with a single tap.",
    },
    {
      id: "variants",
      type: "h3",
      text: "Variants",
    },
    {
      id: "tabs-variants",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Solid",
                      element: "button",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      label: "Light",
                      element: "button",
                      variant: "light",
                    },
                    {
                      name: "btn-outlined",
                      label: "Outlined",
                      element: "button",
                      variant: "outlined",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                code: `// Solid button
{
  name: "btn-solid",
  label: "Solid",
  element: "button",
  variant: "solid",
},
// Light Button
{
  name: "btn-light",
  label: "Light",
  element: "button",
  variant: "light",
},
// Outlined Button
{
  name: "btn-outlined",
  label: "Outlined",
  element: "button",
  variant: "outlined",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "with-icons",
      type: "h3",
      text: "With Icons",
    },
    {
      id: "tabs-with_icons",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      label: "Add New",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      label: "Go Back",
                      element: "button",
                      variant: "light",
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      label: "Download",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[18px]",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                code: `{
  name: "btn-solid",
  label: "Add New",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  label: "Go Back",
  element: "button",
  variant: "light",
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  label: "Download",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[18px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icon-only",
      type: "h3",
      text: "Icon Only",
    },
    {
      id: "tabs-icon_only",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                    },
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[14px]",
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                code: `// No need to pass label
{
  name: "btn-solid",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
},
{
  name: "btn-light",
  element: "button",
  variant: "light",
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[14px]",
}`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "icon-only-with-tooltip",
      type: "h3",
      text: "Icon Only (Tooltip)",
    },
    {
      id: "tabs-icon_only_with_tooltip",
      type: "tabs",
      items: [
        {
          key: "preview",
          title: "Preview",
          schema: {
            type: "div",
            children: [
              {
                type: "element-executor",
                schema: {
                  className: "flex gap-2 p-4 rounded-md border-[1.5px]",
                  schema: [
                    {
                      name: "btn-solid",
                      element: "button",
                      iconsClassName: "aci-add aci-dynamic-size size-[14px]",
                      variant: "solid",
                      tooltip: {
                        title: "Add New",
                        placement: "bottom",
                      },
                    },
                    {
                      name: "btn-light",
                      element: "button",
                      variant: "light",
                      tooltip: {
                        title: "Go back",
                        placement: "top",
                      },
                      iconsClassName:
                        "aci-left-arrow aci-dynamic-size size-[14px]",
                    },
                    {
                      name: "btn-outlined",
                      element: "button",
                      variant: "outlined",
                      iconsClassName:
                        "aci-download aci-dynamic-size size-[14px]",
                      tooltip: {
                        title: "Download",
                        placement: "bottom",
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
        {
          key: "schema",
          title: "Schema",
          schema: {
            type: "div",
            children: [
              {
                type: "code",
                code: `// Pass tooltip props tilte and placement
{
  name: "btn-solid",
  element: "button",
  iconsClassName: "aci-add aci-dynamic-size size-[14px]",
  variant: "solid",
  tooltip: {
    title: "Add New",
    placement: "bottom",
  },
},
{
  name: "btn-light",
  element: "button",
  variant: "light",
  tooltip: {
    title: "Go back",
    placement: "top",
  },
  iconsClassName: "aci-left-arrow aci-dynamic-size size-[14px]",
},
{
  name: "btn-outlined",
  element: "button",
  variant: "outlined",
  iconsClassName: "aci-download aci-dynamic-size size-[14px]",
  tooltip: {
    title: "Download",
    placement: "bottom",
  },
},`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "props",
      type: "h3",
      text: "Props",
    },
    {
      type: "table",
      columns: [
        {
          key: "prop",
          title: "Prop",
        },
        {
          key: "type",
          title: "Type",
        },
        {
          key: "default",
          title: "Default",
        },
      ],
      rows: [
        {
          prop: "className",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "element",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "button",
        },
        {
          prop: "iconsClassName",
          type: <Code className="text-xs font-semibold">Icon name from <Link className="text-primary underline" href="/apex-icons/list">ApexIcons</Link> along with typescript classnames </Code>,
          default: "--",
        },
        {
          prop: "label",
          type: (
            <Code className="text-xs font-semibold">string | ReactNode</Code>
          ),
          default: "--",
        },
        {
          prop: "name",
          type: <Code className="text-xs font-semibold">string</Code>,
          default: "--",
        },
        {
          prop: "tooltip",
          type: <Code className="text-xs font-semibold">{`{ title: string, placement: "top" | "bottom" | "left" | "right" }`}</Code>,
          default: "--",
        },
        {
          prop: "variant",
          type: (
            <Code className="text-xs font-semibold">
              solid | outlined | light
            </Code>
          ),
          default: "solid",
        },
      ],
    },
  ],
};
