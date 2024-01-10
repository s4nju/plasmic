// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: u6dq5eydCj

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
import Link from "../../components/Link"; // plasmic-import: IQU7DmjqUs/component
import StarterProject from "../../components/StarterProject"; // plasmic-import: CCsDeqqYeoM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicStarterGroup.module.css"; // plasmic-import: u6dq5eydCj/css

import InformationsvgIcon from "../q_4_icons/icons/PlasmicIcon__Informationsvg"; // plasmic-import: hqBNVBJWB/icon
import ArrowUpRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowUpRightsvg"; // plasmic-import: N_BtK6grX/icon
import ArrowRightsvgIcon from "../q_4_icons/icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: 9Jv8jb253/icon
import CheckIcon from "./PlasmicIcon__Check"; // plasmic-import: pawp1H5YxB_3B/icon
import image3YherfIxkolNxf from "../plasmic_kit_design_system/images/image3.svg"; // plasmic-import: yherfIxkolNXF/picture
import eyesvgZxKyHRa6Q6Pa from "../plasmic_kit_design_system/images/eyesvg.svg"; // plasmic-import: Zx-kyHRa6Q6PA/picture

createPlasmicElementProxy;

export type PlasmicStarterGroup__VariantMembers = {
  type: "withoutHeader";
  twoColumnGrid: "twoColumnGrid";
  gridColumns: "_2" | "_3";
};
export type PlasmicStarterGroup__VariantsArgs = {
  type?: SingleChoiceArg<"withoutHeader">;
  twoColumnGrid?: SingleBooleanChoiceArg<"twoColumnGrid">;
  gridColumns?: SingleChoiceArg<"_2" | "_3">;
};
type VariantPropType = keyof PlasmicStarterGroup__VariantsArgs;
export const PlasmicStarterGroup__VariantProps = new Array<VariantPropType>(
  "type",
  "twoColumnGrid",
  "gridColumns"
);

export type PlasmicStarterGroup__ArgsType = {
  heading?: React.ReactNode;
  container?: React.ReactNode;
};
type ArgPropType = keyof PlasmicStarterGroup__ArgsType;
export const PlasmicStarterGroup__ArgProps = new Array<ArgPropType>(
  "heading",
  "container"
);

export type PlasmicStarterGroup__OverridesType = {
  root?: p.Flex<"div">;
  infoIcon?: p.Flex<"svg">;
  viewDocs?: p.Flex<typeof Link>;
  more?: p.Flex<typeof Link>;
};

export interface DefaultStarterGroupProps {
  heading?: React.ReactNode;
  container?: React.ReactNode;
  type?: SingleChoiceArg<"withoutHeader">;
  twoColumnGrid?: SingleBooleanChoiceArg<"twoColumnGrid">;
  gridColumns?: SingleChoiceArg<"_2" | "_3">;
  className?: string;
}

const $$ = {};

