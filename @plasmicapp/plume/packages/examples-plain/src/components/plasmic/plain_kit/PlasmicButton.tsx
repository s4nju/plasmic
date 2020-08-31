/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wtmthg1Ku3JDsEq1LhL9ox
// Component: XF8C-4i94Q
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

import '@plasmicapp/react-web/lib/plasmic.css';
import '../plasmic__default_style.css'; // plasmic-import: global/defaultcss
import './plasmic_plain_kit.css'; // plasmic-import: wtmthg1Ku3JDsEq1LhL9ox/projectcss
import './PlasmicButton.css'; // plasmic-import: XF8C-4i94Q/css
import CheckIcon from './PlasmicIcon__Check'; // plasmic-import: g6WlrAGLKi/icon

export type PlasmicButton__VariantsArgs = {
  withIcons?: MultiChoiceArg<'start' | 'end'>;
  isDisabled?: SingleBooleanChoiceArg<'isDisabled'>;
};

export const PlasmicButton__VariantProps = new Array<
  keyof PlasmicButton__VariantsArgs
>('withIcons', 'isDisabled');

export type PlasmicButton__ArgsType = {
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
};

export const PlasmicButton__ArgProps = new Array<keyof PlasmicButton__ArgsType>(
  'endIcon',
  'startIcon',
  'children'
);

export type PlasmicButton__OverridesType = {
  root?: Flex<'button'>;
  startIconContainer?: Flex<'div'>;
  contentContainer?: Flex<'div'>;
  endIconContainer?: Flex<'div'>;
  focusRing?: Flex<'div'>;
};

export interface DefaultButtonProps {
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  children?: React.ReactNode;
  withIcons?: MultiChoiceArg<'start' | 'end'>;
  isDisabled?: SingleBooleanChoiceArg<'isDisabled'>;
  className?: string;
}

function PlasmicButton__RenderFunc(props: {
  variants: PlasmicButton__VariantsArgs;
  args: PlasmicButton__ArgsType;
  overrides: PlasmicButton__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [isRootFocusVisible, triggerRootFocusVisibleProps] = useTrigger(
    'useFocusVisible',
    {
      isTextInput: false,
    }
  );

  const triggers = {
    focusVisible_root: isRootFocusVisible,
  };

  return (
    <button
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      data-plasmic-wrap-flex-child={true}
      className={classNames({
        'Button__root--__mk6R6WvRj1': triggers.focusVisible_root,
        'Button__root--end__mk6R62NES3': hasVariant(
          variants,
          'withIcons',
          'end'
        ),

        'Button__root--isDisabled__mk6R6ZQV0J': hasVariant(
          variants,
          'isDisabled',
          'isDisabled'
        ),

        Button__root__mk6R6: true,
        'plasmic-default__all': true,
        'plasmic-default__button': true,
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleProps]}
    >
      {(hasVariant(variants, 'withIcons', 'start') ? true : false) ? (
        <div
          data-plasmic-name={'startIconContainer'}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames({
            'Button__startIconContainer--__HVGu8WvRj1':
              triggers.focusVisible_root,
            'Button__startIconContainer--end__HVGu82NES3': hasVariant(
              variants,
              'withIcons',
              'end'
            ),

            'Button__startIconContainer--start__HVGu8s-B1T': hasVariant(
              variants,
              'withIcons',
              'start'
            ),

            Button__startIconContainer__HVGu8: true,
            'plasmic-default__all': true,
            'plasmic-default__div': true,
          })}
        >
          <PlasmicSlot
            defaultContents={
              <CheckIcon
                className={classNames({
                  Button__svg__kuJlO: true,
                  'plasmic-default__all': true,
                  'plasmic-default__svg': true,
                })}
                role={'img'}
                {...({} as any)}
              ></CheckIcon>
            }
            value={args.startIcon}
          />
        </div>
      ) : null}

      <div
        data-plasmic-name={'contentContainer'}
        data-plasmic-override={overrides.contentContainer}
        className={classNames({
          Button__contentContainer__DQZs8: true,
          'plasmic-default__all': true,
          'plasmic-default__div': true,
        })}
      >
        <PlasmicSlot defaultContents={'Button'} value={args.children} />
      </div>

      {(hasVariant(variants, 'withIcons', 'end') ? true : false) ? (
        <div
          data-plasmic-name={'endIconContainer'}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames({
            'Button__endIconContainer--end__EySMt2NES3': hasVariant(
              variants,
              'withIcons',
              'end'
            ),

            Button__endIconContainer__EySMt: true,
            'plasmic-default__all': true,
            'plasmic-default__div': true,
          })}
        >
          <PlasmicSlot
            defaultContents={
              <CheckIcon
                className={classNames({
                  Button__svg__ewcNy: true,
                  'plasmic-default__all': true,
                  'plasmic-default__svg': true,
                })}
                role={'img'}
                {...({} as any)}
              ></CheckIcon>
            }
            value={args.endIcon}
          />
        </div>
      ) : null}
      {(triggers.focusVisible_root ? true : false) ? (
        <div
          data-plasmic-name={'focusRing'}
          data-plasmic-override={overrides.focusRing}
          className={classNames({
            'Button__focusRing--__cPTaxWvRj1': triggers.focusVisible_root,
            Button__focusRing__cPTax: true,
            'plasmic-default__all': true,
            'plasmic-default__div': true,
          })}
        ></div>
      ) : null}
    </button>
  ) as React.ReactElement | null;
}

