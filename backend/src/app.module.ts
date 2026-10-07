import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { RolesModule } from './modules/roles/roles.module';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { PatientsModule } from './modules/patients/patients.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { QueueModule } from './modules/queue/queue.module';
import { ClinicalModule } from './modules/clinical/clinical.module';
import { DiagnosesModule } from './modules/diagnoses/diagnoses.module';
import { MedicationsModule } from './modules/medications/medications.module';
import { PrescriptionsModule } from './modules/prescriptions/prescriptions.module';
import { BillingModule } from './modules/billing/billing.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { EmergencyModule } from './modules/emergency/emergency.module';
import { AuditModule } from './modules/audit/audit.module';
import { BackupModule } from './modules/backup/backup.module';
import { SecurityModule } from './modules/security/security.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    RolesModule,
    PermissionsModule,
    PatientsModule,
    AppointmentsModule,
    QueueModule,
    ClinicalModule,
    DiagnosesModule,
    MedicationsModule,
    PrescriptionsModule,
    BillingModule,
    NotificationsModule,
    EmergencyModule,
    AuditModule,
    BackupModule,
    SecurityModule,
  ],
})
export class AppModule {}
