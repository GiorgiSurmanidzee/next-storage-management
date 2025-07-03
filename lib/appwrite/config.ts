export const appWriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
  dbId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_FILES!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE!,
  secretKey: process.env.NEXT_APPWRITE_KEY!
};
