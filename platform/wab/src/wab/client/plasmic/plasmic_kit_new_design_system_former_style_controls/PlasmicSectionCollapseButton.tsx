// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gYEVvAzCcLMHDVPvuYxkFh
// Component: 8AZoGEGjWc

import * as React from "react";

import {
  Flex as Flex__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicSectionCollapseButton.module.css"; // plasmic-import: 8AZoGEGjWc/css

import ChevronDownSvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicSectionCollapseButton__VariantMembers = {
  isExpanded: "isExpanded";
};
export type PlasmicSectionCollapseButton__VariantsArgs = {
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
};
type VariantPropType = keyof PlasmicSectionCollapseButton__VariantsArgs;
export const PlasmicSectionCollapseButton__VariantProps =
  new Array<VariantPropType>("isExpanded");

export type PlasmicSectionCollapseButton__ArgsType = {
  onClick?: () => void;
};
type ArgPropType = keyof PlasmicSectionCollapseButton__ArgsType;
export const PlasmicSectionCollapseButton__ArgProps = new Array<ArgPropType>(
  "onClick"
);

export type PlasmicSectionCollapseButton__OverridesType = {
  root?: Flex__<"button">;
  svg?: Flex__<"svg">;
};

export interface DefaultSectionCollapseButtonProps {
  onClick?: () => void;
  isExpanded?: SingleBooleanChoiceArg<"isExpanded">;
  className?: string;
}

const $$ = {};

function PlasmicSectionCollapseButton__RenderFunc(props: {
  variants: PlasmicSectionCollapseButton__VariantsArgs;
  args: PlasmicSectionCollapseButton__ArgsType;
  overrides: PlasmicSectionCollapseButton__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isExpanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isExpanded,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root
      )}
      onClick={args.onClick}
    >
      <ChevronDownSvgIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg, {
          [sty.svgisExpanded]: hasVariant($state, "isExpanded", "isExpanded"),
        })}
        role={"img"}
      />
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSectionCollapseButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSectionCollapseButton__VariantsArgs;
    args?: PlasmicSectionCollapseButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSectionCollapseButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSectionCollapseButton__ArgsType,
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
          internalArgPropNames: PlasmicSectionCollapseButton__ArgProps,
          internalVariantPropNames: PlasmicSectionCollapseButton__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicSectionCollapseButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSectionCollapseButton";
  } else {
    func.displayName = `PlasmicSectionCollapseButton.${nodeName}`;
  }
  return func;
}

export const PlasmicSectionCollapseButton = Object.assign(
  // Top-level PlasmicSectionCollapseButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicSectionCollapseButton
    internalVariantProps: PlasmicSectionCollapseButton__VariantProps,
    internalArgProps: PlasmicSectionCollapseButton__ArgProps,
  }
);

export default PlasmicSectionCollapseButton;
/* prettier-ignore-end */
