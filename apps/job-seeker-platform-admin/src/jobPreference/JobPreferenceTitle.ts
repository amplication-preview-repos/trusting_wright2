import { JobPreference as TJobPreference } from "../api/jobPreference/JobPreference";

export const JOBPREFERENCE_TITLE_FIELD = "id";

export const JobPreferenceTitle = (record: TJobPreference): string => {
  return record.id?.toString() || String(record.id);
};
