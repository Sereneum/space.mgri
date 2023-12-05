import {
  DownloadSimple,
  ArrowSquareOut,
  LinkSimple,
  FileImage,
  FilePdf,
  FileText,
  FileZip,
  FilePpt,
  FileXls,
  FileDoc,
  File,
  FileJpg,
} from '@phosphor-icons/react';

import { constUrl } from '../http/consts.js';

const list_preview_format = [
  'pdf', 'jpeg', 'jpg', 'png', 'tiff',
];

export const assignorIconDownload = (fileName) => {
  if (!fileName) return <ArrowSquareOut weight="bold" className="icon_mid"/>;

  const format_file = fileName.slice(fileName.lastIndexOf('.') + 1);
  if (list_preview_format.find((e) => e === format_file) !== undefined) { return <ArrowSquareOut weight="bold" className="icon_mid"/>; }
  return <DownloadSimple weight="bold" className="icon_mid"/>;
};

export const assignorIcon = (fileName) => {
  if (!fileName) return <LinkSimple weight="bold" className="icon_mid" />;
  const format = fileName.slice(fileName.lastIndexOf('.') + 1);

  switch (format) {
    case 'xlsx':
      return <FileXls weight="bold" className="icon_mid" />;
    case 'xls':
      return <FileXls weight="bold" className="icon_mid" />;
    case 'docx':
      return <FileDoc weight="bold" className="icon_mid" />;
    case 'doc':
      return <FileDoc weight="bold" className="icon_mid" />;
    case 'pdf':
      return <FilePdf weight="bold" className="icon_mid" />;
    case 'pptx':
      return <FilePpt weight="bold" className="icon_mid" />;
    case 'ppt':
      return <FilePpt weight="bold" className="icon_mid" />;
    case 'zip':
      return <FileZip weight="bold" className="icon_mid" />;
    case 'png':
      return <FileImage weight="bold" className="icon_mid" />;
    case 'jpeg':
      return <FileJpg weight="bold" className="icon_mid" />;
    case 'tiff':
      return <FileImage weight="bold" className="icon_mid" />;
    case 'jpg':
      return <FileJpg weight="bold" className="icon_mid" />;
    case 'txt':
      return <FileText weight="bold" className="icon_mid" />;
    default:
      return <File weight="bold" className="icon_mid" />;
  }
};

const downloadFunc = (url) => {
  const headers = new Headers({
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  });
  const options = {
    method: 'GET',
    headers,
  };

  fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        console.log('response', response);
        // Получите имя файла из заголовка Content-Disposition
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileNameMatch = contentDisposition.match(/filename="(.*?)"/);

        if (fileNameMatch && fileNameMatch[1]) {
          const fileName = fileNameMatch[1];

          // Преобразуйте ответ в blob
          return response.blob().then((blob) => {
            // Создайте временную ссылку для скачивания файла
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;

            // Добавьте ссылку на страницу и симулируйте клик
            document.body.appendChild(a);
            a.click();

            // Освободите ресурсы
            window.URL.revokeObjectURL(url);
          });
        }
      } else {
        console.error('Ошибка при загрузке файла:', response.status);
      }
    })
    .catch((error) => {
      // Обработка ошибки, если это необходимо
      console.error(error);
    });
};

export const handleDownload = (fileName, link, fileID = null) => {
  if (fileName) {
    window.open(`${constUrl}${link}`, '_blank');
    return;
  }

  if (link) {
    window.open(link);
  }
};
