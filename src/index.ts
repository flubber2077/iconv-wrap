export default function IconvWrap(buffer: Buffer, options?: Options): Buffer {
    //General setup
    options = options || {};
    if (buffer == null) {
      return buffer;
    }
    const width = options?.width || 50;
    if (typeof options.newline == "string") {
      options.newline = options.newline.charCodeAt(0);
    }
    const newline = options.newline || "\n".charCodeAt(0);
    const space = " ".charCodeAt(0);
    const numberArray = Array.from(buffer);
    let i = 0;
    while (i < numberArray.length) {
      const arrayPiece = numberArray.slice(i, i + width + 1);
      if (arrayPiece.lastIndexOf(newline) > 0) {
        i += arrayPiece.lastIndexOf(newline);
        continue;
      }
      const returnIndex =
        arrayPiece.lastIndexOf(space) > 1
          ? arrayPiece.lastIndexOf(space) + 1
          : width + 1;
      if (arrayPiece[returnIndex - 1] == space) {
        numberArray[i + returnIndex - 1] = newline;
      } else {
        numberArray.splice(i + returnIndex, 0, newline);
      }
      i += returnIndex + 1;
    }
  
    return Buffer.from(numberArray);
  }
  
  export type Options = {
    width?: number;
    newline?: number | string;
    nonSpace?: number[];
    space?: number | string;
    trim?: boolean;
    cut?: boolean;
  };