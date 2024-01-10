// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ooL7EhXDmFQWnW9sxtchhE
// Component: diKNfA_-roE

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
import StarterGroup from "../../components/StarterGroup"; // plasmic-import: u6dq5eydCj/component
import StarterProject from "../../components/StarterProject"; // plasmic-import: CCsDeqqYeoM/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_pricing_css from "../plasmic_kit_pricing/plasmic_plasmic_kit_pricing.module.css"; // plasmic-import: ehckhYnyDHgCBbV47m9bkf/projectcss
import projectcss from "../PP__plasmickit_dashboard.module.css"; // plasmic-import: ooL7EhXDmFQWnW9sxtchhE/projectcss
import sty from "./PlasmicProjectListSection.module.css"; // plasmic-import: diKNfA_-roE/css

import LightBulbIcon from "./PlasmicIcon__LightBulb"; // plasmic-import: L1GrIYxdm_MJL/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ChevronLeftsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronLeftsvg"; // plasmic-import: 0-_N6JM-u/icon
import CheckIcon from "./PlasmicIcon__Check"; // plasmic-import: pawp1H5YxB_3B/icon
import image3YherfIxkolNxf from "../plasmic_kit_design_system/images/image3.svg"; // plasmic-import: yherfIxkolNXF/picture
import eyesvgZxKyHRa6Q6Pa from "../plasmic_kit_design_system/images/eyesvg.svg"; // plasmic-import: Zx-kyHRa6Q6PA/picture

createPlasmicElementProxy;

export type PlasmicProjectListSection__VariantMembers = {
  states: "collapsed";
  type: "starters";
};
export type PlasmicProjectListSection__VariantsArgs = {
  states?: SingleChoiceArg<"collapsed">;
  type?: SingleChoiceArg<"starters">;
};
type VariantPropType = keyof PlasmicProjectListSection__VariantsArgs;
export const PlasmicProjectListSection__VariantProps =
  new Array<VariantPropType>("states", "type");

export type PlasmicProjectListSection__ArgsType = {
  name?: React.ReactNode;
  icon?: React.ReactNode;
  container?: React.ReactNode;
};
type ArgPropType = keyof PlasmicProjectListSection__ArgsType;
export const PlasmicProjectListSection__ArgProps = new Array<ArgPropType>(
  "name",
  "icon",
  "container"
);

export type PlasmicProjectListSection__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"button">;
  svg?: p.Flex<"svg">;
};

export interface DefaultProjectListSectionProps {
  name?: React.ReactNode;
  icon?: React.ReactNode;
  container?: React.ReactNode;
  states?: SingleChoiceArg<"collapsed">;
  type?: SingleChoiceArg<"starters">;
  className?: string;
}

const $$ = {};

