import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { JobPreferenceService } from "./jobPreference.service";
import { JobPreferenceControllerBase } from "./base/jobPreference.controller.base";

@swagger.ApiTags("jobPreferences")
@common.Controller("jobPreferences")
export class JobPreferenceController extends JobPreferenceControllerBase {
  constructor(
    protected readonly service: JobPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
