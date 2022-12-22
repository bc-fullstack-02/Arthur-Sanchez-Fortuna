// criacção do Dropzone, aula 11 min 24
import {useCallback, useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { Image } from 'phosphor-react';
import { Text } from '../Text';

// interface, aula 11 min 34
interface DropzoneProps {
    onFileUploaded: (file: File) => void;
};


export function Dropzone({onFileUploaded}: DropzoneProps){
    const [selectFieldURL, setselectFieldURL] = useState("");

    // explicação url aula 11 min 30
    const onDrop = useCallback((acceptedFiles: any[]) => {
        const file = acceptedFiles[0];
        const fileURL = URL.createObjectURL(file);
        
        setselectFieldURL(fileURL);
        onFileUploaded(file);

      }, [onFileUploaded]);
      
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
    
      return (
        <div className='flex flex-row' {...getRootProps()}>
          <input {...getInputProps()} />
          {/* pelo q eu entendi agr vai importar 1 parametro/função pra mandar img */}
          {selectFieldURL ?(
            <img src={selectFieldURL} alt="Foto" />
          ):(
            <p className='flex items-center gap-2'>
                <Image size={48} width='thin' />
                <Text>Arraste a Imagem ou Clique Aqui para Selecionar!</Text>
            </p>
          )}
        </div>
      );
};

