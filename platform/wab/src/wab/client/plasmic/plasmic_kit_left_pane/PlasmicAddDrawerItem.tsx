// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: isQPD0RPCw

import * as React from "react";

import {
  Flex as Flex__,
  PlasmicImg as PlasmicImg__,
  SingleBooleanChoiceArg,
  StrictProps,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState,
  useTrigger,
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";

import ListItem from "../../components/ListItem"; // plasmic-import: v31d9_ANqk/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import sty from "./PlasmicAddDrawerItem.module.css"; // plasmic-import: isQPD0RPCw/css

import image49X6ZsC5Ww5 from "../plasmic_kit_design_system/images/image4.svg"; // plasmic-import: 9X6ZsC5ww5/picture
import AfterSvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Aftersvg"; // plasmic-import: RYZCFr_yc/icon
import BeforeSvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Beforesvg"; // plasmic-import: AobbKyfJE/icon
import ComponentSvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Componentsvg"; // plasmic-import: vJVrKlrDD/icon
import ChevronDownSvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon

createPlasmicElementProxy;

export type PlasmicAddDrawerItem__VariantMembers = {
  isHighlighted: "isHighlighted";
  showPreviewImage: "showPreviewImage";
};
export type PlasmicAddDrawerItem__VariantsArgs = {
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  showPreviewImage?: SingleBooleanChoiceArg<"showPreviewImage">;
};
type VariantPropType = keyof PlasmicAddDrawerItem__VariantsArgs;
export const PlasmicAddDrawerItem__VariantProps = new Array<VariantPropType>(
  "isHighlighted",
  "showPreviewImage"
);

export type PlasmicAddDrawerItem__ArgsType = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  previewImage?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAddDrawerItem__ArgsType;
export const PlasmicAddDrawerItem__ArgProps = new Array<ArgPropType>(
  "children",
  "icon",
  "actions",
  "previewImage"
);

export type PlasmicAddDrawerItem__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  listItem?: Flex__<typeof ListItem>;
};

export interface DefaultAddDrawerItemProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  previewImage?: React.ReactNode;
  isHighlighted?: SingleBooleanChoiceArg<"isHighlighted">;
  showPreviewImage?: SingleBooleanChoiceArg<"showPreviewImage">;
  className?: string;
}

const $$ = {};

function PlasmicAddDrawerItem__RenderFunc(props: {
  variants: PlasmicAddDrawerItem__VariantsArgs;
  args: PlasmicAddDrawerItem__ArgsType;
  overrides: PlasmicAddDrawerItem__OverridesType;
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
        path: "isHighlighted",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isHighlighted,
      },
      {
        path: "showPreviewImage",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.showPreviewImage,
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

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover,
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxshowPreviewImage]: hasVariant(
            $state,
            "showPreviewImage",
            "showPreviewImage"
          ),
        })}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__iEEcN)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"none"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              src={{
                src: image49X6ZsC5Ww5,
                fullWidth: 150,
                fullHeight: 150,
                aspectRatio: 1,
              }}
            />
          ),

          value: args.previewImage,
        })}
      </div>
      <ListItem
        data-plasmic-name={"listItem"}
        data-plasmic-override={overrides.listItem}
        actions={renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <IconButton
                children2={
                  <ChevronDownSvgIcon
                    className={classNames(projectcss.all, sty.svg___6O2L)}
                    role={"img"}
                  />
                }
              >
                <BeforeSvgIcon
                  className={classNames(projectcss.all, sty.svg__zc4N)}
                  role={"img"}
                />
              </IconButton>
              <IconButton
                children2={
                  <ChevronDownSvgIcon
                    className={classNames(projectcss.all, sty.svg___286BO)}
                    role={"img"}
                  />
                }
                className={classNames("__wab_instance", sty.iconButton__ol5Pp)}
              >
                <AfterSvgIcon
                  className={classNames(projectcss.all, sty.svg__acGZq)}
                  role={"img"}
                />
              </IconButton>
            </React.Fragment>
          ),
          value: args.actions,
        })}
        icon={renderPlasmicSlot({
          defaultContents: (
            <ComponentSvgIcon
              className={classNames(projectcss.all, sty.svg__xaCli)}
              role={"img"}
            />
          ),

          value: args.icon,
        })}
        isHighlighted={
          hasVariant($state, "isHighlighted", "isHighlighted")
            ? true
            : undefined
        }
        showActions={
          triggers.hover_root
            ? true
            : hasVariant($state, "isHighlighted", "isHighlighted")
            ? true
            : undefined
        }
      >
        {renderPlasmicSlot({
          defaultContents: "Item Name",
          value: args.children,
        })}
      </ListItem>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "listItem"],
  freeBox: ["freeBox"],
  listItem: ["listItem"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  listItem: typeof ListItem;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAddDrawerItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAddDrawerItem__VariantsArgs;
    args?: PlasmicAddDrawerItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAddDrawerItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAddDrawerItem__ArgsType,
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
          internalArgPropNames: PlasmicAddDrawerItem__ArgProps,
          internalVariantPropNames: PlasmicAddDrawerItem__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicAddDrawerItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAddDrawerItem";
  } else {
    func.displayName = `PlasmicAddDrawerItem.${nodeName}`;
  }
  return func;
}

export const PlasmicAddDrawerItem = Object.assign(
  // Top-level PlasmicAddDrawerItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    listItem: makeNodeComponent("listItem"),

    // Metadata about props expected for PlasmicAddDrawerItem
    internalVariantProps: PlasmicAddDrawerItem__VariantProps,
    internalArgProps: PlasmicAddDrawerItem__ArgProps,
  }
);

export default PlasmicAddDrawerItem;
/* prettier-ignore-end */