class PlasmicButton__Renderer extends Renderer<
  PlasmicButton__VariantsArgs,
  PlasmicButton__ArgsType,
  PlasmicButton__OverridesType,
  'root'
> {
  constructor(
    variants: PlasmicButton__VariantsArgs,
    args: PlasmicButton__ArgsType
  ) {
    super(variants, args, PlasmicButton__RenderFunc, 'root');
  }

  protected create(
    variants: PlasmicButton__VariantsArgs,
    args: PlasmicButton__ArgsType
  ) {
    return new PlasmicButton__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicButton__VariantsArgs)[] {
    return PlasmicButton__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicButton__ArgsType)[] {
    return PlasmicButton__ArgProps;
  }

  forNode(
    name: 'focusRing'
  ): NodeRenderer<
    PlasmicButton__VariantsArgs,
    PlasmicButton__ArgsType,
    {
      focusRing?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'endIconContainer'
  ): NodeRenderer<
    PlasmicButton__VariantsArgs,
    PlasmicButton__ArgsType,
    {
      endIconContainer?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'contentContainer'
  ): NodeRenderer<
    PlasmicButton__VariantsArgs,
    PlasmicButton__ArgsType,
    {
      contentContainer?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'startIconContainer'
  ): NodeRenderer<
    PlasmicButton__VariantsArgs,
    PlasmicButton__ArgsType,
    {
      startIconContainer?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'root'
  ): NodeRenderer<
    PlasmicButton__VariantsArgs,
    PlasmicButton__ArgsType,
    {
      root?: Flex<'button'>;
      startIconContainer?: Flex<'div'>;
      contentContainer?: Flex<'div'>;
      endIconContainer?: Flex<'div'>;
      focusRing?: Flex<'div'>;
    }
  >;

  forNode(name: keyof PlasmicButton__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicButtonRootProps = PlasmicButton__VariantsArgs &
  PlasmicButton__ArgsType & {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: {
      root?: Flex<'button'>;
      startIconContainer?: Flex<'div'>;
      contentContainer?: Flex<'div'>;
      endIconContainer?: Flex<'div'>;
      focusRing?: Flex<'div'>;
    };

    root?: Flex<'button'>;
    startIconContainer?: Flex<'div'>;
    contentContainer?: Flex<'div'>;
    endIconContainer?: Flex<'div'>;
    focusRing?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'button'>>,
    | keyof PlasmicButton__VariantsArgs
    | keyof PlasmicButton__ArgsType
    | 'variants'
    | 'args'
    | 'root'
    | 'startIconContainer'
    | 'contentContainer'
    | 'endIconContainer'
    | 'focusRing'
  >;

export const PlasmicButton = function PlasmicButtonRoot<
  T extends PlasmicButtonRootProps
>(props: T & StrictProps<T, PlasmicButtonRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'root',
    descendantNames: [
      'root',
      'startIconContainer',
      'contentContainer',
      'endIconContainer',
      'focusRing',
    ],

    internalArgPropNames: PlasmicButton__ArgProps,
    internalVariantPropNames: PlasmicButton__VariantProps,
  });

  return PlasmicButton__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'root',
  });
};