function PlasmicStarterGroup__RenderFunc(props: {
  variants: PlasmicStarterGroup__VariantsArgs;
  args: PlasmicStarterGroup__ArgsType;
  overrides: PlasmicStarterGroup__OverridesType;
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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
      },
      {
        path: "twoColumnGrid",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.twoColumnGrid,
      },
      {
        path: "gridColumns",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.gridColumns,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

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
        sty.root,
        {
          [sty.roottwoColumnGrid]: hasVariant(
            $state,
            "twoColumnGrid",
            "twoColumnGrid"
          ),
          [sty.roottype_withoutHeader]: hasVariant(
            $state,
            "type",
            "withoutHeader"
          ),
        }
      )}
    >
      {(hasVariant($state, "type", "withoutHeader") ? false : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__pv2In, {
            [sty.freeBoxtype_withoutHeader__pv2InwU6Kq]: hasVariant(
              $state,
              "type",
              "withoutHeader"
            ),
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vZxO3)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Subheading",
              value: args.heading,
              className: classNames(sty.slotTargetHeading),
            })}
            <InformationsvgIcon
              data-plasmic-name={"infoIcon"}
              data-plasmic-override={overrides.infoIcon}
              className={classNames(projectcss.all, sty.infoIcon)}
              role={"img"}
            />
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__irp33)}
          >
            <Link
              data-plasmic-name={"viewDocs"}
              data-plasmic-override={overrides.viewDocs}
              className={classNames("__wab_instance", sty.viewDocs)}
              icon={
                <ArrowUpRightsvgIcon
                  className={classNames(projectcss.all, sty.svg__cWp3N)}
                  role={"img"}
                />
              }
              text={"Docs"}
            />

            <Link
              data-plasmic-name={"more"}
              data-plasmic-override={overrides.more}
              className={classNames("__wab_instance", sty.more)}
              icon={
                <ArrowRightsvgIcon
                  className={classNames(projectcss.all, sty.svg__opADb)}
                  role={"img"}
                />
              }
              text={"See all\u2026"}
            />
          </p.Stack>
        </div>
      ) : null}
      <div
        className={classNames(projectcss.all, sty.freeBox__dDcq, {
          [sty.freeBoxgridColumns__2__dDcqwJdyT]: hasVariant(
            $state,
            "gridColumns",
            "_2"
          ),
          [sty.freeBoxgridColumns__3__dDcq6FrKj]: hasVariant(
            $state,
            "gridColumns",
            "_3"
          ),
          [sty.freeBoxtwoColumnGrid__dDcqL1Zy]: hasVariant(
            $state,
            "twoColumnGrid",
            "twoColumnGrid"
          ),
          [sty.freeBoxtwoColumnGrid_type_withoutHeader__dDcqL1ZyWU6Kq]:
            hasVariant($state, "type", "withoutHeader") &&
            hasVariant($state, "twoColumnGrid", "twoColumnGrid"),
          [sty.freeBoxtype_withoutHeader__dDcqwU6Kq]: hasVariant(
            $state,
            "type",
            "withoutHeader"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <StarterProject
                image={"withImage"}
                instruction={"Click to duplicate this project"}
                name={'Play "Plasmic Levels"'}
                preview={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__bP7Ph
                    )}
                    src={image3YherfIxkolNxf}
                  />
                }
                previewIcon={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__zkh64
                    )}
                    loading={"lazy"}
                    src={eyesvgZxKyHRa6Q6Pa}
                  />
                }
              >
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__gFtv)}
                  role={"img"}
                />
              </StarterProject>
              <StarterProject
                className={classNames(
                  "__wab_instance",
                  sty.starterProject__s5Vns
                )}
                image={"withImage"}
                instruction={"Click to duplicate this project"}
                name={'Play "Plasmic Levels"'}
                preview={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img___9FOdj
                    )}
                    src={image3YherfIxkolNxf}
                  />
                }
                previewIcon={
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img__q6GP
                    )}
                    loading={"lazy"}
                    src={eyesvgZxKyHRa6Q6Pa}
                  />
                }
              >
                <CheckIcon
                  className={classNames(projectcss.all, sty.svg__go0Gq)}
                  role={"img"}
                />
              </StarterProject>
            </React.Fragment>
          ),
          value: args.container,
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "infoIcon", "viewDocs", "more"],
  infoIcon: ["infoIcon"],
  viewDocs: ["viewDocs"],
  more: ["more"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  infoIcon: "svg";
  viewDocs: typeof Link;
  more: typeof Link;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStarterGroup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStarterGroup__VariantsArgs;
    args?: PlasmicStarterGroup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStarterGroup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStarterGroup__ArgsType,
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
          internalArgPropNames: PlasmicStarterGroup__ArgProps,
          internalVariantPropNames: PlasmicStarterGroup__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicStarterGroup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStarterGroup";
  } else {
    func.displayName = `PlasmicStarterGroup.${nodeName}`;
  }
  return func;
}

export const PlasmicStarterGroup = Object.assign(
  // Top-level PlasmicStarterGroup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    infoIcon: makeNodeComponent("infoIcon"),
    viewDocs: makeNodeComponent("viewDocs"),
    more: makeNodeComponent("more"),

    // Metadata about props expected for PlasmicStarterGroup
    internalVariantProps: PlasmicStarterGroup__VariantProps,
    internalArgProps: PlasmicStarterGroup__ArgProps,
  }
);

export default PlasmicStarterGroup;
/* prettier-ignore-end */
