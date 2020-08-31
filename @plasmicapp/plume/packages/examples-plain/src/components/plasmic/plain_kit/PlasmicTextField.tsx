/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsx createPlasmicElementProxy */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wtmthg1Ku3JDsEq1LhL9ox
// Component: 4nOGTtu8yy
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
import './PlasmicTextField.css'; // plasmic-import: 4nOGTtu8yy/css
import SearchIcon from './PlasmicIcon__Search'; // plasmic-import: gnRTErCL42/icon
import ClearIcon from './PlasmicIcon__Clear'; // plasmic-import: brsBLyIxJA/icon

export type PlasmicTextField__VariantsArgs = {
  withIcons?: MultiChoiceArg<'start' | 'end'>;
  hasLabel?: SingleBooleanChoiceArg<'hasLabel'>;
  isDisabled?: SingleBooleanChoiceArg<'isDisabled'>;
};

export const PlasmicTextField__VariantProps = new Array<
  keyof PlasmicTextField__VariantsArgs
>('withIcons', 'hasLabel', 'isDisabled');

export type PlasmicTextField__ArgsType = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: React.ReactNode;
};

export const PlasmicTextField__ArgProps = new Array<
  keyof PlasmicTextField__ArgsType
>('startIcon', 'endIcon', 'label');

export type PlasmicTextField__OverridesType = {
  root?: Flex<'div'>;
  labelContainer?: Flex<'div'>;
  box?: Flex<'div'>;
  textboxContainer?: Flex<'div'>;
  startIconContainer?: Flex<'div'>;
  start?: Flex<'svg'>;
  textbox?: Flex<'input'>;
  endIconContainer?: Flex<'div'>;
  end?: Flex<'svg'>;
  focusRing?: Flex<'div'>;
};

export interface DefaultTextFieldProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: React.ReactNode;
  withIcons?: MultiChoiceArg<'start' | 'end'>;
  hasLabel?: SingleBooleanChoiceArg<'hasLabel'>;
  isDisabled?: SingleBooleanChoiceArg<'isDisabled'>;
  className?: string;
}

