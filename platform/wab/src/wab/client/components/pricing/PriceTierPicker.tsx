// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { AppCtx } from "@/wab/client/app-ctx";
import { PriceTierStatus } from "@/wab/client/components/pricing/PriceTier";
import GlobalContextsProvider from "@/wab/client/plasmic/plasmic_kit_dashboard/PlasmicGlobalContextsProvider";
import {
  DefaultPriceTierPickerProps,
  PlasmicPriceTierPicker,
} from "@/wab/client/plasmic/plasmic_kit_pricing/PlasmicPriceTierPicker";
import { ApiFeatureTier, BillingFrequency } from "@/wab/shared/ApiSchema";
import { DEVFLAGS } from "@/wab/shared/devflags";
import {
  isEnterprise,
  newTiers,
  tiers,
} from "@/wab/shared/pricing/pricing-utils";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as React from "react";

interface PriceTierPickerProps extends DefaultPriceTierPickerProps {
  appCtx: AppCtx;
  // Which tiers should we offer?
  availableTiers: ApiFeatureTier[];
  // Which tier are we currently on?
  // If null, assume we're on "Starter"
  currentFeatureTier?: ApiFeatureTier;
  // Callback when selecting a feature
  onSelectFeatureTier: (tier: ApiFeatureTier) => Promise<void>;
  // If false, the team already had a free trial before
  canStartFreeTrial: boolean;
  // Callback when starting a free trial
  onStartFreeTrial: () => Promise<void>;
  // If true, is currently on a free trial
  isFreeTrialTeam: boolean;
  // Disable all buttons
  disabled?: boolean;
  // Hide whichever is the current tier
  hideCurrentTier?: boolean;
  // Hide the legacy tier
  hideLegacyTier?: boolean;
  // Hide the free tier
  hideFree?: boolean;
  // Hide the enterprise tier
  hideEnterprise?: boolean;
  titleBar?: {
    // Show title bar (default hidden)
    show: boolean;
    // Team name to display
    teamName: string;
  };
  billingFrequency?: BillingFrequency;
  showBillingFrequencyToggle?: {
    onSetBillingFreq: (freq: BillingFrequency) => void;
    disabled?: boolean;
  };
  // Manually override what gets shown on every PriceTier button (via `status` variant)
  overrideStatus?: PriceTierStatus;
}

function PriceTierPicker_(
  props: PriceTierPickerProps,
  ref: HTMLElementRefOf<"div">
) {
  const {
    appCtx,
    availableTiers,
    currentFeatureTier,
    onSelectFeatureTier,
    canStartFreeTrial,
    onStartFreeTrial,
    isFreeTrialTeam,
    disabled,
    hideCurrentTier,
    hideLegacyTier,
    hideFree,
    hideEnterprise,
    titleBar,
    billingFrequency,
    showBillingFrequencyToggle,
    overrideStatus,
    ...rest
  } = props;
  const tierData: Record<string, ApiFeatureTier> = {};
  (DEVFLAGS.useNewFeatureTiers ? newTiers : tiers).forEach((tier) => {
    const currentTier = availableTiers.find((t) =>
      t.name.toLowerCase().includes(tier)
    );
    if (currentTier) {
      tierData[tier] = currentTier;
    }
  });
  tierData["free"] = DEVFLAGS.freeTier;
  const enterpriseTierData = availableTiers.find(isEnterprise);

  const isOnFreeTier =
    !currentFeatureTier || DEVFLAGS.freeTier.id === currentFeatureTier?.id;

  const getPriceTierProps = (featureTier?: ApiFeatureTier) => {
    // If we can't find the data for the feature tier, just hide it for now
    // Check studio.plasmic.app/admin to make sure it is defined.
    if (!featureTier) {
      return {
        hide: true,
      };
    }

    const isCurrent =
      (!currentFeatureTier && featureTier === DEVFLAGS.freeTier) ||
      featureTier.id === currentFeatureTier?.id;
    const status: PriceTierStatus = overrideStatus
      ? overrideStatus
      : isCurrent && isFreeTrialTeam
      ? "freeTrialCurrent"
      : isCurrent
      ? "current"
      : featureTier === DEVFLAGS.freeTier || disabled
      ? "unavailable"
      : canStartFreeTrial && isOnFreeTier && appCtx.appConfig.freeTrial
      ? "startFreeTrial"
      : "upgrade";
    const hide =
      (!!hideCurrentTier && status === "current") ||
      (!!hideFree && featureTier === DEVFLAGS.freeTier) ||
      // Hide all other tiers if on Enterprise
      (featureTier !== currentFeatureTier && isEnterprise(currentFeatureTier));

    return {
      featureTier,
      status,
      billingFrequency,
      hide,
      onClick: async () => {
        // Neuter the onClick for inactive tiles
        if (status === "current" || status === "unavailable") {
          return;
        }
        if (status === "startFreeTrial") {
          await onStartFreeTrial();
          return;
        }
        await onSelectFeatureTier(featureTier);
      },
    };
  };

  return (
    <GlobalContextsProvider>
      <PlasmicPriceTierPicker
        root={{ ref }}
        {...rest}
        showTitle={titleBar?.show}
        teamName={titleBar?.teamName ?? "Your Team"}
        // Show an extra feature tier if I can't find my available one
        showGrandfatheredTier={
          !hideLegacyTier &&
          !hideCurrentTier &&
          !!currentFeatureTier &&
          currentFeatureTier.id !== DEVFLAGS.freeTier.id &&
          !isEnterprise(currentFeatureTier) &&
          !availableTiers.find((t) => t.id === currentFeatureTier?.id)
        }
        newGrandfatheredTier={{
          featureTier: currentFeatureTier,
          status: "current",
          billingFrequency: billingFrequency,
          valueProps: "You are on a grandfathered plan.",
          isLegacy: true,
        }}
        showBillingFrequency={!!showBillingFrequencyToggle}
        billingFrequencyToggle={{
          // Don't let users switch billingFreq if they already have a subscription
          isDisabled: showBillingFrequencyToggle?.disabled,
          isChecked: billingFrequency === "year",
          onChange: (checked: boolean) => {
            if (!showBillingFrequencyToggle) {
              return;
            } else if (checked) {
              showBillingFrequencyToggle.onSetBillingFreq("year");
            } else {
              showBillingFrequencyToggle.onSetBillingFreq("month");
            }
          },
        }}
        billingFrequency={billingFrequency}
        newFreeTier={{ ...getPriceTierProps(tierData["free"]) }}
        newStarterTier={{ ...getPriceTierProps(tierData["starter"]) }}
        newProTier={{ ...getPriceTierProps(tierData["pro"]) }}
        newTeamTier={{ ...getPriceTierProps(tierData["team"]) }}
        newEnterpriseTier={{
          featureTier: enterpriseTierData,
          status: isEnterprise(currentFeatureTier) ? "current" : "manual",
          hide: hideEnterprise,
          // Enterprise will always go to a Typeform
          onClick: async () => {
            // Only open a new window if *not* already on enterprise plan
            if (!isEnterprise(currentFeatureTier)) {
              window.open(
                "https://www.plasmic.app/enterprise-contact",
                "_blank"
              );
            }
          },
        }}
      />
    </GlobalContextsProvider>
  );
}

const PriceTierPicker = React.forwardRef(PriceTierPicker_);
export default PriceTierPicker;
