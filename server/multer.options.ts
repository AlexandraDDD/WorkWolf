/* import { diskStorage } from 'multer';
import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';

export const multerOptions = {
  imports: [MulterModule.registerAsync({
    useFactory: () => ({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, file.fieldname + '-' + uniqueSuffix);
        },
      }),
      fileSize: 5 * 1024 * 1024, // 5 MB
    }),
  })],
};

@Module(multerOptions)
export class MulterModule {}
 */