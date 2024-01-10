// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: C9PGGs5iUd

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
import sty from "./PlasmicUpsellConfirm.module.css"; // plasmic-import: C9PGGs5iUd/css

import MarkFullColorIcon from "../plasmic_kit_design_system/PlasmicIcon__MarkFullColor"; // plasmic-import: l_n_OBLJg/icon
import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicUpsellConfirm__VariantMembers = {};
export type PlasmicUpsellConfirm__VariantsArgs = {};
type VariantPropType = keyof PlasmicUpsellConfirm__VariantsArgs;
export const PlasmicUpsellConfirm__VariantProps = new Array<VariantPropType>();

export type PlasmicUpsellConfirm__ArgsType = {
  amountPaid?: React.ReactNode;
};
type ArgPropType = keyof PlasmicUpsellConfirm__ArgsType;
export const PlasmicUpsellConfirm__ArgProps = new Array<ArgPropType>(
  "amountPaid"
);

export type PlasmicUpsellConfirm__OverridesType = {
  root?: p.Flex<"div">;
  teamSettingsLink?: p.Flex<"a">;
  dismissButton?: p.Flex<typeof Button>;
};

export interface DefaultUpsellConfirmProps {
  amountPaid?: React.ReactNode;
  className?: string;
}

const $$ = {};

function PlasmicUpsellConfirm__RenderFunc(props: {
  variants: PlasmicUpsellConfirm__VariantsArgs;
  args: PlasmicUpsellConfirm__ArgsType;
  overrides: PlasmicUpsellConfirm__OverridesType;
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__tyspx)}
      >
        <MarkFullColorIcon
          className={classNames(projectcss.all, sty.svg__dlUg2)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__aeosj
          )}
        >
          {"Thank you for your payment!"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__efG6S
          )}
        >
          {
            "A receipt for this transaction has been sent via email for your records"
          }
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__lsGm
          )}
        >
          {
            "To make future changes to your subscription, visit your organization settings page:"
          }
        </div>
        <a
          data-plasmic-name={"teamSettingsLink"}
          data-plasmic-override={overrides.teamSettingsLink}
          className={classNames(
            projectcss.all,
            projectcss.a,
            projectcss.__wab_text,
            sty.teamSettingsLink
          )}
          href={"https://www.plasmic.app/"}
          target={"_blank"}
        >
          {"Visit organization settings ->"}
        </a>
        <div className={classNames(projectcss.all, sty.freeBox___65IXe)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fWkFm
            )}
          >
            {"Total Paid"}
          </div>
          {p.renderPlasmicSlot({
            defaultContents: "$15.00",
            value: args.amountPaid,
            className: classNames(sty.slotTargetAmountPaid),
          })}
        </div>
      </p.Stack>
      <div className={classNames(projectcss.all, sty.freeBox__xirn7)}>
        <Button
          data-plasmic-name={"dismissButton"}
          data-plasmic-override={overrides.dismissButton}
          className={classNames("__wab_instance", sty.dismissButton)}
          endIcon={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg___2M4J)}
              role={"img"}
            />
          }
          startIcon={
            <ArrowRightsvgIcon
              className={classNames(projectcss.all, sty.svg__ueqAv)}
              role={"img"}
            />
          }
          type={["primary"]}
        >
          {"Dismiss"}
        </Button>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "teamSettingsLink", "dismissButton"],
  teamSettingsLink: ["teamSettingsLink"],
  dismissButton: ["dismissButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  teamSettingsLink: "a";
  dismissButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUpsellConfirm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUpsellConfirm__VariantsArgs;
    args?: PlasmicUpsellConfirm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUpsellConfirm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUpsellConfirm__ArgsType,
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
          internalArgPropNames: PlasmicUpsellConfirm__ArgProps,
          internalVariantPropNames: PlasmicUpsellConfirm__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicUpsellConfirm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUpsellConfirm";
  } else {
    func.displayName = `PlasmicUpsellConfirm.${nodeName}`;
  }
  return func;
}

export const PlasmicUpsellConfirm = Object.assign(
  // Top-level PlasmicUpsellConfirm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    teamSettingsLink: makeNodeComponent("teamSettingsLink"),
    dismissButton: makeNodeComponent("dismissButton"),

    // Metadata about props expected for PlasmicUpsellConfirm
    internalVariantProps: PlasmicUpsellConfirm__VariantProps,
    internalArgProps: PlasmicUpsellConfirm__ArgProps,
  }
);

export default PlasmicUpsellConfirm;
/* prettier-ignore-end */
