// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: AqMe9uK-Yh

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
import Button from "../../components/widgets/Button"; // plasmic-import: SEF-sRmSoqV5c/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicFreeTrialModal.module.css"; // plasmic-import: AqMe9uK-Yh/css

import MarkFullColorIcon from "../plasmic_kit_design_system/PlasmicIcon__MarkFullColor"; // plasmic-import: l_n_OBLJg/icon
import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicFreeTrialModal__VariantMembers = {};
export type PlasmicFreeTrialModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicFreeTrialModal__VariantsArgs;
export const PlasmicFreeTrialModal__VariantProps = new Array<VariantPropType>();

export type PlasmicFreeTrialModal__ArgsType = {
  trialDays?: number;
};
type ArgPropType = keyof PlasmicFreeTrialModal__ArgsType;
export const PlasmicFreeTrialModal__ArgProps = new Array<ArgPropType>(
  "trialDays"
);

export type PlasmicFreeTrialModal__OverridesType = {
  root?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  text?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  confirmButton?: p.Flex<typeof Button>;
};

export interface DefaultFreeTrialModalProps {
  trialDays?: number;
  className?: string;
}

const $$ = {};

function PlasmicFreeTrialModal__RenderFunc(props: {
  variants: PlasmicFreeTrialModal__VariantsArgs;
  args: PlasmicFreeTrialModal__ArgsType;
  overrides: PlasmicFreeTrialModal__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          trialDays: 15,
        },
        props.args
      ),
    [props.args]
  );

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
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        plasmic_plasmic_kit_pricing_css.plasmic_tokens,
        sty.root
      )}
    >
      <MarkFullColorIcon
        className={classNames(projectcss.all, sty.svg__er1Mj)}
        role={"img"}
      />

      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(
          projectcss.all,
          projectcss.h3,
          projectcss.__wab_text,
          sty.h3
        )}
      >
        <React.Fragment>
          {`Discover all of Plasmic with a ${$props.trialDays}-day trial of Scale`}
        </React.Fragment>
      </h3>
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {`We\u2019ve upgraded you to a free ${$props.trialDays}-day trial of the Scale plan. Experience Plasmic's full range of features to choose the best plan for you.\n\nWhen your trial ends, we'll automatically move your account to the Free plan unless you choose to upgrade.`}
        </React.Fragment>
      </div>
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <Button
          data-plasmic-name={"confirmButton"}
          data-plasmic-override={overrides.confirmButton}
          className={classNames("__wab_instance", sty.confirmButton)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__akfXw)}
              role={"img"}
            />
          }
          startIcon={
            <ArrowRightsvgIcon
              className={classNames(projectcss.all, sty.svg__u5Zd2)}
              role={"img"}
            />
          }
          type={["primary"]}
        >
          {"Continue"}
        </Button>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h3", "text", "freeBox", "confirmButton"],
  h3: ["h3"],
  text: ["text"],
  freeBox: ["freeBox", "confirmButton"],
  confirmButton: ["confirmButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h3: "h3";
  text: "div";
  freeBox: "div";
  confirmButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFreeTrialModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFreeTrialModal__VariantsArgs;
    args?: PlasmicFreeTrialModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFreeTrialModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFreeTrialModal__ArgsType,
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
          internalArgPropNames: PlasmicFreeTrialModal__ArgProps,
          internalVariantPropNames: PlasmicFreeTrialModal__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicFreeTrialModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFreeTrialModal";
  } else {
    func.displayName = `PlasmicFreeTrialModal.${nodeName}`;
  }
  return func;
}

export const PlasmicFreeTrialModal = Object.assign(
  // Top-level PlasmicFreeTrialModal renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),
    confirmButton: makeNodeComponent("confirmButton"),

    // Metadata about props expected for PlasmicFreeTrialModal
    internalVariantProps: PlasmicFreeTrialModal__VariantProps,
    internalArgProps: PlasmicFreeTrialModal__ArgProps,
  }
);

export default PlasmicFreeTrialModal;
/* prettier-ignore-end */
