import { Storage } from "../interfaces/storage";
import Archivo from "../models/storage";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
  const responseItem = await Archivo.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
