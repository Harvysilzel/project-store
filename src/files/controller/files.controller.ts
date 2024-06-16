import { BadRequestException, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from '../services/files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../../helpers/fileFilter.helper'; // Ajusta la ruta de importación según tu estructura de directorios
import { diskStorage } from 'multer';
import { fileNamer } from '../../helpers/fileNamer.helper'; // Ajusta la ruta de importación según tu estructura de directorios
import { Response } from 'express';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        fileFilter: fileFilter,
        storage: diskStorage({
            destination: './static/products',
            filename: fileNamer,
        }),
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Asegurese que el archivo es una imagen');
        }

        const url = `${file.filename}`;
        return { url };
    }

    @Post('uploadusers')
    @UseInterceptors(FileInterceptor('file', {
        fileFilter: fileFilter,
        storage: diskStorage({
            destination: './static/users',
            filename: fileNamer,
        }),
    }))
    uploadUserFile(@UploadedFile() file: Express.Multer.File) {
        if (!file) {
            throw new BadRequestException('Asegurese que el archivo es una imagen');
        }

        const url = `${file.filename}`;
        return { url };
    }

    @Get('product/:imageName')
    findProduct(@Res() res: Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticImageName(imageName);
        res.sendFile(path);
    }

    @Get('user/:imageName')
    findUser(@Res() res: Response, @Param('imageName') imageName: string) {
        const path = this.filesService.getStaticImageName(imageName);
        res.sendFile(path);
    }
}