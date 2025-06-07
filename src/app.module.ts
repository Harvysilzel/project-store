import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MarcasModule } from './marcas/marcas.module';
import { FilesModule } from './files/files.module';
import { FilesPdfModule } from './filesPDF/pdfFiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d12bllmmcj7s73f759dg-a.oregon-postgres.render.com',
      port: 5432,
      username: 'db_plaza_emprende_user',
      password: 'DMEFS7fDRgZoNNsr6YjeICXtD0pMGtEI',
      database: 'db_plaza_emprende',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    ProductsModule,
    UsersModule,
    MarcasModule,
    FilesModule,
    FilesPdfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
