// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: r2L4x5kulJ

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicShared.module.css"; // plasmic-import: r2L4x5kulJ/css

createPlasmicElementProxy;

export type PlasmicShared__VariantMembers = {};
export type PlasmicShared__VariantsArgs = {};
type VariantPropType = keyof PlasmicShared__VariantsArgs;
export const PlasmicShared__VariantProps = new Array<VariantPropType>();

export type PlasmicShared__ArgsType = {
  avatars?: React.ReactNode;
};
type ArgPropType = keyof PlasmicShared__ArgsType;
export const PlasmicShared__ArgProps = new Array<ArgPropType>("avatars");

export type PlasmicShared__OverridesType = {
  root?: p.Flex<"button">;
  avatars?: p.Flex<"div">;
};

export interface DefaultSharedProps {
  avatars?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicShared__RenderFunc(props: {
  variants: PlasmicShared__VariantsArgs;
  args: PlasmicShared__ArgsType;
  overrides: PlasmicShared__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"avatars"}
        data-plasmic-override={overrides.avatars}
        className={classNames(projectcss.all, sty.avatars)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__yZ5Ov
                )}
              />

              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__voYmc
                )}
              />

              <img
                alt={""}
                className={classNames(
                  projectcss.all,
                  projectcss.img,
                  sty.img__z81Bn
                )}
              />
            </React.Fragment>
          ),
          value: args.avatars,
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatars"],
  avatars: ["avatars"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  avatars: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShared__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShared__VariantsArgs;
    args?: PlasmicShared__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShared__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShared__ArgsType,
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
          internalArgPropNames: PlasmicShared__ArgProps,
          internalVariantPropNames: PlasmicShared__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicShared__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicShared";
  } else {
    func.displayName = `PlasmicShared.${nodeName}`;
  }
  return func;
}

export const PlasmicShared = Object.assign(
  // Top-level PlasmicShared renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatars: makeNodeComponent("avatars"),

    // Metadata about props expected for PlasmicShared
    internalVariantProps: PlasmicShared__VariantProps,
    internalArgProps: PlasmicShared__ArgProps,
  }
);

export default PlasmicShared;
/* prettier-ignore-end */
