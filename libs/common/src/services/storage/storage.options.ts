export interface StorageModuleOptions {
  s3: {
    region: string;
    accessKeyId: string;
    secretAccessKey: string;
    bucketName: string;
    endpoint?: string;
    maxFileSize?: number;
  };
}

export const STORAGE_MODULE_OPTIONS = Symbol('STORAGE_MODULE_OPTIONS');