function PlasmicProjectListSection__RenderFunc(props: {
  variants: PlasmicProjectListSection__VariantsArgs;
  args: PlasmicProjectListSection__ArgsType;
  overrides: PlasmicProjectListSection__OverridesType;
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
        path: "states",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.states,
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type,
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
          [sty.rootstates_collapsed]: hasVariant($state, "states", "collapsed"),
          [sty.roottype_starters]: hasVariant($state, "type", "starters"),
        }
      )}
    >
      <p.Stack
        as={"button"}
        data-plasmic-name={"header"}
        data-plasmic-override={overrides.header}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.button, sty.header, {
          [sty.headerstates_collapsed]: hasVariant(
            $state,
            "states",
            "collapsed"
          ),
        })}
        ref={(ref) => {
          $refs["header"] = ref;
        }}
      >
        {false
          ? p.renderPlasmicSlot({
              defaultContents: (
                <LightBulbIcon
                  className={classNames(projectcss.all, sty.svg__xxRln)}
                  role={"img"}
                />
              ),

              value: args.icon,
              className: classNames(sty.slotTargetIcon, {
                [sty.slotTargetIconstates_collapsed]: hasVariant(
                  $state,
                  "states",
                  "collapsed"
                ),
              }),
            })
          : null}
        {p.renderPlasmicSlot({
          defaultContents: "Get Started",
          value: args.name,
          className: classNames(sty.slotTargetName, {
            [sty.slotTargetNamestates_collapsed]: hasVariant(
              $state,
              "states",
              "collapsed"
            ),
          }),
        })}
        <div className={classNames(projectcss.all, sty.freeBox__oPcAj)}>
          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant($state, "states", "collapsed")
                ? ChevronLeftsvgIcon
                : ChevronDownsvgIcon
            }
            className={classNames(projectcss.all, sty.svg, {
              [sty.svgstates_collapsed]: hasVariant(
                $state,
                "states",
                "collapsed"
              ),
            })}
            role={"img"}
          />
        </div>
      </p.Stack>
      {(hasVariant($state, "states", "collapsed") ? false : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___3C2Jp, {
            [sty.freeBoxstates_collapsed___3C2JpvffNq]: hasVariant(
              $state,
              "states",
              "collapsed"
            ),
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <StarterGroup
                  className={classNames(
                    "__wab_instance",
                    sty.starterGroup__gEj3J
                  )}
                  container={
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
                              sty.img__bswpt
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
                              sty.img__fSbyP
                            )}
                            loading={"lazy"}
                            src={eyesvgZxKyHRa6Q6Pa}
                          />
                        }
                      >
                        <CheckIcon
                          className={classNames(projectcss.all, sty.svg__bmtLe)}
                          role={"img"}
                        />
                      </StarterProject>
                      <StarterProject
                        className={classNames(
                          "__wab_instance",
                          sty.starterProject__jyNxe
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
                              sty.img__srtNt
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
                              sty.img__oYopF
                            )}
                            loading={"lazy"}
                            src={eyesvgZxKyHRa6Q6Pa}
                          />
                        }
                      >
                        <CheckIcon
                          className={classNames(projectcss.all, sty.svg__zu5R)}
                          role={"img"}
                        />
                      </StarterProject>
                    </React.Fragment>
                  }
                  heading={"Subheading"}
                />

                <StarterGroup
                  className={classNames(
                    "__wab_instance",
                    sty.starterGroup___3Qocf
                  )}
                  container={
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
                              sty.img___9FjeT
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
                              sty.img__gsx6F
                            )}
                            loading={"lazy"}
                            src={eyesvgZxKyHRa6Q6Pa}
                          />
                        }
                      >
                        <CheckIcon
                          className={classNames(projectcss.all, sty.svg__maOdt)}
                          role={"img"}
                        />
                      </StarterProject>
                      <StarterProject
                        className={classNames(
                          "__wab_instance",
                          sty.starterProject__xj6B
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
                              sty.img__zpUCp
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
                              sty.img__cpV4
                            )}
                            loading={"lazy"}
                            src={eyesvgZxKyHRa6Q6Pa}
                          />
                        }
                      >
                        <CheckIcon
                          className={classNames(projectcss.all, sty.svg__fXwO)}
                          role={"img"}
                        />
                      </StarterProject>
                    </React.Fragment>
                  }
                  heading={"Subheading"}
                />
              </React.Fragment>
            ),
            value: args.container,
          })}
        </p.Stack>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "svg"],
  header: ["header", "svg"],
  svg: ["svg"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "button";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProjectListSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProjectListSection__VariantsArgs;
    args?: PlasmicProjectListSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProjectListSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProjectListSection__ArgsType,
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
          internalArgPropNames: PlasmicProjectListSection__ArgProps,
          internalVariantPropNames: PlasmicProjectListSection__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicProjectListSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProjectListSection";
  } else {
    func.displayName = `PlasmicProjectListSection.${nodeName}`;
  }
  return func;
}

export const PlasmicProjectListSection = Object.assign(
  // Top-level PlasmicProjectListSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicProjectListSection
    internalVariantProps: PlasmicProjectListSection__VariantProps,
    internalArgProps: PlasmicProjectListSection__ArgProps,
  }
);

export default PlasmicProjectListSection;
/* prettier-ignore-end */
