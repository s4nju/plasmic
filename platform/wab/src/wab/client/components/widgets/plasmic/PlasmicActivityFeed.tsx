// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: DdZ3EM2HFAD

import * as React from "react";

import {
  Flex as Flex__,
  Stack as Stack__,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import ActivityFeedItem from "./ActivityFeedItem"; // plasmic-import: kkbHZ8nmgGH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../../../plasmic/PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../../../plasmic/PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../../../plasmic/plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../../../plasmic/plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicActivityFeed.module.css"; // plasmic-import: DdZ3EM2HFAD/css

createPlasmicElementProxy;

export type PlasmicActivityFeed__VariantMembers = {};
export type PlasmicActivityFeed__VariantsArgs = {};
type VariantPropType = keyof PlasmicActivityFeed__VariantsArgs;
export const PlasmicActivityFeed__VariantProps = new Array<VariantPropType>();

export type PlasmicActivityFeed__ArgsType = {};
type ArgPropType = keyof PlasmicActivityFeed__ArgsType;
export const PlasmicActivityFeed__ArgProps = new Array<ArgPropType>();

export type PlasmicActivityFeed__OverridesType = {
  feedContainer?: Flex__<"div">;
};

export interface DefaultActivityFeedProps {
  className?: string;
}

const $$ = {};

function PlasmicActivityFeed__RenderFunc(props: {
  variants: PlasmicActivityFeed__VariantsArgs;
  args: PlasmicActivityFeed__ArgsType;
  overrides: PlasmicActivityFeed__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"feedContainer"}
      data-plasmic-override={overrides.feedContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.feedContainer
      )}
    >
      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem__btc0P)}
        state={"projectCreated"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem__uxQl)}
        state={"projectRenamed"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem___1K9Hj)}
        state={"projectShared"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem__iTzwf)}
        state={"projectForked"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem__ofHRh)}
        state={"userVisited"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem___1BeLe)}
        state={"anonymousVisited"}
      />

      <ActivityFeedItem
        className={classNames("__wab_instance", sty.activityFeedItem__c8Mm1)}
        state={"versionPublished"}
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  feedContainer: ["feedContainer"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  feedContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicActivityFeed__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicActivityFeed__VariantsArgs;
    args?: PlasmicActivityFeed__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicActivityFeed__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicActivityFeed__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicActivityFeed__ArgProps,
          internalVariantPropNames: PlasmicActivityFeed__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicActivityFeed__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "feedContainer") {
    func.displayName = "PlasmicActivityFeed";
  } else {
    func.displayName = `PlasmicActivityFeed.${nodeName}`;
  }
  return func;
}

export const PlasmicActivityFeed = Object.assign(
  // Top-level PlasmicActivityFeed renders the root element
  makeNodeComponent("feedContainer"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicActivityFeed
    internalVariantProps: PlasmicActivityFeed__VariantProps,
    internalArgProps: PlasmicActivityFeed__ArgProps,
  }
);

export default PlasmicActivityFeed;
/* prettier-ignore-end */
