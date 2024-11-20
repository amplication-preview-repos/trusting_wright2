import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { JobPreferenceModuleBase } from "./base/jobPreference.module.base";
import { JobPreferenceService } from "./jobPreference.service";
import { JobPreferenceController } from "./jobPreference.controller";
import { JobPreferenceResolver } from "./jobPreference.resolver";

@Module({
  imports: [JobPreferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [JobPreferenceController],
  providers: [JobPreferenceService, JobPreferenceResolver],
  exports: [JobPreferenceService],
})
export class JobPreferenceModule {}
