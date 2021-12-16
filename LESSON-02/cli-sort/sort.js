import fs from 'fs/promises';
import path from 'path';

class SortFiles {
  #dist
  constructor (dist) {
    this.#dist = dist;
  }

  async #copyFile(file) {
  const nameTargetDir = path.extname(file.name); 
  const targetDir = path.join(this.#dist, nameTargetDir);
  try {
    await fs.mkdir(targetDir, { recursive: true }); 
    await fs.copyFile(file.path, path.join(targetDir, file.name)); 
  } catch {
    console.error(error);
    process.exit(1);
  }
};

async readFolder(base) {
  const files = await fs.readdir(base); 
  for (const item of files) {
    const localBase = path.join(base, item);
    const state = await fs.stat(localBase);
    if(state.isFile()) {
      // console.log(localBase);
      await this.#copyFile({ name: item, path: localBase }); 
    } else {
      await this.readFolder(localBase);
    }
  }
};
}

export default SortFiles;

/* const DIST = 'dist';
const copyFile = async (file) => {
  const nameTargetDir = path.extname(file.name); //---ВЫТАСКИВАЕМ РАСШИРЕНИЕ. ФОРМАТ (.jpg)---//
  const targetDir = path.join(DIST, nameTargetDir); //dist/.jpg--//СОЗДАЕМ ПУТЬ И КЛАДЕМ В ПАПКУ ФАЙЛЫ
  try {
    await fs.mkdir(targetDir, { recursive: true }); //---СОЗДАЕМ ДЕРИКТОРИЮ РЕКУРСИВНО---//
    await fs.copyFile(file.path, path.join(targetDir, file.name)); //---КОПИРУЕМ---//
  } catch {
    console.error(error);
    process.exit(1);
  }
};

const readFolder = async (base) => {
  const files = await fs.readdir(base); //---ЧИТАЕМ ФАЙЛ---//
  for (const item of files) {
    const localBase = path.join(base, item);
    const state = await fs.stat(localBase); //---ОПРЕДЕЛЕНИЕ ТИПА---//
    if(state.isFile()) {
      console.log(localBase);
      await copyFile({ name: item, path: localBase }); //---ЕСЛИ ФАЙЛ ВЫЗЫВАЕМ copyFile--//--УСЛОВИЕ ВЫХОДА ИЗ РЕКУРСИИ--//-ПЕРЕДАЕМ ИМЯ И ПУТЬ
    } else {
      await readFolder(localBase); //--ЕСЛИ ПАПКА, ТО РЕКУРСИВНО ВЫЗЫВАЕМ СЕБЯ---//--РЕКУРСИЯ ПРОВАЛИЛАСЬ--//
    }
    // console.log(state.isFile());
  }
};
readFolder('./picture'); */