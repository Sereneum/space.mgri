import { Trash } from '@phosphor-icons/react';
import { assignorIcon, assignorIconDownload, handleDownload } from '../../managers/files_manager';
import { epoch_deleteFile } from '../../http/epochServer';

/* Прикрепленный файл юзера в задании */
const SolutionFile = ({
  file, isSuccess, loadingTaskData, isLast, fileID,
}) => {
  const download = () => handleDownload(file.nameFile, file.link, fileID);

  const deleteFile = () => {
    if (isSuccess) return;

    epoch_deleteFile(file.fileID)
      .then((r) => {
        console.log(r);
        loadingTaskData();
      })
      .catch((err) => console.log(err));
  };

  return (
        <>
            <div className="container_row_zero">
                <div className="content_elem_row select" onClick={download}>
                    {assignorIcon(file.nameFile)}
                    <p className="text_file">{file.nameFile ? file.nameFile : file.nameLink}</p>
                    {assignorIconDownload(file.nameFile)}
                </div>

                {!isSuccess
                    && <>
                        <div className="breaker_ver"></div>
                        <div className="button_cover_elem" onClick={deleteFile}>
                            <div className="button_red">
                                <Trash weight="bold" className="exit_text" size={'20px'}/>
                            </div>
                        </div>
                    </>
                }

            </div>

            {!(isSuccess && isLast) && <div className="breaker"></div>}
        </>
  );
};

export default SolutionFile;
