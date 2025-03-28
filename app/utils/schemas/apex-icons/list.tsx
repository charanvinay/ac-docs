import { NodeSchema } from "@/app/lib/ViewBuilder";

export const ApexIconsList: NodeSchema = {
  type: "div",
  className: "flex flex-col gap-4",
  isApplyMotion: false,
  children: [
    {
      type: "div",
      children: [
        {
          type: "h3",
          id: "list-of-available-items",
          text: "List of available icons",
          isApplyMotion: true,
        },
        {
          type: "p",
          text: "Click on any icon to copy",
          className: "text-xs font-medium text-gray-400",
          isApplyMotion: true,
        },
      ],
    },
    {
      type: "icons",
      isApplyMotion: false,
    },
  ],
};