type PlasmicButtonStartIconContainerProps = PlasmicButton__VariantsArgs &
  PlasmicButton__ArgsType & {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: {
      startIconContainer?: Flex<'div'>;
    };

    startIconContainer?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicButton__VariantsArgs
    | keyof PlasmicButton__ArgsType
    | 'variants'
    | 'args'
    | 'startIconContainer'
  >;

PlasmicButton.startIconContainer = function PlasmicButtonStartIconContainer<
  T extends PlasmicButtonStartIconContainerProps
>(props: T & StrictProps<T, PlasmicButtonStartIconContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'startIconContainer',
    descendantNames: ['startIconContainer'],
    internalArgPropNames: PlasmicButton__ArgProps,
    internalVariantPropNames: PlasmicButton__VariantProps,
  });

  return PlasmicButton__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'startIconContainer',
  });
};

type PlasmicButtonContentContainerProps = PlasmicButton__VariantsArgs &
  PlasmicButton__ArgsType & {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: {
      contentContainer?: Flex<'div'>;
    };

    contentContainer?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicButton__VariantsArgs
    | keyof PlasmicButton__ArgsType
    | 'variants'
    | 'args'
    | 'contentContainer'
  >;

PlasmicButton.contentContainer = function PlasmicButtonContentContainer<
  T extends PlasmicButtonContentContainerProps
>(props: T & StrictProps<T, PlasmicButtonContentContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'contentContainer',
    descendantNames: ['contentContainer'],
    internalArgPropNames: PlasmicButton__ArgProps,
    internalVariantPropNames: PlasmicButton__VariantProps,
  });

  return PlasmicButton__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'contentContainer',
  });
};

type PlasmicButtonEndIconContainerProps = PlasmicButton__VariantsArgs &
  PlasmicButton__ArgsType & {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: {
      endIconContainer?: Flex<'div'>;
    };

    endIconContainer?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicButton__VariantsArgs
    | keyof PlasmicButton__ArgsType
    | 'variants'
    | 'args'
    | 'endIconContainer'
  >;

PlasmicButton.endIconContainer = function PlasmicButtonEndIconContainer<
  T extends PlasmicButtonEndIconContainerProps
>(props: T & StrictProps<T, PlasmicButtonEndIconContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'endIconContainer',
    descendantNames: ['endIconContainer'],
    internalArgPropNames: PlasmicButton__ArgProps,
    internalVariantPropNames: PlasmicButton__VariantProps,
  });

  return PlasmicButton__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'endIconContainer',
  });
};

type PlasmicButtonFocusRingProps = PlasmicButton__VariantsArgs &
  PlasmicButton__ArgsType & {
    variants?: PlasmicButton__VariantsArgs;
    args?: PlasmicButton__ArgsType;
    overrides?: {
      focusRing?: Flex<'div'>;
    };

    focusRing?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicButton__VariantsArgs
    | keyof PlasmicButton__ArgsType
    | 'variants'
    | 'args'
    | 'focusRing'
  >;

PlasmicButton.focusRing = function PlasmicButtonFocusRing<
  T extends PlasmicButtonFocusRingProps
>(props: T & StrictProps<T, PlasmicButtonFocusRingProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'focusRing',
    descendantNames: ['focusRing'],
    internalArgPropNames: PlasmicButton__ArgProps,
    internalVariantPropNames: PlasmicButton__VariantProps,
  });

  return PlasmicButton__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'focusRing',
  });
};

PlasmicButton.createRenderer = () => new PlasmicButton__Renderer({}, {});

export default PlasmicButton;
/* prettier-ignore-end */
