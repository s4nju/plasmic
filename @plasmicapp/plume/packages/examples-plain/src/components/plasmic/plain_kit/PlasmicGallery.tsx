/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wtmthg1Ku3JDsEq1LhL9ox
// Component: X4To_O49HY
import * as React from 'react';
import {
  hasVariant,
  classNames,
  Flex,
  wrapWithClassName,
  Renderer,
  NodeRenderer,
  createPlasmicElementProxy,
  makeFragment,
  PlasmicIcon,
  PlasmicSlot,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
} from '@plasmicapp/react-web';
import Checkbox from '../../Checkbox'; // plasmic-import: CcnzMSyt18/component
import Select from '../../Select'; // plasmic-import: zWD5Iq9v1R/component
import SelectOption from '../../SelectOption'; // plasmic-import: s-Af7sfJ1e/component

import '@plasmicapp/react-web/lib/plasmic.css';
import '../plasmic__default_style.css'; // plasmic-import: global/defaultcss
import './plasmic_plain_kit.css'; // plasmic-import: wtmthg1Ku3JDsEq1LhL9ox/projectcss
import './PlasmicGallery.css'; // plasmic-import: X4To_O49HY/css

export type PlasmicGallery__VariantsArgs = {};
export const PlasmicGallery__VariantProps = new Array<
  keyof PlasmicGallery__VariantsArgs
>();

export type PlasmicGallery__ArgsType = {};
export const PlasmicGallery__ArgProps = new Array<
  keyof PlasmicGallery__ArgsType
>();

export type PlasmicGallery__OverridesType = {
  root?: Flex<'div'>;
  select?: Flex<typeof Select>;
};

export interface DefaultGalleryProps {
  className?: string;
}

function PlasmicGallery__RenderFunc(props: {
  variants: PlasmicGallery__VariantsArgs;
  args: PlasmicGallery__ArgsType;
  overrides: PlasmicGallery__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        Gallery__root__NHNQP: true,
        'plasmic-default__all': true,
        'plasmic-default__div': true,
      })}
    >
      <Checkbox
        className={classNames({
          Gallery__checkbox__px0Bn: true,
          __wab_instance: true,
        })}
        hasLabel={'hasLabel' as const}
        {...({} as any)}
      >
        {'Check this out!!'}
      </Checkbox>

      <Checkbox
        className={classNames({
          Gallery__checkbox__6OfIw: true,
          __wab_instance: true,
        })}
        hasLabel={'hasLabel' as const}
        isSelected={'isSelected' as const}
        {...({} as any)}
      >
        {'Check this out!!'}
      </Checkbox>

      <Checkbox
        className={classNames({
          Gallery__checkbox__LCOYF: true,
          __wab_instance: true,
        })}
        hasLabel={'hasLabel' as const}
        isDisabled={'isDisabled' as const}
        {...({} as any)}
      >
        {'Check this out!!'}
      </Checkbox>

      <Select
        data-plasmic-name={'select'}
        data-plasmic-override={overrides.select}
        className={classNames({
          Gallery__select__vpWL1: true,
          __wab_instance: true,
        })}
        isOpen={'isOpen' as const}
        options={makeFragment(
          <SelectOption
            className={classNames({
              Gallery__selectOption__spUgq: true,
              __wab_instance: true,
            })}
            {...({} as any)}
          >
            {'California'}
          </SelectOption>,
          <SelectOption
            className={classNames({
              Gallery__selectOption__dAhSU: true,
              __wab_instance: true,
            })}
            {...({} as any)}
          >
            {'California'}
          </SelectOption>,
          <SelectOption
            className={classNames({
              Gallery__selectOption__42_b3: true,
              __wab_instance: true,
            })}
            {...({} as any)}
          >
            {'California'}
          </SelectOption>
        )}
        triggerContent={'California'}
        {...({} as any)}
      ></Select>
    </div>
  ) as React.ReactElement | null;
}

class PlasmicGallery__Renderer extends Renderer<
  PlasmicGallery__VariantsArgs,
  PlasmicGallery__ArgsType,
  PlasmicGallery__OverridesType,
  'root'
> {
  constructor(
    variants: PlasmicGallery__VariantsArgs,
    args: PlasmicGallery__ArgsType
  ) {
    super(variants, args, PlasmicGallery__RenderFunc, 'root');
  }

  protected create(
    variants: PlasmicGallery__VariantsArgs,
    args: PlasmicGallery__ArgsType
  ) {
    return new PlasmicGallery__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicGallery__VariantsArgs)[] {
    return PlasmicGallery__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicGallery__ArgsType)[] {
    return PlasmicGallery__ArgProps;
  }

  forNode(
    name: 'select'
  ): NodeRenderer<
    PlasmicGallery__VariantsArgs,
    PlasmicGallery__ArgsType,
    {
      select?: Flex<typeof Select>;
    }
  >;

  forNode(
    name: 'root'
  ): NodeRenderer<
    PlasmicGallery__VariantsArgs,
    PlasmicGallery__ArgsType,
    {
      root?: Flex<'div'>;
      select?: Flex<typeof Select>;
    }
  >;

  forNode(name: keyof PlasmicGallery__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicGalleryRootProps = PlasmicGallery__VariantsArgs &
  PlasmicGallery__ArgsType & {
    variants?: PlasmicGallery__VariantsArgs;
    args?: PlasmicGallery__ArgsType;
    overrides?: {
      root?: Flex<'div'>;
      select?: Flex<typeof Select>;
    };

    root?: Flex<'div'>;
    select?: Flex<typeof Select>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicGallery__VariantsArgs
    | keyof PlasmicGallery__ArgsType
    | 'variants'
    | 'args'
    | 'root'
    | 'select'
  >;

export const PlasmicGallery = function PlasmicGalleryRoot<
  T extends PlasmicGalleryRootProps
>(props: T & StrictProps<T, PlasmicGalleryRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'root',
    descendantNames: ['root', 'select'],
    internalArgPropNames: PlasmicGallery__ArgProps,
    internalVariantPropNames: PlasmicGallery__VariantProps,
  });

  return PlasmicGallery__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'root',
  });
};

type PlasmicGallerySelectProps = PlasmicGallery__VariantsArgs &
  PlasmicGallery__ArgsType & {
    variants?: PlasmicGallery__VariantsArgs;
    args?: PlasmicGallery__ArgsType;
    overrides?: {
      select?: Flex<typeof Select>;
    };

    select?: Flex<typeof Select>;
  } & Omit<
    Partial<React.ComponentProps<typeof Select>>,
    | keyof PlasmicGallery__VariantsArgs
    | keyof PlasmicGallery__ArgsType
    | 'variants'
    | 'args'
    | 'select'
  >;

PlasmicGallery.select = function PlasmicGallerySelect<
  T extends PlasmicGallerySelectProps
>(props: T & StrictProps<T, PlasmicGallerySelectProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'select',
    descendantNames: ['select'],
    internalArgPropNames: PlasmicGallery__ArgProps,
    internalVariantPropNames: PlasmicGallery__VariantProps,
  });

  return PlasmicGallery__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'select',
  });
};

PlasmicGallery.createRenderer = () => new PlasmicGallery__Renderer({}, {});

export default PlasmicGallery;
/* prettier-ignore-end */
