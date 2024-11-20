import { JobPreferenceWhereInput } from "./JobPreferenceWhereInput";
import { JobPreferenceOrderByInput } from "./JobPreferenceOrderByInput";

export type JobPreferenceFindManyArgs = {
  where?: JobPreferenceWhereInput;
  orderBy?: Array<JobPreferenceOrderByInput>;
  skip?: number;
  take?: number;
};