function PlasmicTextField__RenderFunc(props: {
  variants: PlasmicTextField__VariantsArgs;
  args: PlasmicTextField__ArgsType;
  overrides: PlasmicTextField__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const [
    isRootFocusVisibleWithin,
    triggerRootFocusVisibleWithinProps,
  ] = useTrigger('useFocusVisibleWithin', {
    isTextInput: true,
  });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin,
  };

  return (
    <div
      data-plasmic-name={'root'}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames({
        TextField__root__YgOns: true,
        'plasmic-default__all': true,
        'plasmic-default__div': true,
      })}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(hasVariant(variants, 'hasLabel', 'hasLabel') ? true : false) ? (
        <div
          data-plasmic-name={'labelContainer'}
          data-plasmic-override={overrides.labelContainer}
          className={classNames({
            'TextField__labelContainer--hasLabel__GDxiX2D102': hasVariant(
              variants,
              'hasLabel',
              'hasLabel'
            ),

            'TextField__labelContainer--isDisabled__GDxiXvg4N5': hasVariant(
              variants,
              'isDisabled',
              'isDisabled'
            ),

            TextField__labelContainer__GDxiX: true,
            'plasmic-default__all': true,
            'plasmic-default__div': true,
          })}
        >
          <div
            data-plasmic-name={'box'}
            data-plasmic-override={overrides.box}
            className={classNames({
              TextField__box__Fl5nn: true,
              'plasmic-default__all': true,
              'plasmic-default__div': true,
            })}
          >
            <PlasmicSlot
              defaultContents={'Text Label'}
              value={args.label}
              className={classNames({ TextField__slotLabel__xKY3i: true })}
            />
          </div>
        </div>
      ) : null}

      <div
        data-plasmic-name={'textboxContainer'}
        data-plasmic-override={overrides.textboxContainer}
        className={classNames({
          'TextField__textboxContainer--__ky8RZ_sZ7-':
            triggers.focusVisibleWithin_root,
          'TextField__textboxContainer--isDisabled__ky8RZvg4N5': hasVariant(
            variants,
            'isDisabled',
            'isDisabled'
          ),

          TextField__textboxContainer__ky8RZ: true,
          'plasmic-default__all': true,
          'plasmic-default__div': true,
        })}
      >
        {(hasVariant(variants, 'withIcons', 'start') ? true : false) ? (
          <div
            data-plasmic-name={'startIconContainer'}
            data-plasmic-override={overrides.startIconContainer}
            className={classNames({
              'TextField__startIconContainer--start__6qJKxrmhbt': hasVariant(
                variants,
                'withIcons',
                'start'
              ),

              TextField__startIconContainer__6qJKx: true,
              'plasmic-default__all': true,
              'plasmic-default__div': true,
            })}
          >
            <PlasmicSlot
              defaultContents={
                <SearchIcon
                  data-plasmic-name={'start'}
                  data-plasmic-override={overrides.start}
                  className={classNames({
                    'TextField__start__KuHD-': true,
                    'plasmic-default__all': true,
                    'plasmic-default__svg': true,
                  })}
                  role={'img'}
                  {...({} as any)}
                ></SearchIcon>
              }
              value={args.startIcon}
            />
          </div>
        ) : null}

        <input
          data-plasmic-name={'textbox'}
          data-plasmic-override={overrides.textbox}
          className={classNames({
            TextField__textbox__6fh_3: true,
            'plasmic-default__all': true,
            'plasmic-default__input': true,
          })}
          placeholder={'Some placeholder' as const}
          size={1 as const}
          type={'text' as const}
          value={'Some value' as const}
        ></input>

        {(hasVariant(variants, 'withIcons', 'end') ? true : false) ? (
          <div
            data-plasmic-name={'endIconContainer'}
            data-plasmic-override={overrides.endIconContainer}
            className={classNames({
              'TextField__endIconContainer--end__Y7ZzrHiIFF': hasVariant(
                variants,
                'withIcons',
                'end'
              ),

              TextField__endIconContainer__Y7Zzr: true,
              'plasmic-default__all': true,
              'plasmic-default__div': true,
            })}
          >
            <PlasmicSlot
              defaultContents={
                <ClearIcon
                  data-plasmic-name={'end'}
                  data-plasmic-override={overrides.end}
                  className={classNames({
                    TextField__end__T2JtC: true,
                    'plasmic-default__all': true,
                    'plasmic-default__svg': true,
                  })}
                  role={'img'}
                  {...({} as any)}
                ></ClearIcon>
              }
              value={args.endIcon}
            />
          </div>
        ) : null}
        {(triggers.focusVisibleWithin_root ? true : false) ? (
          <div
            data-plasmic-name={'focusRing'}
            data-plasmic-override={overrides.focusRing}
            className={classNames({
              'TextField__focusRing--__j-G3u_sZ7-':
                triggers.focusVisibleWithin_root,
              'TextField__focusRing__j-G3u': true,
              'plasmic-default__all': true,
              'plasmic-default__div': true,
            })}
          ></div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

class PlasmicTextField__Renderer extends Renderer<
  PlasmicTextField__VariantsArgs,
  PlasmicTextField__ArgsType,
  PlasmicTextField__OverridesType,
  'root'
> {
  constructor(
    variants: PlasmicTextField__VariantsArgs,
    args: PlasmicTextField__ArgsType
  ) {
    super(variants, args, PlasmicTextField__RenderFunc, 'root');
  }

  protected create(
    variants: PlasmicTextField__VariantsArgs,
    args: PlasmicTextField__ArgsType
  ) {
    return new PlasmicTextField__Renderer(variants, args);
  }

  getInternalVariantProps(): (keyof PlasmicTextField__VariantsArgs)[] {
    return PlasmicTextField__VariantProps;
  }

  getInternalArgProps(): (keyof PlasmicTextField__ArgsType)[] {
    return PlasmicTextField__ArgProps;
  }

  forNode(
    name: 'focusRing'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      focusRing?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'end'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      end?: Flex<'svg'>;
    }
  >;

  forNode(
    name: 'endIconContainer'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
    }
  >;

  forNode(
    name: 'textbox'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      textbox?: Flex<'input'>;
    }
  >;

  forNode(
    name: 'start'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      start?: Flex<'svg'>;
    }
  >;

  forNode(
    name: 'startIconContainer'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
    }
  >;

  forNode(
    name: 'textboxContainer'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      textboxContainer?: Flex<'div'>;
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
      textbox?: Flex<'input'>;
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
      focusRing?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'box'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      box?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'labelContainer'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      labelContainer?: Flex<'div'>;
      box?: Flex<'div'>;
    }
  >;

  forNode(
    name: 'root'
  ): NodeRenderer<
    PlasmicTextField__VariantsArgs,
    PlasmicTextField__ArgsType,
    {
      root?: Flex<'div'>;
      labelContainer?: Flex<'div'>;
      box?: Flex<'div'>;
      textboxContainer?: Flex<'div'>;
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
      textbox?: Flex<'input'>;
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
      focusRing?: Flex<'div'>;
    }
  >;

  forNode(name: keyof PlasmicTextField__OverridesType) {
    return super.forNode(name);
  }
}

type PlasmicTextFieldRootProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      root?: Flex<'div'>;
      labelContainer?: Flex<'div'>;
      box?: Flex<'div'>;
      textboxContainer?: Flex<'div'>;
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
      textbox?: Flex<'input'>;
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
      focusRing?: Flex<'div'>;
    };

    root?: Flex<'div'>;
    labelContainer?: Flex<'div'>;
    box?: Flex<'div'>;
    textboxContainer?: Flex<'div'>;
    startIconContainer?: Flex<'div'>;
    start?: Flex<'svg'>;
    textbox?: Flex<'input'>;
    endIconContainer?: Flex<'div'>;
    end?: Flex<'svg'>;
    focusRing?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'root'
    | 'labelContainer'
    | 'box'
    | 'textboxContainer'
    | 'startIconContainer'
    | 'start'
    | 'textbox'
    | 'endIconContainer'
    | 'end'
    | 'focusRing'
  >;

export const PlasmicTextField = function PlasmicTextFieldRoot<
  T extends PlasmicTextFieldRootProps
>(props: T & StrictProps<T, PlasmicTextFieldRootProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'root',
    descendantNames: [
      'root',
      'labelContainer',
      'box',
      'textboxContainer',
      'startIconContainer',
      'start',
      'textbox',
      'endIconContainer',
      'end',
      'focusRing',
    ],

    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'root',
  });
};

type PlasmicTextFieldLabelContainerProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      labelContainer?: Flex<'div'>;
      box?: Flex<'div'>;
    };

    labelContainer?: Flex<'div'>;
    box?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'labelContainer'
    | 'box'
  >;

PlasmicTextField.labelContainer = function PlasmicTextFieldLabelContainer<
  T extends PlasmicTextFieldLabelContainerProps
>(props: T & StrictProps<T, PlasmicTextFieldLabelContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'labelContainer',
    descendantNames: ['labelContainer', 'box'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'labelContainer',
  });
};

type PlasmicTextFieldBoxProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      box?: Flex<'div'>;
    };

    box?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'box'
  >;

PlasmicTextField.box = function PlasmicTextFieldBox<
  T extends PlasmicTextFieldBoxProps
>(props: T & StrictProps<T, PlasmicTextFieldBoxProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'box',
    descendantNames: ['box'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'box',
  });
};

type PlasmicTextFieldTextboxContainerProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      textboxContainer?: Flex<'div'>;
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
      textbox?: Flex<'input'>;
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
      focusRing?: Flex<'div'>;
    };

    textboxContainer?: Flex<'div'>;
    startIconContainer?: Flex<'div'>;
    start?: Flex<'svg'>;
    textbox?: Flex<'input'>;
    endIconContainer?: Flex<'div'>;
    end?: Flex<'svg'>;
    focusRing?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'textboxContainer'
    | 'startIconContainer'
    | 'start'
    | 'textbox'
    | 'endIconContainer'
    | 'end'
    | 'focusRing'
  >;

PlasmicTextField.textboxContainer = function PlasmicTextFieldTextboxContainer<
  T extends PlasmicTextFieldTextboxContainerProps
>(props: T & StrictProps<T, PlasmicTextFieldTextboxContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'textboxContainer',
    descendantNames: [
      'textboxContainer',
      'startIconContainer',
      'start',
      'textbox',
      'endIconContainer',
      'end',
      'focusRing',
    ],

    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'textboxContainer',
  });
};

type PlasmicTextFieldStartIconContainerProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      startIconContainer?: Flex<'div'>;
      start?: Flex<'svg'>;
    };

    startIconContainer?: Flex<'div'>;
    start?: Flex<'svg'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'startIconContainer'
    | 'start'
  >;

PlasmicTextField.startIconContainer = function PlasmicTextFieldStartIconContainer<
  T extends PlasmicTextFieldStartIconContainerProps
>(props: T & StrictProps<T, PlasmicTextFieldStartIconContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'startIconContainer',
    descendantNames: ['startIconContainer', 'start'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'startIconContainer',
  });
};

type PlasmicTextFieldStartProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      start?: Flex<'svg'>;
    };

    start?: Flex<'svg'>;
  } & Omit<
    Partial<React.ComponentProps<'svg'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'start'
  >;

PlasmicTextField.start = function PlasmicTextFieldStart<
  T extends PlasmicTextFieldStartProps
>(props: T & StrictProps<T, PlasmicTextFieldStartProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'start',
    descendantNames: ['start'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'start',
  });
};

type PlasmicTextFieldTextboxProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      textbox?: Flex<'input'>;
    };

    textbox?: Flex<'input'>;
  } & Omit<
    Partial<React.ComponentProps<'input'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'textbox'
  >;

PlasmicTextField.textbox = function PlasmicTextFieldTextbox<
  T extends PlasmicTextFieldTextboxProps
>(props: T & StrictProps<T, PlasmicTextFieldTextboxProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'textbox',
    descendantNames: ['textbox'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'textbox',
  });
};

type PlasmicTextFieldEndIconContainerProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      endIconContainer?: Flex<'div'>;
      end?: Flex<'svg'>;
    };

    endIconContainer?: Flex<'div'>;
    end?: Flex<'svg'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'endIconContainer'
    | 'end'
  >;

PlasmicTextField.endIconContainer = function PlasmicTextFieldEndIconContainer<
  T extends PlasmicTextFieldEndIconContainerProps
>(props: T & StrictProps<T, PlasmicTextFieldEndIconContainerProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'endIconContainer',
    descendantNames: ['endIconContainer', 'end'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'endIconContainer',
  });
};

type PlasmicTextFieldEndProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      end?: Flex<'svg'>;
    };

    end?: Flex<'svg'>;
  } & Omit<
    Partial<React.ComponentProps<'svg'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'end'
  >;

PlasmicTextField.end = function PlasmicTextFieldEnd<
  T extends PlasmicTextFieldEndProps
>(props: T & StrictProps<T, PlasmicTextFieldEndProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'end',
    descendantNames: ['end'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'end',
  });
};

type PlasmicTextFieldFocusRingProps = PlasmicTextField__VariantsArgs &
  PlasmicTextField__ArgsType & {
    variants?: PlasmicTextField__VariantsArgs;
    args?: PlasmicTextField__ArgsType;
    overrides?: {
      focusRing?: Flex<'div'>;
    };

    focusRing?: Flex<'div'>;
  } & Omit<
    Partial<React.ComponentProps<'div'>>,
    | keyof PlasmicTextField__VariantsArgs
    | keyof PlasmicTextField__ArgsType
    | 'variants'
    | 'args'
    | 'focusRing'
  >;

PlasmicTextField.focusRing = function PlasmicTextFieldFocusRing<
  T extends PlasmicTextFieldFocusRingProps
>(props: T & StrictProps<T, PlasmicTextFieldFocusRingProps>) {
  const { variants, args, overrides } = deriveRenderOpts(props, {
    name: 'focusRing',
    descendantNames: ['focusRing'],
    internalArgPropNames: PlasmicTextField__ArgProps,
    internalVariantPropNames: PlasmicTextField__VariantProps,
  });

  return PlasmicTextField__RenderFunc({
    variants,
    args,
    overrides,
    forNode: 'focusRing',
  });
};

PlasmicTextField.createRenderer = () => new PlasmicTextField__Renderer({}, {});

export default PlasmicTextField;
/* prettier-ignore-end */
