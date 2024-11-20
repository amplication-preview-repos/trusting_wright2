import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JobPreferenceServiceBase } from "./base/jobPreference.service.base";

@Injectable()
export class JobPreferenceService extends JobPreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
