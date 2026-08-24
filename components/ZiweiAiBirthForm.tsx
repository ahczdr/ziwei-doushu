'use client';

import { useRef } from 'react';
import BirthForm, { type BirthFormState } from '@/components/BirthForm';
import type { BirthInfo } from '@/lib/ziwei/types';
import { calculateTrueSolarTime } from '@/lib/ziwei-ai/chart-engine/true-solar-time';

interface ZiweiAiBirthFormProps {
  onSubmit: (info: BirthInfo) => void;
  loading?: boolean;
}

/**
 * Release bridge for the legacy BirthForm.
 *
 * The legacy form UI keeps its existing behavior, but the Ziwei AI chart path
 * receives a date-aware true-solar timestamp. This preserves cross-midnight
 * correction and iztro's late-Zi index=12 instead of collapsing it to 0.
 */
export default function ZiweiAiBirthForm({ onSubmit, loading }: ZiweiAiBirthFormProps) {
  const latest = useRef<BirthFormState | null>(null);

  return (
    <BirthForm
      loading={loading}
      onFormSave={(state) => {
        latest.current = state;
      }}
      onSubmit={(legacyInfo) => {
        const state = latest.current;
        if (!state || state.unknownTime) {
          onSubmit(legacyInfo);
          return;
        }

        const year = Number(state.year);
        const month = Number(state.month);
        const day = Number(state.day);
        const hour = Number(state.clockHour);
        const minute = Number(state.clockMinute);

        try {
          const solar = calculateTrueSolarTime({
            year,
            month,
            day,
            hour,
            minute,
            longitude: state.longitude,
          });

          onSubmit({
            ...legacyInfo,
            // Keep enhanced and standard charts on the same effective civil date.
            year: solar.year,
            month: solar.month,
            day: solar.day,
            hour: solar.hourIndex,
            trueSolarTime: solar.isoLocal,
          });
        } catch {
          // Validation already happens in BirthForm. Fail safe to the legacy input
          // rather than preventing chart generation if an unexpected bridge error occurs.
          onSubmit(legacyInfo);
        }
      }}
    />
  );
}
